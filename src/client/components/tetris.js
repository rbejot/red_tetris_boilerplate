import React from 'react'
import ReactInterval from 'react-interval'
import { start, gameover } from '../actions/game';

const Tetris = ({props, actions, state}) => {
  const boardStyle = {
    width: '300px',
    height: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '10px solid black',
    borderRadius: '10px'
  }

  const spectreStyle = {
    width: '100px',
    height: '200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '3px solid black',
    borderRadius: '3px'
  }

  const colorGrid = (index) => {
    return state.color_grid[index]
  }

  const cellOccupied = (cell) => {
    if (state.grid && state.grid.indexOf(cell) > -1)
      return colorGrid(cell)
    else if (state.position && state.position.indexOf(cell) > -1)
      return state.color
    else
      return "none"
  }

  const spectreOccupied = (cell) => {
    if (state.grid_p2 && state.grid_p2.indexOf(cell) > -1)
      return "black"
    return "none"
  }

  const tetriColor = (cell) => {
    return state.color
  }

  const TetrisBoard = () => {
    let boards = []
    for (var i = 0; i < 200; i++) {
        boards.push(
          <div key={i} style={{width: '28px',height: '28px',border: '1px solid black', margin: 'auto', backgroundColor: cellOccupied(i)}}></div>
        )
    }
    return (
      <div style={boardStyle}>
        {boards}
      </div>
    )
  }

  const Spectre = () => {
    let boards = []
    for (var i = 0; i < 200; i++) {
      boards.push(
        <div key={i} style={{width: '8px',height: '8px',border: '1px solid black', margin: 'auto', backgroundColor: spectreOccupied(i)}}></div>
      )
    }
    return (
      <div style={spectreStyle}>
        {boards}
      </div>
    )
  }

  return (
    <div>
      <ReactInterval timeout={500} enabled={state.start} callback={function() {
          if (!state.tetri_pose && !state.gameover)
            actions.move("down")
          else if (state.tetri_pose) {
            actions.tetri_pose(state.player, state.malus_to_p2, state.grid)
          }
        }}/>
      <TetrisBoard/>
      {/* TODO: Activer une fois que le state.grid_p2 est reçu */}
      {/* <Spectre/> */}
    </div>
  )
}

export default Tetris