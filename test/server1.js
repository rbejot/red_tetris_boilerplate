import chai from "chai"
import {startServer, configureStore} from './helpers/server'
import rootReducer from '../src/client/reducers'
import {ping} from '../src/client/actions/server'
import {get_list_room} from '../src/client/actions/game'
import io from 'socket.io-client'
import params from '../params'
import expect from 'expect'

chai.should()
var path = require('path')

describe('Fake server test', function(){
  let tetrisServer
  before(cb => startServer( params.server, function(err, server){
    tetrisServer = server
    cb()
  }))

  after(function(done){tetrisServer.stop(done)})

  it('should pong', function(done){
    const initialState = {}
    const socket = io(params.server.url)
    const store =  configureStore(rootReducer, socket, initialState, {
      'pong': () =>  done()
    })
    store.dispatch(ping())
  });

  it('should send roomList', function(done){
    const initialState = {}
    const socket = io(params.server.url)
    const store =  configureStore(rootReducer, socket, initialState, {
      'roomList': () =>  done()
    })
    store.dispatch(get_list_room())
  });

});

