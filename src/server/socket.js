var users = []

export const initEngine = (io,loginfo) => {
  io.on('connection', function(socket){
    loginfo("Socket connected: " + socket.id)
    socket.on('action', (action) => {
      switch(action.type) {
        case 'server/ping':
          socket.emit('action', {type: 'pong'})
        case 'server/create_room':
          createRoom(action, io, socket)
        case 'server/join_room':
          joinRoom(action, io, socket)
        case 'server/get_listRoom':
          let rooms = listRooms(io)
          socket.emit('action', {type: 'roomList', rooms: rooms})
        case 'server/add_username':
          var user = action.player
          if (checkUsername(user) === true) {
            socket.emit('action', {type: 'good_username'})
            users = users.push(user)
          } else {
            socket.emit('action', {type: 'username_not_available'})
          }
        case 'server/leave_room':
          leaveRoom(action, io, socket)
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
  socket.broadcast.emit('action', {type: 'update_list', rooms: delete_from_list(listRooms(io), room)})
  if(numClients === 1){
    //console.log('Client ID ' + socket.id + ' joined room ' + room);
    socket.join(room)
    socket.emit('action', {type: 'joined', room: room, id: socket.id})
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
  if (index > -1)
    rooms.splice(index, 1)
  return rooms
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
  let index = users.indexOf(username)
  return index > -1 ? false : true
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
