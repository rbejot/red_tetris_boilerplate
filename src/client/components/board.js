import React from 'react'
import { Redirect } from 'react-router-dom'
import Tetris from './tetris'

const Board = ({props, actions, state}) => {
    const GameOver = () => {
      actions.gameover(state.player)
      return <div>Game Over</div>
    }

    const Start = () => {
      if (!state.start && state.master || state.win && state.master)
        return <h2>Start the game ? <span onClick={() => actions.start()}>GO</span></h2>
      else if (!state.start || state.win)
        return <h2>Waiting for master player...</h2>
      else
        return <h2>GO !</h2>
    }

    return (
      <div style={{ position: "absolute", width:"100%", outline:"none"}} tabIndex="0" onKeyDown={(event) => {
        if (state.start && !state.gameover) {
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
        <Start/>
        {/* {!state.start && state.master ? <h2>Start the game ? <span onClick={() => actions.start()}>GO</span></h2> : <h2>Waiting for master player...</h2>} */}
        <Tetris props={props} actions={actions} state={state}/>
        <div>
        </div>
        {state.gameover ? <GameOver/> : ""}
        {state.win ? <h1>You won !</h1> : ""}
        {state.leave ? <h1>Player 2 left the game</h1> : ""}
      </div>
    )
}

export default Board