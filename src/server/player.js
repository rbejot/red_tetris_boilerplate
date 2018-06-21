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
    // console.log("USERS_INFO", USERS_INFO)
  }

  updateUserMalus (user, malus) {
    if (USERS_INFO && USERS_INFO[user]) {
      return USERS_INFO[user].malus += malus    
    } else {
      console.log('error while updating malus')
    }
  }

  updateUserIndex (user) {
    if (USERS_INFO && USERS_INFO[user]) {
      return USERS_INFO[user].piece += 1      
    } else {
      console.log('Error while updating piece')
    }
  }

  updateWinner (user, isWinner) {
    if (USERS_INFO && USERS_INFO[user]) {
      return USERS_INFO[user].isWinner = isWinner
    } else {
      console.log('Error while updating winner')
    }
  }

  UserHasLeft (id, username, room, socket) {
    if (!USERS_INFO.hasOwnProperty(username)) {
      if (username) {
        ALL_USERS.splice(username, 1)
      }
      return
    }
    else {
      ALL_USERS.splice(username, 1)
      delete USERS_INFO[username]
      if (ROOMS_INFO[room].master === username) {
          if (!ROOMS_INFO[room].isFull) {
            delete ROOMS_INFO[room]
            return
          }
        var user = ROOMS_INFO[room].player_2
        ROOMS_INFO[room].master = user
        } else {
          var user = ROOMS_INFO[room].master        
        }
      console.log("user avant quitter", USERS_INFO[user])
      USERS_INFO[user].piece = 0
      USERS_INFO[user].malus = 0
      console.log("user apres quitter", USERS_INFO[user])
      ROOMS_INFO[room].player_2 = ""
      ROOMS_INFO[room].isFull = false
      ROOMS_INFO[room].gameStarted = false
      ROOMS_INFO[room].gameOver = false
      ROOMS_INFO[room].pieces.length = 0
      socket.to(socket.room).emit('action', {type: 'update_room', room: ROOMS_INFO[room]});
    }
  }
}