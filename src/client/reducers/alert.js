import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME, ERR_USERNAME, RIGHT, LEFT, DOWN, START, UP, NEW_TETRI, start } from '../actions/game'

const getRow = (number) => {
  if (number % 10 === 0)
    return Math.ceil((number / 10))
  else 
    return Math.ceil((number / 10) - 1 );
}

const check_cell = (grid, position, direction) => {
  switch (direction) {
    case DOWN:
      for (var i = 0; i < position.length; i++) {
        if (grid.indexOf(position[i] + 10) > -1 || position[i] + 10 >= 200)
          return true
      }
      return false
    case RIGHT:
      for (var i = 0; i < position.length; i++) {
        if (grid.indexOf(position[i] + 1) > -1)
          return true
      }
      return false
    case LEFT:
      for (var i = 0; i < position.length; i++) {
        if (grid.indexOf(position[i] - 1) > -1)
          return true
      }
      return false
    default:
      return true
  }
}
const checkBorder = (position, direction) => {
  switch (direction) {
    case RIGHT:
      for (var i = 0; i < position.length; i++) {
        if (!(position[i] < (getRow(position[i]) * 10 + 9)))
          return false
      }
      return true
    case LEFT:
      for (var i = 0; i < position.length; i++) {
        if (position[i] - 1 === (getRow(position[i]) - 1 ) * 10 + 9)
          return false
      }
      return true
  }
}

const moveTetri = (pos, value) => {
  let new_pos = []
  pos.map((cell) => {
    new_pos.push(cell + value)
  })
  return new_pos
}

const saveTetri = (grid, positions) => {
  positions.map((pos) => {
    grid.push(pos)
  })
  return grid
}

const newRotation = (tetri, grid, position, p0, p1, p2, p3) => {
  if (tetri === "I") {
    if (position[1] === getRow(position[1]) * 10 + 9 && checkRotCell(grid, position, p0 - 2, p1 - 2, p2 - 2, p3 - 2)) {
      return [position[0] + p0 - 2, position[1] + p1 - 2, position[2] + p2 - 2, position[3] + p3 - 2]
    }
    else if (getRow(position[0]) !== getRow(position[3]) && getRow(position[0] + p0) !== getRow(position[3] + p3) && checkRotCell(grid, position, p0--, p1--, p2--, p3--) && position[0] % 10 === 9) {
      return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
    }
    else if (position[1] === getRow(position[1]) * 10 && checkRotCell(grid, position, p0 + 3, p1 + 3, p2 + 3, p3 + 3)) {
      return [position[0] + p0 + 3, position[1] + p1 + 3, position[2] + p2 + 3, position[3] + p3 + 3]
    }
    else if (getRow(position[0]) !== getRow(position[3]) && getRow(position[0] + p0) !== getRow(position[3] + p3) && checkRotCell(grid, position, p0 + 2, p1 + 2, p2 + 2, p3 + 2) && position[0] % 10 === 1) {
      return [position[0] + p0 + 2, position[1] + p1 + 2, position[2] + p2 + 2, position[3] + p3 + 2] 
    }
  }
  if (position[0] + p0 > 200 || position[1] + p1 > 200|| position[2] + p2 > 200 || position[3] + p3 > 200)
    return position
  if (position[1] === getRow(position[1]) * 10 + 9 && checkRotCell(grid, position, p0--, p1--, p2--, p3--)) {
    return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
  }
  else if (position[1] === getRow(position[1]) * 10 && checkRotCell(grid, position, p0++, p1++, p2++, p3++)) {
    return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
  }
  console.log(p0, p1, p2, p3)
  return [position[0] + p0, position[1] + p1, position[2] + p2, position[3] + p3]
}

const rotateTetri = (grid, position, rotate, tetri) => {
  let new_pose = []
  console.log(tetri)
  switch(tetri) {
    case "T":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, 1, 10, 19, -1)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position,11, 0, -11, -9)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, 11)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, 9)
      break;
    case "L":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 9, 20)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -11, -2)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, -20)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, 2)
      break
    case "J":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 9, 2)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -11, 20)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -9, -2)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 11, -20)
      break
    case "S":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, 11, 20)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, 9, -2)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, -11, -20)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, -9, 2)
      break
    case "Z":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -9, 0, -11, -2)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 11, 0, -9, -20)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 9, 0, 11, 2)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -11, 0, 9, 20)
      break
    case "I":
      if (rotate === 1)
        new_pose = newRotation(tetri, grid, position, -8, 1, 10, 19)
      else if (rotate === 2)
        new_pose = newRotation(tetri, grid, position, 21, 10, -1, -12)
      else if (rotate === 3)
        new_pose = newRotation(tetri, grid, position, 8, -1, -10, -19)
      else if (rotate === 4)
        new_pose = newRotation(tetri, grid, position, -21, -10, 1, 12)
      break
    default:
      break
  }
  return new_pose  
}

const checkRotCell = (grid, position, p0, p1, p2, p3) => {
  if (grid.length === 0)
    return true
  if (position[0] + p0 > 200 || position[1] + p1 > 200|| position[2] + p2 > 200 || position[3] + p3 > 200)
    return false
  if (grid.includes(position[0] + p0) || grid.includes(position[1] + p1) || grid.includes(position[2] + p2) || grid.includes(position[3] + p3))
    return false
  return true
}

const checkRotate = (grid, position, rotate, tetri) => {
  switch(tetri) {
    case "T":
      if (rotate === 1)
        return checkRotCell(grid, position, 1, 10, 19, -1)
      else if (rotate === 2)
        return checkRotCell(grid, position,11, 0, -11, -9)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, 11)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, 9)
      break;
    case "L":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 9, 20)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -11, -2)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, -20)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, 2)
    case "J":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 9, 2)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -11, 20)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -9, -2)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 11, -20)
    case "S":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, 11, 20)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, 9, -2)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, -11, -20)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, -9, 2)
    case "Z":
      if (rotate === 1)
        return checkRotCell(grid, position, -9, 0, -11, -2)
      else if (rotate === 2)
        return checkRotCell(grid, position, 11, 0, -9, -20)
      else if (rotate === 3)
        return checkRotCell(grid, position, 9, 0, 11, 2)
      else if (rotate === 4)
        return checkRotCell(grid, position, -11, 0, 9, 20)
    case "I":
      if (rotate === 1)
        return checkRotCell(grid, position, -8, 1, 10, 19)
      else if (rotate === 2)
        return checkRotCell(grid, position, 21, 10, -1, -12)
      else if (rotate === 3)
        return checkRotCell(grid, position, 8, -1, -10, -19)
      else if (rotate === 4)
        return checkRotCell(grid, position, -21, -10, 1, 12)
    default:
      break
  }
}


// TETRIMINO
// T [3, 4, 5, 14]
// L [13, 14, 15, 5]
// J [13, 14, 15, 3]
// S [13, 14, 4, 5]
// Z [3, 4, 14, 15]
// I [3, 4, 5, 6]

const reducer = (state = {} , action) => {
  let position = 0
  let row = 0
  let save = []
  let rotate = 0
  switch(action.type){
    case START: 
      return {
        ...state,
        position: [3, 4, 14, 15],
        tetri: "Z",
        rotate: 1,
        row: 0,
        grid: [],
        start: true
      }
    case NEW_TETRI:
      return {
        ...state,
        tetri: action.tetri,
        position: action.position,
        rotate: 1,
        row: 0,
        tetri_pose: false
      }
    case UP:
      if (checkRotate(state.grid, state.position, state.rotate, state.tetri)) {
        position = rotateTetri(state.grid, state.position, state.rotate, state.tetri)
        console.log(state.position, position)
        if (state.rotate !== 4)
          rotate = state.rotate + 1
        else
          rotate = 1
      }
      else {
        position = state.position
        //Deactivate for I
        // rotate = state.rotate - 1
      }
      console.log(rotate)
      return {
        ...state,
        position: position,
        rotate: rotate
      }
    case DOWN:
      if (state.row < 19 && !check_cell(state.grid, state.position, DOWN)) {
        position = moveTetri(state.position, 10)
        row = state.row + 1
      }
      else if (state.row) {
        save = saveTetri(state.grid, state.position)
        return {
          ...state,
          grid: save,
          tetri_pose: true
        }
      } else {
        state = state
      }
      return {
        ...state,
        position: position,
        row: row
      }
    case RIGHT:
      if (checkBorder(state.position, RIGHT) && !check_cell(state.grid, state.position, RIGHT))
        position = moveTetri(state.position, 1)
      else
        position = state.position
      return {
        ...state,
        position: position
      }
    case LEFT:
      if (checkBorder(state.position, LEFT) && !check_cell(state.grid, state.position, LEFT))
        position = moveTetri(state.position, -1)
      else
        position = state.position
      return {
        ...state,
        position: position
      }
    case ALERT_POP:
      return state
    case ERR_USERNAME:
      return {
        ...state,
        error_username: "Pseudo non valide"
      }
    case 'good_username':
      return {
        ...state,
        player: action.player,
        error_username: false
      }
    case 'username_not_available':
      return {
        ...state,
        error_username: "Pseudo déjà utilisé"
      }
    case 'not_created':
      return { party: false }
    case 'create':
      return {
        ...state,
        party: true,
        master: true,
        full: false,
        id: action.id,
        room: action.room,
        start: false
      }
    case 'roomList':
      return {
        ...state,
        rooms: action.rooms
      }
    case 'update_list':
      return {
        ...state,
        rooms: action.rooms
      }
    case 'joined':
      return {
        ...state,
        room: action.room,
        id: action.id,
        party: true,
        master: false,
        master_name: action.master,
        full: true,
        start: false
      }
    case 'p2_joined':
      return {
        ...state,
        p2: action.player_2,
        full: true
      }
    case 'reject':
      return {
        ...state,
        reject: true
      }
    default: 
      return state
  }
}

export default reducer