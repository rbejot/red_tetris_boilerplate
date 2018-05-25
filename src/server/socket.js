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
          console.log('Client ID ' + socket.id + ' joined room ' + room);
          socket.emit('action', {type: 'create', room: room, id: socket.id})
          generate_tetri(socket.id)
        } else {
          socket.emit('action', {type: 'reject', room: room})
          console.log('cant create room')
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
        } else {
          socket.emit('action', {type: 'reject', room: room})
          console.log('this room is full')
        }
      }
    })
  })
}



const generate_tetri = id => {
  console.log(id)
}
