import {Piece} from './piece'

class Game {
  constructor(room){
    this.piece = new Piece()
    this.list = []
    this.room = room
  }

  launchGame(){
    this.list = this.piece.generateList()
  }

  nextPiece(){
    this.list.push(this.piece.generateTetri())
  }

  pauseGame(Player) {
    if (Player.isMaster === true) {
      console.log('user ' + Player.user + 'paused the game')
    } else {
      console.log(Player.user + 'is not the master, cannot pause game')
    }
  }
}
