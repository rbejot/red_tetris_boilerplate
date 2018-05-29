var globalUsers = []
var globalMaster = {}

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
          //let rooms = listRooms(io)
          socket.emit('action', {type: 'roomList', rooms: globalMaster})
          break
        case 'server/add_username':
          var user = action.player
          if (checkUsername(user) === true) {
            socket.emit('action', {type: 'good_username', player: user})
            globalUsers.push(user)
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
  delete globalMaster[room]
  socket.broadcast.emit('action', {type: 'update_list', rooms: globalMaster})
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
    var roomNB = room
    var obj = {}
    obj[roomNB] = action.player
    globalMaster = Object.assign(globalMaster, obj)
    console.log("global master", globalMaster)
    socket.broadcast.emit('action', {type: 'update_list', rooms: listRooms(io)})
    let master = new Player(action.player, room, numClients)
    master.isPlayerMaster()
  } else {
    socket.emit('action', {type: 'not_created', room: room})
    //console.log('cannot create room, already exists')
  }
}

const delete_from_list = (rooms, the_room) => {
  let index = rooms.indexOf(the_room)
  if (index > -1) {
    rooms.splice(index, 1)
    delete globalMaster[room]
  }
  return globalMaster
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
  if (globalUsers.length > 0) {
    let index = globalUsers.indexOf(username)
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
