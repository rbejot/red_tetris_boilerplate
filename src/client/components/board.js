import React from 'react'
import { Redirect } from 'react-router-dom'
import Tetris from './tetris'

const Board = ({props, actions, state}) => {
    const GameOver = () => {
      return <div>Game Over</div>
    }

    return (
      <div style={{ position: "absolute", width:"100%", outline:"none" }} tabIndex="0" onKeyDown={(event) => {
        if (state.start) {
          if (event.key === "ArrowRight")
          actions.move("right")
          else if (event.key === "ArrowLeft")
            actions.move("left")
          else if (event.key === "ArrowDown")
            actions.move("down")
          else if (event.key === "ArrowUp")
            actions.move("up")
          else if (event.key === " ")
            actions.move("jump")
          else
            console.log(event.key)
        }
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
        {!state.start ? <h2>Start the game ? <span onClick={() => actions.start()}>GO</span></h2> : ""}
        <Tetris props={props} actions={actions} state={state}/>
        <div>
        </div>
        {state.gameover ? <GameOver/> : ""}
      </div>
    )
}

export default Board