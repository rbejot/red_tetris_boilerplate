var ALL_USERS = []
var USERS_INFO = {}
var ROOMS_INFO = {}

export const initEngine = (io,loginfo) => {
  io.on('connection', function(socket){
    loginfo("Socket connected: " + socket.id)
    socket.on('action', (action) => {
      switch(action.type) {
        case 'server/ping':
          socket.emit('action', {type: 'pong'})
          break
        case 'server/create_room':
          createRoom(action, io, socket)
          break
        case 'server/join_room':
          joinRoom(action, io, socket)
          break
        case 'server/get_listRoom':
          socket.emit('action', {type: 'roomList', rooms: ROOMS_INFO})
          break
        case 'server/add_username':
          var user = action.player
          if (checkUsername(user) === true) {
            socket.emit('action', {type: 'good_username', player: user})
            ALL_USERS.push(user)
          } else {
            socket.emit('action', {type: 'username_not_available'})
          }
          break
        case 'server/leave_room':
          leaveRoom(action, io, socket)
          break
        default:
          console.log('No action received');
          break;
      }
    })
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  })
}

const leaveRoom = (action, io, socket) => {
  let room = action.room
  socket.leave(room)
}

const joinRoom = (action, io, socket) => {
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
  socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
  if(numClients === 1){
    //console.log('Client ID ' + socket.id + ' joined room ' + room);
    socket.join(room)
    socket.emit('action', {type: 'joined', room: room, id: socket.id, master: action.master})
    io.sockets.in(room).emit('ready');
    let player = new Player(action.player, room, numClients)
    player.isPlayerMaster()
  } else{
    socket.emit('action', {type: 'reject', room: room})
    //console.log('this room is full')
  }
}

const createRoom = (action, io, socket) => {
  let room = action.room
  let clientsInRoom = io.sockets.adapter.rooms[room]
  let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
  //console.log('Room ' + room + ' now has ' + numClients + ' client(s)');
  if(numClients === 0){
    socket.join(room)
    socket.emit('action', {type: 'create', room: room, id: socket.id})
    //j'envois à tout le monde la nouvelle liste de rooms
    //TODO: mettre à jour la liste quand qqn quitte une room
    updateUsersInfo(socket.id, action.player, room)
    updateRoomsInfo(room, action.player, true)
    socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    let master = new Player(action.player, room, numClients)
    master.isPlayerMaster()
  } else {
    socket.emit('action', {type: 'not_created', room: room})
    //console.log('cannot create room, already exists')
  }
}

const updateRoomsInfo = (room, username, isMaster) => {
  var roomNB = room
  var obj = {}
  if (isMaster === true) {
    var master = username
    var player_2 = ""
    var isFull = false
  } else {
    var master = ""
    var player_2 = username
    var isFull = true
  }
  obj[roomNB] = {master: master, player_2: player_2, isFull: isFull}
  ROOMS_INFO = Object.assign(ROOMS_INFO, obj)
  console.log("ROOMS_INFO", ROOMS_INFO);
}

const updateUsersInfo = (id, username, room) => {
  var socket = id
  var obj = {}
  obj[socket] = {username: username, roomNB: room}
  USERS_INFO = Object.assign(USERS_INFO, obj)
  console.log("user info", USERS_INFO)
}

const listRooms = (io) => {
  var rooms = []
  for( var room in io.sockets.adapter.rooms ) {
    if (io.sockets.adapter.rooms[room].length === 1 && room.length === 5)
      rooms.push(room);
  }
  return rooms
}


const checkUsername = username => {
  if (ALL_USERS.length > 0) {
    let index = ALL_USERS.indexOf(username)
    return index > -1 ? false : true
  }
  return true
}

class Player {
  constructor(username, room, isMaster){
    this.user = username
    this.room = room
    this.isMaster = isMaster
  }

  isPlayerMaster(){
    if (this.isMaster === 0) {
      console.log('player ' + this.user.toUpperCase() + ' is master of room: ' + this.room)
    } else {
      console.log('player ' + this.user.toUpperCase() + ' join room: ' + this.room)
    }
  }
}
