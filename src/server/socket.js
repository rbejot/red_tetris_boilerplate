import {listRooms} from './rooms'
import {createRoom} from './rooms'
import {joinRoom} from './rooms'
import {UserHasLeft} from './users'
import {updateRoomsInfo} from './rooms'
import {leaveRoom} from './rooms'
import {checkUsername} from './users'
import INFOS from './globals'

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
          socket.emit('action', {type: 'roomList', rooms: INFOS.ROOMS_INFO})
          break
        case 'server/add_username':
          let username = action.player
          let user = username.toLowerCase()
          if (checkUsername(user) === true) {
            socket.emit('action', {type: 'good_username', player: user})
            socket.username = user
          } else {
            socket.emit('action', {type: 'username_not_available'})
          }
          break
        case 'server/start':
          startGame(socket.room, socket.id, action)
          break
        case 'server/leave_room':
          leaveRoom(action, io, socket)
          break
        default:
          console.log('No action received');
          break;
      }
    })
    socket.on('disconnect', () => {
      UserHasLeft(socket.id, socket.username, socket.room, socket)
      socket.broadcast.emit('action', {type: 'update_list', rooms: INFOS.ROOMS_INFO})
      // console.log("USERS", INFOS.USERS_INFO)
      // console.log("ROOMS", INFOS.ROOMS_INFO)
      // console.log("ALL", INFOS.ALL_USERS)
    });
  })
}
