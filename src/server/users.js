import INFOS from './globals'

export const updateUsersInfo = (id, username, room) => {
  var socket = id
  var obj = {}
  obj[socket] = {username: username, roomNB: room}
  INFOS.USERS_INFO = Object.assign(INFOS.USERS_INFO, obj)
  console.log("user info", INFOS.USERS_INFO)
}


export const UserHasLeft = (id, username, room, socket) => {
  if (!INFOS.USERS_INFO.hasOwnProperty(id)) {
    if (username) {
      INFOS.ALL_USERS.splice(username, 1)
    }
    return
  }
  else {
    INFOS.ALL_USERS.splice(username, 1)
    delete INFOS.USERS_INFO[id]
    if (INFOS.ROOMS_INFO[room].master === username) {
        if (!INFOS.ROOMS_INFO[room].isFull) {
          delete INFOS.ROOMS_INFO[room]
          return
        }
      INFOS.ROOMS_INFO[room].master = INFOS.ROOMS_INFO[room].player_2
    }
    INFOS.ROOMS_INFO[room].player_2 = ""
    INFOS.ROOMS_INFO[room].isFull = false
    console.log(INFOS.ROOMS_INFO[room]);
    socket.to(socket.room).emit('action', {type: 'server/update_room', room: INFOS.ROOMS_INFO[room]});
  }
}

export const checkUsername = username => {
  if (INFOS.ALL_USERS.length > 0) {
    let index = INFOS.ALL_USERS.indexOf(username)
    if (index > -1) {
      return false
    }
  }
  INFOS.ALL_USERS.push(username)
  return true
}
