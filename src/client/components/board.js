import React from 'react'
import { Redirect } from 'react-router-dom'

const Board = ({props, actions, state}) => {
    console.log(props)
    console.log(actions)
    console.log(state)
    return (
      <div>
        {/* {state.message ? "" : <Redirect to ="/"/>} */}

        {/* The game is {playable ? "" : "not"} playable */}
        {/* SI gaming = true -> GAME ALREADY STARTED et BOUTON VERS HOME*/}
        <p>ROOM: {props.match.params.room}</p>
        <p>PLAYER : {props.match.params.player}</p>
        <p>Player_2: {state.p2 ? state.p2 : ""}</p>
        <p>Master : {state.master.toString()}</p>
        <p>Start: {state.start.toString()}</p>
      </div>
    )
}

export default Board