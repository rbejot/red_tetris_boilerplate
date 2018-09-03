// import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME, ERR_USERNAME, RIGHT, LEFT, DOWN, START, UP, JUMP, NEW_TETRI, start, tetri_pose, ADD_SCORE} from '../actions/game'
import { getRow, moveTetri, saveTetri, newRotation, rotateTetri, checkRotCell, checkRotate, saveColor, checkMalus, addMalus } from './tetris'

const jumpTetri = (grid, pos, dead_grid) => {
  let i = 0
  while (!check_cell(grid, [pos[0] + i, pos[1] + i, pos[2] + i, pos[3] + i], DOWN, dead_grid))
    i += 10
  return moveTetri(pos, i)
}

const check_cell = (grid, position, direction, dead_grid) => {
  switch (direction) {
    case DOWN:
      for (var i = 0; i < position.length; i++) {
        if (grid.indexOf(position[i] + 10) > -1 || position[i] + 10 >= 200)
          return true
        if (dead_grid.indexOf(position[i] + 10) > -1)
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

const randomColor = () => {
  var colors = ["red", "green", "yellow", "blue", "pink", "orange", "violet"]
  return colors[Math.floor(Math.random() * Math.floor(7))]
}

const reducer = (state = {} , action) => {
  let position = 0
  let row = 0
  let save = []
  let rotate = 0
  let color = []
  let malus = 0
  let next = []
  switch(action.type){
    case 'tetri_pose_p2':
      if (action.malus_p2 > 0)
        addMalus(state.grid, action.malus_p2, state.color_grid, state.dead_grid)
      return {
        ...state, 
        dead_grid: state.dead_grid,
        grid_p2: action.grid_p2,
        dead_p2: action.dead_p2,
        speed: state.speed - 5 * action.malus_p2
      }
    case 'start': 
      return {
        ...state,
        leave: false,
        position: action.pos,
        tetri: action.tetri,
        dead_grid: [],
        rotate: 1,
        speed: 500,
        row: 0,
        grid: [],
        color_grid: {},
        start: true,
        gameover: false,
        win: false,
        score: 0,
        grid_p2: [],
        dead_p2: [],
        next_tetri: action.next_tetri,
        color: action.color
      }
    case 'new_tetri':
      return {
        ...state,
        tetri: action.tetri,
        position: action.pos,
        color: action.color,
        rotate: 1,
        speed: state.speed - 5,
        row: 0,
        next_tetri: action.next_tetri,
        tetri_pose: false
      }
    case JUMP:
      position = jumpTetri(state.grid, state.position, state.dead_grid)
      save = saveTetri(state.grid, position)
      malus = checkMalus(save, state.grid)
      return {
        ...state,
        position: position,
        tetri_pose: true,
        malus_to_p2: malus,
        color_grid: saveColor(state.color_grid, position, state.color, save, state.grid),
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
      }
      return {
        ...state,
        position: position,
        rotate: rotate
      }
    case DOWN:
      if (state.row < 19 && !check_cell(state.grid, state.position, DOWN, state.dead_grid)) {
        position = moveTetri(state.position, 10)
        row = state.row + 1
      }
      else if (state.row && !state.tetri_pose) {
        save = saveTetri(state.grid, state.position)
        malus = checkMalus(save, state.grid)
        return {
          ...state,
          grid: save,
          malus_to_p2: malus,
          color_grid: saveColor(state.color_grid, state.position, state.color, save, state.grid),
          tetri_pose: true
        }
      } else {
        state = state
      }
      if (position === 0 && !state.tetri_pose) {
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
      if (checkBorder(state.position, RIGHT) && !check_cell(state.grid, state.position, RIGHT, state.dead_grid))
        position = moveTetri(state.position, 1)
      else
        position = state.position
      return {
        ...state,
        position: position
      }
    case LEFT:
      if (checkBorder(state.position, LEFT) && !check_cell(state.grid, state.position, LEFT, state.dead_grid))
        position = moveTetri(state.position, -1)
      else
        position = state.position
      return {
        ...state,
        position: position
      }
    // case ALERT_POP:
    //   return state
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
    case 'game_over':
      return {
        ...state,
        next_tetri: [],
        win: true
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
    case 'update_room':
      return {
        ...state,
        master: true,
        master_name: action.room.master,
        full: action.room.isFull,
        start: action.room.gameStarted,
        p2: "",
        leave: true,
        win: action.room.isWinner,
        gameover: action.room.gameOver
      }
    case 'p2_joined':
      return {
        ...state,
        p2: action.player_2,
        full: true,
        gameover: false,
        win: false,
        dead_grid: [],
        color_grid: [],
        grid_p2: [],
        dead_p2: [],
        grid: [],
        start: false,
        position: []
      }
    case 'reject':
      return {
        ...state,
        reject: true
      }
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score * 10,
        speed: state.speed + action.score * 5
      }
    default: 
      return state
  }
}

export default reducer