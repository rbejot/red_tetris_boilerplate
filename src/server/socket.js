import {Game} from './game'
import {Player} from './player';

export const initEngine = (loginfo) => {
  global.ALL_USERS = []
  global.USERS_INFO = {}
  global.ROOMS_INFO = {}
  global.game = new Game()
  global.player = new Player()
  io.on('connection', function(socket){
    loginfo("Socket connected: " + socket.id)
    socket.on('action', (action) => {
      switch(action.type) {
        case 'server/ping':
          socket.emit('action', {type: 'pong'})
          break
        case 'server/create_room':
          game.createRoom(action, socket)
          break
        case 'server/join_room':
          game.joinRoom(action, socket)
          break
        case 'server/get_listRoom':
          socket.emit('action', {type: 'roomList', rooms: ROOMS_INFO})
          break
        case 'server/add_username':
          let username = action.player
          let user = username.toLowerCase()
          player.checkUsername(user, socket)
          break
        case 'server/start_game':
          game.startGame(socket.room)
          break
        case 'server/leave_room':
          game.leaveRoom(action, io, socket)
          break
        case 'server/tetri_pose':
          game.newTetri(socket)
          break;
        default:
          console.log(action, 'No action received');
          break;
      }
    })
    socket.on('disconnect', () => {
      player.UserHasLeft(socket.id, socket.username, socket.room, socket)
      socket.broadcast.emit('action', {type: 'update_list', rooms: ROOMS_INFO})
    });
  })
}
