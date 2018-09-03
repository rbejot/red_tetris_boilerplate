import React from 'react'
import ReactInterval from 'react-interval'
import { start, gameover } from '../actions/game';

export const shadow = (grid) => {
  let spectre = [...grid]
  for (var i = 0; i < 10; i++) {
    for (var j = i; j <= i + 190; j += 10) {
      if (spectre.indexOf(j) > -1) {
        for (var k = j; k <= i + 190; k += 10) {
          spectre.push(k)
        }
      }
    }
  }
  return spectre
}

const Tetris = ({props, actions, state}) => {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }

  const boardStyle = {
    width: '300px',
    height: '600px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '1px solid #000000',
    boxShadow: '1px 1px 11px 4px #000000'
  }

  const spectreStyle = {
    width: '200px',
    height: '400px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '1px solid #000000',
    boxShadow: '1px 1px 11px 4px #000000'
  }

  const nextStyle = {
    paddingTop: '20px',
    width: '200px',
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    border: '1px solid #000000',
    boxShadow: '1px 1px 11px 4px #000000',
    marginBottom: '50px'
  }

  const colorGrid = (index) => {
    return state.color_grid[index]
  }

  const cellOccupied = (cell) => {
    if (state.grid && state.grid.indexOf(cell) > -1)
      return colorGrid(cell)
    else if (state.dead_grid && state.dead_grid.indexOf(cell) > -1)
      return "grey"
    else if (state.position && state.position.indexOf(cell) > -1)
      return state.color
    else
      return "none"
  }

  const spectreOccupied = (cell) => {
    if (state.grid_p2 && state.grid_p2.indexOf(cell) > -1 || state.dead_p2 && state.dead_p2.indexOf(cell) > -1 )
      return "white"
    return "none"
  }

  const nextOccupied = (cell) => {
    if (state.next_tetri && state.next_tetri.indexOf(cell) > -1)
      return "#29ca4d"
    return "none"
  }

  const tetriColor = (cell) => {
    return state.color
  }

  const TetrisBoard = ({state}) => {
    let boards = []
    for (var i = 0; i < 200; i++) {
        boards.push(
          <div key={i} style={{width: '28px',height: '28px',border: '1px solid black', margin: 'auto', backgroundColor: cellOccupied(i)}}></div>
        )
    }
    return (
      <div style={boardStyle}>
        <div style={{position:"absolute"}}>{state.score ? "Score: " + state.score : "Score: 0"}</div>
        {boards}
      </div>
    )
  }

  const Spectre = () => {
    let boards = []
    let next = []
    for (var i = 0; i < 200; i++) {
      boards.push(
        <div key={i} style={{width: '18px',height: '18px',border: '1px solid black', margin: 'auto', backgroundColor: spectreOccupied(i)}}></div>
      )
    }
    for (var i = 0; i < 30; i++) {
      next.push(
        <div key={i} style={{width: '20px',height: '20px', margin: 'auto', backgroundColor: nextOccupied(i)}}></div>
      )
    }
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
        <div style={nextStyle}>
          {next}
        </div>
        <div style={spectreStyle}>
          {boards}
        </div>
      </div>
    )
  }

  return (
    <div style={contentStyle}>
      <ReactInterval timeout={state.speed} enabled={state.start} callback={function() {
          if (!state.tetri_pose && !state.gameover && !state.win && state.start)
            actions.move("down")
          else if (state.tetri_pose) {
            let spectre = shadow(state.grid) 
            actions.tetri_pose(state.player, state.malus_to_p2, spectre, state.dead_grid)
            actions.add_score(state.malus_to_p2)
          }
        }}/>
      <TetrisBoard state={state}/>
      <Spectre/>
      {/* <h2>{state.speed}</h2> */}
    </div>
  )
}

export default Tetris