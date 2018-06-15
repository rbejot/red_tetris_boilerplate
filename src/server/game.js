import {Piece} from './piece'
import {Player} from './player'

export class Game {
  
  launchGame(){
    this.list = this.tetris.generateList()
    // send start
    // send this.list[0] to all players
  }

  createRoom (action, socket) {
    let room = action.room
    let clientsInRoom = io.sockets.adapter.rooms[room]
    let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
    if(numClients === 0){
      socket.join(room)
      socket.emit('action', {type: 'create', room: room, id: socket.id})
      player.updateUsersInfo(socket.id, action.player, room)
      this.updateRoomsInfo(room, action.player, true)
      socket.room = room
      socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    } else {
      socket.emit('action', {type: 'not_created', room: room})
    }
  }

  joinRoom (action, socket) {
    let room = action.room
    let clientsInRoom = io.sockets.adapter.rooms[room]
    let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
    socket.to(room).emit('action', {type: 'p2_joined', player_2: action.player})
    player.updateUsersInfo(socket.id, action.player, room)
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
    try {
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
      obj[roomNB] = {master: master, player_2: player_2, isFull: isFull}
      ROOMS_INFO = Object.assign(ROOMS_INFO, obj)
      console.log("ROOMS_INFO", ROOMS_INFO);
    } catch (e) {
      console.log(e)
    }
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

  nextPiece(index){
  }

  pauseGame(Player) {

  }
}

export const startGame = (room, id, action) => {
  let master = new Player(INFOS.ROOMS_INFO[room].master, id, true)
  let player2 = new Player(INFOS.ROOMS_INFO[room].player2, id, false)  
  let game = new Game(room, master, player2)
}
