import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM, ADD_USERNAME } from '../actions/game'

const reducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    case ADD_USERNAME:
      return {
        player: action.player
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
        room: action.room
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
        full: true
      }
    case 'reject':
      return state
    default: 
      return state
  }
}

export default reducer