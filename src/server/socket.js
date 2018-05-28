export const initEngine = (io,loginfo) => {
  io.on('connection', function(socket){
    loginfo("Socket connected: " + socket.id)
    socket.on('action', (action) => {
      if(action.type === 'server/ping'){
        console.log(action)
        socket.emit('action', {type: 'pong'})
      }
      if(action.type === 'server/create_room'){
        let room = action.room
        let clientsInRoom = io.sockets.adapter.rooms[room]
        let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
        console.log('Room ' + room + ' now has ' + numClients + ' client(s)');
        if(numClients === 0){
          socket.join(room)
          socket.emit('action', {type: 'create', room: room, id: socket.id})
          let master = new Player(socket, room, numClients)
          master.isPlayerMaster()
          console.log('ROOOOM', io.sockets.adapter.rooms[room])
        } else if(numClients === 1){
          console.log('Client ID ' + socket.id + ' joined room ' + room);
          socket.join(room)
          socket.emit('action', {type: 'joined', room: room, id: socket.id})
          io.sockets.in(room).emit('ready');
          let user = new Player(socket, room, numClients)
          user.isPlayerMaster()
        } else {
          socket.emit('action', {type: 'reject', room: room})
          console.log('cannot create room, already exists')
        }
      }
      if (action.type === 'server/join_room'){
        let room = action.room
        let clientsInRoom = io.sockets.adapter.rooms[room]
        let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0
        if(numClients === 1){
            console.log('Client ID ' + socket.id + ' joined room ' + room);
            socket.join(room)
            socket.emit('action', {type: 'joined', room: room, id: socket.id})
            io.sockets.in(room).emit('ready');
        } else{
          socket.emit('action', {type: 'reject', room: room})
          console.log('this room is full')
        }
      }
    })
  })
}

class Player {
  constructor(socket, room, isMaster){
    this.user = socket.id
    this.roomNb = room
    this.isMaster = isMaster
  }

  isPlayerMaster(){
    if (this.isMaster === 0) {
      console.log("player is master")
    } else {
      console.log("player join room")
    }
  }
}
