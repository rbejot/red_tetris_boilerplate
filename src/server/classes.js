class Piece {
  constructor(pos, piece, coord, col){
    this.pos = pos
    this.col = col
    this.coord = coord
    this.piece = piece
  }
}

class Game {
  constructor(room, master,){
    this.room = room
    this.matser = matser
  }

  launchGame(){
    console.log('game as starder on room :' + this.room)
    console.log('players :' + this.master)
  }

  nextPiece(){

  }

  pauseGame(Player) {
    if (Player.isMaster === true) {
      console.log('user ' + Player.user + 'paused the game')
    } else {
      console.log(Player.user + 'is not the master, cannot pause game')
    }
  }
}
