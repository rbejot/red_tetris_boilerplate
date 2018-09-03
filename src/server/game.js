import {Piece} from './piece'
import {Player} from './player'
import {logerror} from './index'

export class Game {
  constructor() {
    this.piece = new Piece()
  }

  startGame(socket, room){
    if (ROOMS_INFO[room]) {
      console.log("start game")
      var master = ROOMS_INFO[room].master
      var player2 = ROOMS_INFO[room].player_2
      if (USERS_INFO && USERS_INFO[master] && USERS_INFO[player2]) {
        USERS_INFO[master].piece = 0
        USERS_INFO[player2].piece = 0
        USERS_INFO[master].malus = 0
        USERS_INFO[player2].malus = 0
      }
      ROOMS_INFO[room].gameStarted = true
      ROOMS_INFO[room].gameOver = false
      if (ROOMS_INFO[room].pieces.length > 0) {
        ROOMS_INFO[room].pieces.length = 0
      }
      ROOMS_INFO[room].pieces = this.piece.generateList()
      var tetri = ROOMS_INFO[room].pieces[0]
      var pos = this.piece.getTetriPos(ROOMS_INFO[room].pieces[0])
      var color = this.piece.getTetriColor(ROOMS_INFO[room].pieces[0])
      io.in(room).emit('action', {type: 'start', pos: pos, color: "#" + color, tetri: tetri, next_tetri: this.piece.getTetriPos(ROOMS_INFO[room].pieces[1])})
      socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    } else {
      logerror("Couldn't start game")
    }
  }

  newTetri(socket, action) {
    var room = socket.room
    var username = socket.username
    if (username && ROOMS_INFO[room] && USERS_INFO && USERS_INFO[username]) {
      var p2 = ROOMS_INFO[room].master == username ? ROOMS_INFO[room].player_2 : ROOMS_INFO[room].master
      var malus_p2 = action.malus
      var grid_p2 = action.grid
      var dead = action.dead
      player.updateUserMalus(p2, malus_p2)
      socket.to(room).emit('action', {type: 'tetri_pose_p2', malus_p2: malus_p2, grid_p2: grid_p2, dead_p2: dead});
      var i = player.updateUserIndex(username)
      if (i >= ROOMS_INFO[room].pieces.length -1) {
        var list = this.piece.generateList()
        Array.prototype.push.apply(ROOMS_INFO[room].pieces, list)
      }
      var malus = USERS_INFO[username].malus
      var tetri = ROOMS_INFO[room].pieces[i]
      var pos = this.piece.getTetriPos(tetri)
      var color = this.piece.getTetriColor(tetri)
      console.log("USER", username, malus, tetri, pos, color)
      socket.emit('action', {type: 'new_tetri', pos: pos, color: "#" + color, tetri: tetri, next_tetri: this.piece.getTetriPos(ROOMS_INFO[room].pieces[i + 1])})
    } else {
      logerror('Error while sending new tetriminos')
    }
  }

  gameOver(socket) {
    var room = socket.room
    if (room && ROOMS_INFO[room]) {
      ROOMS_INFO[room].gameOver = true
      ROOMS_INFO[room].gameStarted = false
      ROOMS_INFO[room].pieces.length = 0
      socket.to(room).emit('action', {type: 'game_over'})
      socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    } else {
      logerror('Error while ending game')
    }
   
  }

  createRoom (action, socket) {
    let room = action.room
    if (room) {
      let clientsInRoom = io.sockets.adapter.rooms[room]
      let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
      if(numClients === 0){
        socket.join(room)
        socket.emit('action', {type: 'create', room: room, id: socket.id})
        player.updateUsersInfo(socket.id, action.player, room, 0, 0, false)
        this.updateRoomsInfo(room, action.player, true)
        socket.room = room
        socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
      } else {
        socket.emit('action', {type: 'not_created', room: room})
      }
    } else {
      logerror('Error while creating the room')
    }
  }

  joinRoom (action, socket) {
    let room = action.room
    let clientsInRoom = io.sockets.adapter.rooms[room]
    let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
    socket.to(room).emit('action', {type: 'p2_joined', player_2: action.player})
    player.updateUsersInfo(socket.id, action.player, room, 0, 0, false)
    this.updateRoomsInfo(room, action.player, false)
    socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    if(numClients === 1){
      socket.join(room)
      socket.emit('action', {type: 'joined', room: room, id: socket.id, master: action.master})
      socket.room = room
      io.sockets.in(room).emit('ready');
    } else {
      socket.emit('action', {type: 'reject', room: room})
    }
  }

  updateRoomsInfo (room, username, isMaster) {
    var roomNB = room
    var obj = {}
    if (isMaster === true) {
      var master = username
      var player_2 = ""
      var isFull = false
    } else {
      var master = ROOMS_INFO[roomNB].master
      var player_2 = username
      var isFull = true
    }
    var pieces = []
    obj[roomNB] = {master: master, player_2: player_2, isFull: isFull, gameStarted: false, gameOver: false, pieces: pieces}
    ROOMS_INFO = Object.assign(ROOMS_INFO, obj)
  }

  leaveRoom (action, socket) {
    let room = action.room
    socket.leave(room)
  }

   listRooms () {
      var rooms = []
      for( var room in io.sockets.adapter.rooms ) {
        if (io.sockets.adapter.rooms[room].length === 1 && room.length === 5)
          rooms.push(room);
      }
      return rooms
  }

}