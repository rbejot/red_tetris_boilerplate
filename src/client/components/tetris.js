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

  const randomTetri = (actions) => {
    var tetri = ["O", "I", "J", "T", "L", "S", "Z"]
    var i = Math.floor(Math.random() * Math.floor(7))
    var position = []
    switch (tetri[i]) {
      case "O":
        position = [4, 5, 14, 15]
        break
      case "I":
        position = [3, 4, 5, 6]
        break
      case "J":
        position = [13, 14, 15, 3]
        break
      case "T":
        position = [3, 4, 5, 14]
        break
      case "L":
        position = [13, 14, 15, 5]
        break
      case "S":
        position = [13, 14, 4, 5]
        break
      case "Z":
        position = [3, 4, 14, 15]
        break
    }
    actions.new_tetri(tetri[i], position)
  }

  const tetriColor = (cell) => {
    return state.color
  }

  const TetrisBoard = () => {
    var boards = []
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

  return (
    <div>
      <ReactInterval timeout={500} enabled={state.start} callback={function() {
          if (!state.tetri_pose && !state.gameover)
            actions.move("down")
          else if (state.tetri_pose) {
            actions.tetri_pose(state.tetri_nb, state.player)
            randomTetri(actions)
          }
        }}/>
      <TetrisBoard/>
    </div>
  )
}

export default Tetris