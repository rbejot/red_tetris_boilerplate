import { logerror } from "./index";

export class Piece {
  generateTetri() {
    let tetriminos = ["O", "I", "J", "T", "L", "S", "Z"]
    let i = Math.floor(Math.random() * Math.floor(7))
    return tetriminos[i]
  }

  generateList() {
    var list = []
    for(let i = 0; i < 10; i++) {
      list.push(this.generateTetri())
    }
    return list
  }

  getTetriPos(tetri, malus) {
    if (tetri) {
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
      // if (malus && malus >= 0) {
      //   for (var i = 0; i < 4; i++) {
      //     position[i] += (malus * 10)
      //   }
      // }
      return position
    } else {
      logerror('Error while getting tetri position')
    }

  }

  getTetriColor(tetri) {
    if (tetri) {
      var color = ''
      switch (tetri) {
        case "O":
          color = '4dc918'
          break
        case "I":
          color = 'fcef00'
          break
        case "J":
          color = 'f27900'
          break
        case "T":
          color = 'ed1c5e'
          break
        case "L":
          color = '768bfc'
          break
        case "S":
          color = 'b509f9'
          break
        case "Z":
          color = '6cd8fc'
          break
      }
      return color
    } else {
      logerror('Error while getting tetri color')
    }
  }

}