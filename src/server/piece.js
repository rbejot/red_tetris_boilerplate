export class Piece {
  generateTetri() {
    let tetriminos = ["O", "I", "J", "T", "L", "S", "Z"]
    let tetri = Math.floor(Math.ramdom() * Math.floor(7))
    return tetri
  }

  generateList() {
    var list = []
    for(let i = 0; i < 10; i++) {
      list.push(this.generateTetri())
    }
    return list
  }

  getTetriPos(tetri) {
    var position = []
    switch (tetri) {
      case "O":
        position = [4, 5, 14, 15]
        break
      case "I":
        position = [3, 4, 5, 6]
        break
      case "J":
        position = [13, 14, 15, 3]
        break
      case "T":
        position = [3, 4, 5, 14]
        break
      case "L":
        position = [13, 14, 15, 5]
        break
      case "S":
        position = [13, 14, 4, 5]
        break
      case "Z":
        position = [3, 4, 14, 15]
        break
    }
  }
}