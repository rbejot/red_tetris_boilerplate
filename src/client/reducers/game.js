import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME, ERR_USERNAME, RIGHT, LEFT, DOWN, START, UP, JUMP, NEW_TETRI, start } from '../actions/game'
import { getRow, moveTetri, saveTetri, newRotation, rotateTetri, checkRotCell, checkRotate } from './tetris'

const jumpTetri = (grid, pos) => {
  let i = 0
  while (!check_cell(grid, [pos[0] + i, pos[1] + i, pos[2] + i, pos[3] + i], DOWN))
    i += 10
  return moveTetri(pos, i)
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
        start: true,
        gameover: false,
        tetri_nb: 0
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
    case JUMP:
      position = jumpTetri(state.grid, state.position)
      console.log(position)
      save = saveTetri(state.grid, position)
      return {
        ...state,
        position: position,
        tetri_pose: true,
        grid: save
      }
    case UP:
      if (checkRotate(state.grid, state.position, state.rotate, state.tetri)) {
        position = rotateTetri(state.grid, state.position, state.rotate, state.tetri)
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
          tetri_pose: true,
          tetri_nb: state.tetri_nb++ 
        }
      } else {
        state = state
      }
      if (position === 0) {
        return {
          ...state,
          gameover: true,
          start: false
        }
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
        start: false,
        gameover: false
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