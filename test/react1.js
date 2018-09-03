import chai from "chai"
import React from 'react'
// import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import {App} from '../src/client/containers/app'
import Board from '../src/client/components/board'
import Error from '../src/client/components/error'
import Home from '../src/client/components/home'
import PseudoForm from '../src/client/components/pseudoForm'
import RoomList from '../src/client/components/roomList'
import Tetris from '../src/client/components/tetris'
import * as tetris from '../src/client/components/tetris'
import {generate_room} from '../src/client/components/home'
import * as board from '../src/client/components/board'
import expect from 'expect'

chai.should()
// chai.use(equalJSX)

describe('Board test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(Board, {
      props: {
        match: {
          params: {
            room: "412"
          }
        }
      },
      actions: "",
      state: ""
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('Start should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(board.Start, {
      state: {},
      actions: {},
      infoStyle: {}
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('GameOver should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(board.GameOver, {
      state: {},
      actions: {
        gameover: function(arg) {
          return arg
        }
      }
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('Win should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(board.Win))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('Leave should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(board.Leave))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })
})

describe('Error test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(Error))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })
})

describe('Home test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(Home, {
      props: {},
      actions: {},
      state: {}
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('should return a string of 5 chararcters', () => {
    expect(generate_room().length).toEqual(5)
  })
})

describe('PseudoForm test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(PseudoForm, {
      actions: {}
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })
})

describe('RoomList test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(RoomList, {
      actions: {},
      state: {
        rooms: []
      }
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })
})

describe('Tetris test', () => {
  it('should render a div', () => {
    const renderer = createRenderer()
    renderer.render(React.createElement(Tetris, {
      props: {},
      actions: {},
      state: {}
    }))
    const output = renderer.getRenderOutput()
    expect(output.type).toEqual('div')
  })

  it('should return a spectre', () => {
    expect(tetris.shadow([])).toEqual([])
  })
})