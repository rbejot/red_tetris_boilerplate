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
    case 'reject':
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
    default: 
      return state
  }
}

export default reducer