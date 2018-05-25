import { ALERT_POP } from '../actions/alert'
import { CREATE_ROOM } from '../actions/game'

const reducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    case 'reject':
      return { party: false }
    case 'create':
      return { 
        party: true,
        master: true,
        id: action.id
      }
    default: 
      return state
  }
}

export default reducer