import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/game'
import * as Server from '../actions/server'
import Board from '../components/board'
import { HashRouter, Route, Link } from 'react-router-dom'

const App = ({state, actions}) => {
  const room = "3454"
  const player = "toto"
  return (
    <HashRouter hashType="noslash">
    <div>
      <Route path="/:room[:player]" component={Board}/>
      <input id="userName" type="text"/>
      {/* <span>{state.message}</span> */}
      {/* {state.game ? "" : <button onClick={() => actions.launch_game()}>Lancer la partie</button>} */}
      <button><Link to={`/${room}[${player}]`} onClick={() => actions.create_room(room, player)}>Create room</Link></button>
      {/* <Link to={`/${room}${player}`}><button onClick={() => actions.create_room()}>Create room 'server/create_room'</button></Link> */}
    </div>
    </HashRouter>
  )
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions, ...Server }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)