import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client';
import { Provider } from 'react-redux'                                                                                                                                                    
import reducer from './reducers'
import App from './containers/app'
import { server } from '../../params'


let socket = io(server.url);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const initialState = {}

const store =  applyMiddleware(socketIoMiddleware)(createStore)(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
)

const bodyStyle = {
  backgroundColor: '#201E21',
  color: 'white',
  fontFamily: "'Poppins', sans-serif",
  height: '100vh',
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0'
}

ReactDom.render((
  <div style={bodyStyle}>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>
), document.getElementById('tetris'))

store.subscribe(()=>{
  console.log('new client state', store.getState());
});
