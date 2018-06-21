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
    for (var i = 0; i < 4; i++) {
      position[i] += (malus * 10)
    }

    console.log("tetri", tetri, "pos", position, "malus", malus)
    return position
  }

  getTetriColor(tetri) {
    var color = ''
    switch (tetri) {
      case "O":
        color = '24a6f2'
        break
      case "I":
        color = 'fcde00'
        break
      case "J":
        color = '47c400'
        break
      case "T":
        color = 'f70e7b'
        break
      case "L":
        color = 'db0000'
        break
      case "S":
        color = '820093'
        break
      case "Z":
        color = '0925f7'
        break
    }
    return color
  }
}