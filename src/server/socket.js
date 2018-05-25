

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
          console.log('room ====', io.sockets.adapter.rooms)
          console.log('Client ID ' + socket.id + ' joined room ' + room);
          socket.emit('create', room, socket.id)
          generate_tetri(socket.id)
      } else if(numClients === 1){
          console.log('Client ID ' + socket.id + ' joined room ' + room);
          io.sockets.in(room).emit('join', room)
          socket.join(room)
          socket.emit('joined', room, socket.id)
          io.sockets.in(room).emit('ready');
      } else {
        socket.emit('full', room)
        console.log('this room is full')
      }
      }
    })
  })
}

const generate_tetri = id => {
  console.log(id)
}
