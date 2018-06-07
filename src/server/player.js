export class Player {
  constructor(username, room, isMaster){
    this.user = username
    this.room = room
    this.isMaster = isMaster
    this.index = 0
  }

  moveIndex() {
    return this.index += this.index
  }

  sendTetri() {
    // send to player
  }

  isPlayerMaster(){
    if (this.isMaster === 0) {
      console.log('player ' + this.user.toUpperCase() + ' is master of room: ' + this.room)
    } else {
      console.log('player ' + this.user.toUpperCase() + ' join room: ' + this.room)
    }
  }
}
