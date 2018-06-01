import React from 'react'
import { Redirect } from 'react-router-dom'
import Tetris from './tetris'

const Board = ({props, actions, state}) => {
    return (
      <div onKeyDown={(event) => {
        if (event.key === "ArrowRight")
          actions.move("right")
        else if (event.key === "ArrowLeft")
          actions.move("left")
        else if (event.key === "ArrowDown")
          actions.move("down")
        else if (event.key === "ArrowUp")
          actions.move("up")
        else
          console.log(event.kqwewey)
      }}>
        <p>ROOM: {props.match.params.room}</p>
        <p>PLAYER : {props.match.params.player}</p>
        {state.master ? (
          <p>Player_2: {state.p2 ? state.p2 : ""}</p>
        ) : (
          <p>Player_2: {state.master_name}[master]</p>
        )}
        <p>Master: {state.master.toString()}</p>
        <p>Start: {state.start.toString()}</p>
        <p>Full: {state.full.toString()}</p>
        <button onClick={() => actions.start()}>Tetrimino</button>
        <Tetris props={props} actions={actions} state={state}/>
        <div>
        </div>
      </div>
    )
}

export default Board