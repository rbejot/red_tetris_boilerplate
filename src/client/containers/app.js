import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/game'
import * as Server from '../actions/server'
import Board from '../components/board'
import Home from '../components/home'
import Error from '../components/error'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

// GET_ROOM pour creer liste de room possible

const App = ({state, actions}) => {
  const player = "toto"
  return (
    <HashRouter hashType="noslash">
    <div>
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home props={props} actions={actions} state={state} player={player}/>
        )}/>
        <Route exact path="/:room[:player]" render={(props) => (
          state.party ? (
            <Board props={props} actions={actions} state={state}/> 
          ) : (
            <Redirect to="/"/>
          )
        )}/>
        <Route component={Error}/>
      </Switch>
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
