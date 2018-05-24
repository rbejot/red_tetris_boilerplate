import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/game'
import * as Server from '../actions/server'

const App = ({state, actions}) => {
  return (
    <div>
      <span>{state.message}</span>
      <button onClick={() => actions.launch_game()}>Lancer la partie</button>
      <button onClick={() => actions.ping()}>Ping server</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions, ...Server }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


