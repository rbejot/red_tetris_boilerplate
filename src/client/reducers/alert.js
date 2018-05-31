import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME, ERR_USERNAME, NEW_TETRI, RIGHT, LEFT, DOWN } from '../actions/game'

const reducer = (state = {} , action) => {
  var position = 0
  var row = 0
  switch(action.type){
    case NEW_TETRI:
      return {
        ...state,
        position: action.position,
        row: action.row
      }
    case DOWN:
      console.log(state.row)
      if (state.row < 19) {
        position = state.position + 10
        row = state.row + 1
      }
      else {
        position = state.position
        row = state.row
      }
      return {
        ...state,
        position: position,
        row: row
      }
    case RIGHT:
      if ((state.position >= (0 + state.row * 10)) && (state.position < (9 + state.row * 10)))
        position = state.position + 1
      else
        position = state.position
      return {
        ...state,
        position: position
      }
    case LEFT:
      if ((state.position > (0 + state.row * 10)) && (state.position <= (9 + state.row * 10)))
        position = state.position - 1
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