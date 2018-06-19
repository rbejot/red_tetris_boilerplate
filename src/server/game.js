import {Piece} from './piece'
import {Player} from './player'
import {logerror} from './index'

export class Game {
  constructor() {
    this.piece = new Piece()
  }

  startGame(room){
    if (ROOMS_INFO[room]) {
      ROOMS_INFO[room].gameStarted = true
      ROOMS_INFO[room].pieces = this.piece.generateList()
      var tetri = ROOMS_INFO[room].pieces[0]
      var pos = this.piece.getTetriPos(ROOMS_INFO[room].pieces[0])
      var color = this.piece.getTetriColor(ROOMS_INFO[room].pieces[0])
      //io.in(room).emit('action', {type: 'start', pos: pos, color: color, tetri: tetri})
    } else {
      console.log("Couldn't start game")
    }

  }

  newTetri(socket) {
    var room = socket.room
    var username = socket.username
    if (username && ROOMS_INFO[room]) {
      console.log("username", username)
      console.log("user info", USERS_INFO[username])
      var i = player.updateUserIndex(username)
      if (i >= ROOMS_INFO[room].pieces.length -1) {
        var list = this.piece.generateList()
        Array.prototype.push.apply(ROOMS_INFO[room].pieces, list)
      }
      var tetri = ROOMS_INFO[room].pieces[i]
      var pos = this.piece.getTetriPos(ROOMS_INFO[room].pieces[i])
      var color = this.piece.getTetriColor(ROOMS_INFO[room].pieces[i])
      //socket.emit('action', {type: 'new_tetri', pos: pos, color: color, tetri: tetri})
    } else {
      logerror('Error while sending new tetriminos')
    }
  }

  gameOver(socket) {
    ROOMS_INFO[socket.room].piece.length = 0
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
      console.log('Error while creating the room')
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
    try {
      var rooms = []
      for( var room in io.sockets.adapter.rooms ) {
        if (io.sockets.adapter.rooms[room].length === 1 && room.length === 5)
          rooms.push(room);
      }
      return rooms
    } catch (e) {
      console.log(e)
    }
  }

}
