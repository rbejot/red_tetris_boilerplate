import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client';
import { Provider } from 'react-redux'                                                                                                                                                    
import { storeStateMiddleWare } from './middleware/storeStateMiddleWare'
import reducer from './reducers'
import App from './containers/app'
// import { alert } from './actions/alert'
import { server } from '../../params'


let socket = io(server.url);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const initialState = {}

const store =  applyMiddleware(socketIoMiddleware)(createStore)(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
)

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

store.subscribe(()=>{
  console.log('new client state', store.getState());
});

// store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))
