import {Piece} from './piece'
import {Player} from './player'

class Game {
  constructor(room, master, player2){
    this.room = room
    this.tetris = new Piece()
    this.player2 = player2
    this.master = master
  }

  launchGame(){
    this.list = this.tetris.generateList()
    // send start
    // send this.list[0] to all players
  }

  nextPiece(index){

    let index = this.player2.moveIndex()
    //send this.list[index] to player2
  }

  pauseGame(Player) {
    if (Player.isMaster === true) {
      console.log('user ' + Player.user + 'paused the game')
    } else {
      console.log(Player.user + 'is not the master, cannot pause game')
    }
  }
}

export const startGame = (room, id, action) => {
  let master = new Player(INFOS.ROOMS_INFO[room].master, id, true)
  let player2 = new Player(INFOS.ROOMS_INFO[room].player2, id, false)  
  let game = new Game(room, master, player2)
}
