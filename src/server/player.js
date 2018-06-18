export class Player {
  checkUsername (username, socket) {
    if (ALL_USERS.length > 0) {
      let index = ALL_USERS.indexOf(username)
      if (index > -1) {
        socket.emit('action', {type: 'username_not_available'})
        return false
      }
    }
    ALL_USERS.push(username)
    socket.emit('action', {type: 'good_username', player: username})
    socket.username = username
  }

   updateUsersInfo (id, username, room, malus, piece, isWinner) {
    var user = username
    var obj = {}
    obj[user] = {id: id, roomNB: room, malus: malus, piece: piece, isWinner: isWinner}
    USERS_INFO = Object.assign(USERS_INFO, obj)
    console.log("USERS_INFO", USERS_INFO)
  }

  updateUserMalus (user, malus) {
    USERS_INFO[user].malus = malus
  }

  updateUserIndex (user) {
    return USERS_INFO[user].piece += 1
  }

  updateWinner (user, isWinner) {
    USERS_INFO[user].isWinner = isWinner
  }

  UserHasLeft (id, username, room, socket) {
    if (!USERS_INFO.hasOwnProperty(id)) {
      if (username) {
        ALL_USERS.splice(username, 1)
      }
      return
    }
    else {
      ALL_USERS.splice(username, 1)
      delete USERS_INFO[id]
      if (ROOMS_INFO[room].master === username) {
          if (!ROOMS_INFO[room].isFull) {
            delete ROOMS_INFO[room]
            return
          }
        ROOMS_INFO[room].master = ROOMS_INFO[room].player_2
      }
      ROOMS_INFO[room].player_2 = ""
      ROOMS_INFO[room].isFull = false
      socket.to(socket.room).emit('action', {type: 'server/update_room', room: ROOMS_INFO[room]});
    }
  }
}
