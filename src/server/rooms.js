import {updateUsersInfo} from './users'
import {Player} from './player'
import INFOS from './globals'

export const listRooms = (io) => {
  var rooms = []
  for( var room in io.sockets.adapter.rooms ) {
    if (io.sockets.adapter.rooms[room].length === 1 && room.length === 5)
      rooms.push(room);
  }
  return rooms
}

export const updateRoomsInfo = (room, username, isMaster) => {
  var roomNB = room
  var obj = {}
  if (isMaster === true) {
    var master = username
    var player_2 = ""
    var isFull = false
  } else {
    var master = INFOS.ROOMS_INFO[roomNB].master
    var player_2 = username
    var isFull = true
  }
  obj[roomNB] = {master: master, player_2: player_2, isFull: isFull}
  INFOS.ROOMS_INFO = Object.assign(INFOS.ROOMS_INFO, obj)
  console.log("ROOMS_INFO", INFOS.ROOMS_INFO);
}

export const leaveRoom = (action, io, socket) => {
  let room = action.room
  socket.leave(room)
}

export const createRoom = (action, io, socket) => {
  let room = action.room
  let clientsInRoom = io.sockets.adapter.rooms[room]
  let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
  if(numClients === 0){
    socket.join(room)
    socket.emit('action', {type: 'create', room: room, id: socket.id})
    updateUsersInfo(socket.id, action.player, room)
    updateRoomsInfo(room, action.player, true)
    socket.room = room
    socket.broadcast.emit('action', {type: 'update_list', rooms: INFOS.ROOMS_INFO})
    let master = new Player(action.player, room, numClients)
    master.isPlayerMaster()
  } else {
    socket.emit('action', {type: 'not_created', room: room})
  }
}

export const joinRoom = (action, io, socket) => {
  let room = action.room
  let clientsInRoom = io.sockets.adapter.rooms[room]
  let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
  //Quand qqn cherche aà rejoindre une partie MAJ de la liste des rooms
  //Je supprime la room de la liste, si qqn essaye de la rejoindre soit elle devient pleine
  //soit elle l'est déjà
  //Send name of player 2 to player master
  socket.to(room).emit('action', {type: 'p2_joined', player_2: action.player})
  updateUsersInfo(socket.id, action.player, room)
  updateRoomsInfo(room, action.player, false)
  socket.broadcast.emit('action', {type: 'update_list', rooms: INFOS.ROOMS_INFO})
  if(numClients === 1){
    socket.join(room)
    socket.emit('action', {type: 'joined', room: room, id: socket.id, master: action.master})
    socket.room = room
    io.sockets.in(room).emit('ready');
    let player = new Player(action.player, room, numClients)
    player.isPlayerMaster()
  } else{
    socket.emit('action', {type: 'reject', room: room})
  }
}
