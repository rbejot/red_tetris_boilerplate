export class Piece {
  constructor(){
  }

  generateTetri() {
    let tetriminos = ['j', 'l', 't', 'o', 'z', 's', 'i']
    let tetri = Math.floor(Math.ramdom() * Math.floor(max))
    return tetri
  }

  generateList() {
    var list = []
    for(let i = 0; i < 10; i++) {
      list.push(this.generateTetri())
    }
    return list
  }
}


// tetri = list[index]

// lance la partie, cree la list des 10premiers tetriminos
// joueur pose une piece -> player.index ++
// 