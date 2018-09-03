import chai from "chai"
import {startServer,configureStore} from './helpers/server'
import rootReducer from '../src/client/reducers'
import {ping} from '../src/client/actions/server'
import {get_list_room} from '../src/client/actions/game'
import {Game} from '../src/server/game'
import {Piece} from "../src/server/piece";
import io from 'socket.io-client'
import params from '../params'
import expect from 'expect'
import {Player} from "../src/server/player";
import * as main from '../src/server/index'

chai.should()
var path = require('path')

describe('Server test', function () {
  let tetrisServer
  before(cb => startServer(params.server, function (err, server) {
    tetrisServer = server
    cb()
  }))

  after(function (done) {
    tetrisServer.stop(done)
  })

  it('should pong', function (done) {
    const initialState = {}
    const socket = io(params.server.url)
    const store = configureStore(rootReducer, socket, initialState, {
      'pong': () => done()
    })
    store.dispatch(ping())
  });

  it('should send roomList', function (done) {
    const initialState = {}
    const socket = io(params.server.url)
    const store = configureStore(rootReducer, socket, initialState, {
      'roomList': () => done()
    })
    store.dispatch(get_list_room())
  });

  it('should update room', () => {
    const socket = io(params.server.url)
    const game = new Game()
    expect(game.updateRoomsInfo("#1234", "pseudo", true)).toEqual(undefined)
  })

  it('should send room list', () => {
    const game = new Game()
    expect(game.listRooms()).toEqual([])
  })

  it('should init piece', () => {
    const game = new Game()
    game.piece = "L"
    expect(game).toEqual({
      "piece": "L"
    })
  })

  it('should create room', () => {
    const socket = io(params.server.url)
    const game = new Game()
    expect(game.createRoom({
      no_room: "12"
    }, socket)).toEqual(undefined)
  })

  it('should over game', () => {
    const socket = io(params.server.url)
    const game = new Game()
    expect(game.gameOver(socket)).toEqual(undefined)
  })

  it('should send a new tetri', () => {
    const socket = io(params.server.url)
    socket.username = "pseudo"
    const game = new Game()
    expect(game.newTetri(socket, {
      room: "1234"
    })).toEqual(undefined)
  })

  it('should generate a list of 10 tetriminos', () => {
    const piece = new Piece()
    expect(piece.generateList().length).toEqual(10)
  })

  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("O")).toEqual([4, 5, 14, 15])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("I")).toEqual([3, 4, 5, 6])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("J")).toEqual([13, 14, 15, 3])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("T")).toEqual([3, 4, 5, 14])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("L")).toEqual([13, 14, 15, 5])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("S")).toEqual([13, 14, 4, 5])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos("Z")).toEqual([3, 4, 14, 15])
  })
  it('should send a position of a new tetri', () => {
    const piece = new Piece()
    expect(piece.getTetriPos()).toEqual(undefined)
  })

  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("O")).toEqual('4dc918')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("I")).toEqual('fcef00')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("J")).toEqual('f27900')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("T")).toEqual('ed1c5e')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("L")).toEqual('768bfc')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("S")).toEqual('b509f9')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor("Z")).toEqual('6cd8fc')
  })
  it('should send a tetri color', () => {
    const piece = new Piece()
    expect(piece.getTetriColor()).toEqual(undefined)
  })

  it('should check username', () => {
    const player = new Player()
    const socket = io(params.server.url)
    expect(player.checkUsername("pseudo1", socket)).toEqual(undefined)
  })

  it('should check username already taken', () => {
    const player = new Player()
    const socket = io(params.server.url)
    ALL_USERS = ["pseudo1"]
    expect(player.checkUsername("pseudo1", socket)).toEqual(false)
  })

  it('should update user info', () => {
    const player = new Player()
    expect(player.updateUsersInfo("id", "pseudo1", "#123", 0, "L", false)).toEqual(undefined)
  })

  it('should not update user malus', () => {
    const player = new Player()
    expect(player.updateUserMalus("pseudo1", 0)).toEqual(0)
  })

  it('should update user malus', () => {
    const player = new Player()
    USERS_INFO = ["pseudo1"]
    expect(player.updateUserMalus("pseudo1", 0)).toEqual(undefined)
  })

  it('should not update user tetri index', () => {
    const player = new Player()
    expect(player.updateUserIndex("pseudo1")).toEqual(undefined)
  })

  it('should update user tetri index', () => {
    const player = new Player()
    USERS_INFO["pseudo1"] = {
      piece: 0
    }
    expect(player.updateUserIndex("pseudo1")).toEqual(1)
  })

  it('should not update winner', () => {
    const player = new Player()
    expect(player.updateWinner("pseudo1", false)).toEqual(false)
  })

  it('should update winner', () => {
    const player = new Player()
    USERS_INFO["pseudo1"] = {
      isWinner: ""
    }
    expect(player.updateWinner("pseudo1", true)).toEqual(true)
  })

  it('should update user info when user left the game', () => {
    const player = new Player()
    ROOMS_INFO["#123"] = {
      master: "pseudo1"
    }
    expect(player.UserHasLeft(1, "pseudo1", "#123", io(params.server.url))).toEqual(undefined)
  })

  it('should start a game', () => {
    const game = new Game()
    const socket = io(params.server.url)
    expect(game.startGame(socket, "#123")).toEqual(undefined)
  })
});
