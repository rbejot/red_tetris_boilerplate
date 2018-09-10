import React from 'react'
import { Redirect } from 'react-router-dom'
import Tetris from './tetris'

const infoStyle = {
  margin: "auto",
  width: "350px",
  height: "100px",
  backgroundColor: "black",
  textAlign: "center",
  lineHeight: "100px",
  cursor: 'pointer'
}

export const Start = ({state, actions, infoStyle}) => {
  let ret = ""
  if (!state.start && state.master || state.win && state.master)
    ret = <h2 style={infoStyle} onClick={() => actions.start()}>Start</h2>
  else if (!state.start || state.win)
    ret = <h2 style={infoStyle}>Waiting for master player...</h2>
  else
    ret = <h2></h2>
  return <div style={{width: "100%", position: "absolute", marginTop: "-250px", height: "50px"}}>{ret}</div>
}


export const GameOver = ({state, actions}) => {
  actions.gameover(state.player)
  return <div style={{position: "absolute", textAlign: "center", top: "100px", width: "100%", height: "50px", lineHeight: "50px", backgroundColor: "black"}}>Game Over</div>
}

export const Win = () => {
  return <div style={{position: "absolute", textAlign: "center", top: "100px", width: "100%", height: "50px", lineHeight: "50px", backgroundColor: "black"}}>Winner !</div>
}

export const Leave = () => {
  return <div style={{position: "absolute", textAlign: "center", top: "50px", width: "100%", height: "30px", lineHeight: "30px", backgroundColor: "black"}}>Player 2 left the game</div>
}

const Board = ({props, actions, state, redirect}) => {
    return (
      <div style={{ position: "absolute", top: "0", left: "0", width:"100%", height:"100%", overflowX: "hidden", overflowY: "hidden", outline:"none", display:"flex", flexDirection: "column", justifyContent: "center"}}
       tabIndex="0" onKeyUp={(event) => {
        if (state.start && !state.gameover && !state.win) {
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
        } else {
          return
        }
      }}>
      <div style={{width: "100%", backgroundColor: "black", height: "30px", lineHeight: "0px", margin: "0", display: "flex", flexDirection: "row", position: "absolute", top: "0", justifyContent: "space-between"}}>
        <p>{state.full ? "2/2" : "1/2"}</p>
        <p>{props.match.params.room}</p>
        <p>{props.match.params.player}</p>
        {state.master ? (
          <p>{state.p2 ? "Versus - " + state.p2 : "No opponent yet"}</p>
        ) : (
          <p>{"Versus - " + state.master_name}[master]</p>
        )}
        {state.master ? <p> You're the Master </p> : ""}
        {state.start ? <p>playing</p> : <p>waiting for master</p>}
        <div style={{backgroundColor: "#750000", color: "red", lineHeight: "30px",cursor: "pointer"}}onClick={() => window.location = "/"}> Leave X </div>
      </div>
      {state.gameover ? <GameOver state={state} actions={actions}/> : ""}
      {state.win ? <Win/> : ""}
      {state.leave ? <Leave/> : ""}
        <Start actions={actions} state={state} infoStyle={infoStyle}/>
        <Tetris props={props} actions={actions} state={state}/>
        <div>
        </div>
      </div>
    )
}

export default Board