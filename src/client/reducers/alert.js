import { ALERT_POP } from '../actions/alert'
import { GAME_LAUNCHED } from '../actions/game'

const reducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    case GAME_LAUNCHED:
      return { game: true}
    default: 
      return state
  }
}

export default reducer

