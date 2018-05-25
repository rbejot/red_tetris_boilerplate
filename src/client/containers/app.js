import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/game'
import * as Server from '../actions/server'
import Board from '../components/board'
import { BrowserRouter } from 'react-router-dom'

const App = ({state, actions}) => {
  return (
    <BrowserRouter>
    <div>
      <span>{state.message}</span>
      {state.game ? "" : <button onClick={() => actions.launch_game()}>Lancer la partie</button>}
      <button onClick={() => actions.create_room()}>Create room 'server/create_room'</button>
      <Board playable={state.game}/>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions, ...Server }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)