export class Piece {
  constructor() {
  }

  generateList() {
    for (let i = 0; i <= 9; i++) {
      this.tetriList.push(this.generateTetri())
    }
  }

  generateTetri() {
    let tetriminos = ['j', 't', 'l', 'i', 's', 'z', 'o']
    let i = Math.floor(Math.random() * Math.floor(7));
    return tetriminos[i]
  }
}

/* event piece_posée(joueur, piece)
  generate piece
  push piece dans liste de piece
  si joueur touche derniere piece
    generate piece
*/
