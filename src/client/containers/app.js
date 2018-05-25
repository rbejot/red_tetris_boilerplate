import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/game'
import * as Server from '../actions/server'
import Board from '../components/board'
import { HashRouter, Route, Link } from 'react-router-dom'

// GET_ROOM pour creer liste de room possible

const App = ({state, actions}) => {
  const generate_room = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  const room = generate_room()
  const player = "toto"
  return (
    <HashRouter hashType="noslash">
    <div>
      {/* ENVOYER actions POUR DISPATCH join_server DANS board */}
      <Route path="/:room[:player]" component={Board}/>
      <input id="userName" type="text"/>
      {state.party ? "" : <button><Link to={`/${room}[${player}]`} onClick={() => actions.create_room(room, player)}>Create room</Link></button>}
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