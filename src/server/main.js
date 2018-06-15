import params  from '../../params'
import * as server from './index'

global.ALL_USERS = []
global.USERS_INFO = {}
global.ROOMS_INFO = {}

server.create(params.server).then( () => console.log('not yet ready to play tetris with U ...') )
