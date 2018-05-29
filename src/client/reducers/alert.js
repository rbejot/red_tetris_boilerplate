import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME } from '../actions/game'

const reducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    case 'good_username':
      return {
        player: action.player
      }
    case 'username_not_available':
      return {
        error_username: true
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
        full: true,
        start: false
      }
    case 'p2_joined':
      return {
        ...state,
        p2: action.player_2
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