import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME, ERR_USERNAME, RIGHT, LEFT, DOWN, START, NEW_TETRI, start } from '../actions/game'

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
        if (grid.indexOf(position[i] + 10) > -1)
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
        console.log("DEBUG:", position[i], getRow(position[i]))
        if (!(position[i] < (getRow(position[i]) * 10 + 9)))
          return false
      }
      return true
    case LEFT:
      for (var i = 0; i < position.length; i++) {
        console.log("DEBUG:", position[i] - 1, getRow(position[i]), getRow(position[i]) * 10)
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

const reducer = (state = {} , action) => {
  let position = 0
  let row = 0
  let save = []
  switch(action.type){
    case START: 
      return {
        ...state,
        position: [3, 4, 5, 14],
        tetri: "T",
        row: 1,
        grid: [],
        start: true
      }
    case NEW_TETRI:
      return {
        ...state,
        tetri: "T",
        position: [3, 4, 5, 14],
        row: 1,
        tetri_pose: false
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