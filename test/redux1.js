import {configureStore} from './helpers/server'
import rootReducer from '../src/client/reducers'
import {ALERT_POP, alert} from '../src/client/actions/alert'
import * as actions from '../src/client/actions/game'
import chai from "chai"
import { createStore } from 'redux';
import expect from 'expect'


//Actions test
describe('user actions', () => {
  it('add_username if valid and not taken', () => {
    expect(actions.add_username('pseudo1')).toEqual({
      type: actions.ADD_USERNAME,
      player: 'pseudo1'
    })
  })
  it('create room', () => {
    expect(actions.create_room('345tf', 'pseudo1')).toEqual({
      type: actions.CREATE_ROOM,
      room: '345tf',
      player: 'pseudo1'
    })
  })
  it('user join a room', () => {
    expect(actions.join_room('345tf', 'pseudo1', 'master_name')).toEqual({
      type: actions.JOIN_ROOM,
      room: '345tf',
      player: 'pseudo1',
      master: 'master_name'
    })
  })
  it('user choose a wrong username', () => {
    expect(actions.err_username()).toEqual({
      type: actions.ERR_USERNAME
    })
  })
  it('user start the game', () => {
    expect(actions.start()).toEqual({
      type: actions.START
    })
  })
  it('user get list of room', () => {
    expect(actions.get_list_room()).toEqual({
      type: actions.GET_LIST_ROOM
    })
  })
})

describe('user tetris actions', () => {
  it('RIGHT input', () => {
    expect(actions.move("right")).toEqual({
      type: actions.RIGHT
    })
  })
  it('LEFT input', () => {
    expect(actions.move("left")).toEqual({
      type: actions.LEFT
    })
  })
  it('DOWN input', () => {
    expect(actions.move("down")).toEqual({
      type: actions.DOWN
    })
  })
  it('UP input', () => {
    expect(actions.move("up")).toEqual({
      type: actions.UP
    })
  })
  it('JUMP input', () => {
    expect(actions.move("jump")).toEqual({
      type: actions.JUMP
    })
  })
})

describe('tetris actions', () => {
  it('a tetrimino is placed', () => {
    expect(actions.tetri_pose(3, 'pseudo1')).toEqual({
      type: actions.TETRI_POSE,
      player: 'pseudo1',
      tetri_nb: 3
    })
  })
  it('New tetrimino is received', () => {
    expect(actions.new_tetri("L", [4, 5, 14, 15])).toEqual({
      type: actions.NEW_TETRI,
      tetri: "L",
      position: [4, 5, 14, 15]
    })
  })
  it('Game over', () => {
    expect(actions.gameover()).toEqual({
      type: actions.GAME_OVER,
      gameover: true,
      start: false
    })
  })
})

