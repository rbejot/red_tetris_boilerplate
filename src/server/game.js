class Game {
  constructor(){

  }

  launchGame(){
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