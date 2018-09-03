import reducer from '../src/client/reducers/game'
import * as types from '../src/client/actions/game'
import chai from "chai"
import expect from 'expect'

const color_grid = new Array(200)

describe('Player reducers : ', () => {
  it('should START a game', () => {
    expect(
      reducer([], {
        type: types.START
      })
    ).toEqual([])
  })

  it('User can not join room', () => {
    expect(
      reducer([], {
        type: 'reject'
      })
    ).toEqual({
      reject: true
    })
  })

  it('Player 2 has joined the game', () => {
    expect(
      reducer([], {
        type: 'p2_joined',
        player_2: 'pseudo2'
      })
    ).toEqual({
      "color_grid": [],
      "dead_grid": [],
      "dead_p2": [],
      "full": true,
      "gameover": false,
      "grid": [],
      "grid_p2": [],
      "p2": "pseudo2",
      "position": [],
      "start": false,
      "win": false
    })
  })

  it('Player 2 is joining the game', () => {
    expect(
      reducer([], {
        type: 'joined',
        room: '123room',
        id: 'FSWAFw@#)8$9',
        master: 'master_pseudo'
      })
    ).toEqual({
      room: '123room',
      id: 'FSWAFw@#)8$9',
      party: true,
      master: false,
      master_name: 'master_pseudo',
      full: true,
      start: false
    })
  })

  it('Update list', () => {
    expect(
      reducer([], {
        type: 'update_list',
        rooms: []
      })
    ).toEqual({
      rooms: []
    })
  })

  it('Room list', () => {
    expect(
      reducer([], {
        type: 'roomList',
        rooms: []
      })
    ).toEqual({
      rooms: []
    })
  })

  it('Create room', () => {
    expect(
      reducer([], {
        type: 'create',
        id: '2134@$@',
        room: '123room'
      })
    ).toEqual({
      party: true,
      master: true,
      full: false,
      id: '2134@$@',
      room: '123room',
      start: false,
      gameover: false
    })
  })

  it('Room not created', () => {
    expect(
      reducer([], {
        type: 'not_created'
      })
    ).toEqual({
      party: false
    })
  })

  it('Username not available', () => {
    expect(
      reducer([], {
        type: 'username_not_available'
      })
    ).toEqual({
      error_username: 'Pseudo déjà utilisé'
    })
  })

  it('Good username', () => {
    expect(
      reducer([], {
        type: 'good_username',
        player: 'pseudo1'
      })
    ).toEqual({
      player: 'pseudo1',
      error_username: false
    })
  })

  it('Good username', () => {
    expect(
      reducer([], {
        type: types.ERR_USERNAME
      })
    ).toEqual({
      error_username: "Pseudo non valide"
    })
  })
})

describe("Tetris reducers", () => {
  it('add maluse to p2', () => {
    expect(
      reducer({
        grid: [],
        malus_p2: 1,
        color_grid: [],
        dead_grid: []
      }, {
        type: 'tetri_pose_p2'
      })
    ).toEqual({
      "color_grid": [],
      "dead_grid": [],
      "dead_p2": undefined,
      "grid": [],
      "grid_p2": undefined,
      "malus_p2": 1
    })
  })

  it('user move LEFT', () => {
    expect(
      reducer({
        position: [4, 5, 14, 15],
        grid: []
      }, {
        type: types.LEFT
      })
    ).toEqual({
      position: [3, 4, 13, 14],
      grid: []
    })
  })

  it('user move RIGHT', () => {
    expect(
      reducer({
        position: [4, 5, 14, 15],
        grid: []
      }, {
        type: types.RIGHT
      })
    ).toEqual({
      position: [5, 6, 15, 16],
      grid: []
    })
  })

  it('user move UP', () => {
    expect(
      reducer({
        position: [4, 5, 14, 15],
        grid: [],
        tetri: "O"
      }, {
        type: types.UP
      })
    ).toEqual({
      position: [4, 5, 14, 15],
      grid: [],
      rotate: 0,
      tetri: "O"
    })
  })

  it('user move UP', () => {
    expect(
      reducer({
        position: [4, 5, 6, 7],
        grid: [],
        rotate: 1,
        tetri: "L"
      }, {
        type: types.UP
      })
    ).toEqual({
      position: [-5, 5, 15, 27],
      grid: [],
      rotate: 2,
      tetri: "L"
    })
  })

  it('user JUMP', () => {
    expect(
      reducer({
        position: [4, 5, 6, 7],
        dead_grid: [],
        grid: [],
        rotate: 1,
        tetri: "L",
        color_grid: []
      }, {
        type: types.JUMP
      })
    ).toEqual({
      "color_grid": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      "dead_grid": [],
      "grid": [194, 195, 196, 197],
      "malus_to_p2": 0,
      "position": [194, 195, 196, 197],
      "rotate": 1,
      "tetri": "L",
      "tetri_pose": true
    })
  })

  it('user move DOWN', () => {
    expect(
      reducer({
        row: 18,
        position: [4, 5, 6, 7],
        grid: [],
        dead_grid: [],

      }, {
        type: types.DOWN
      })
    ).toEqual({
      dead_grid: [],
      grid: [],
      position: [14, 15, 16, 17],
      row: 19
    })
  })

  it('user move DOWN', () => {
    expect(
      reducer({
        row: 19,
        position: [4, 5, 6, 7],
        grid: [],
        dead_grid: [],
        color_grid: []
      }, {
        type: types.DOWN
      })
    ).toEqual({
      "color_grid": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      "dead_grid": [],
      "grid": [4, 5, 6, 7],
      "malus_to_p2": 0,
      "position": [4, 5, 6, 7],
      "row": 19,
      "tetri_pose": true
    })
  })
})
