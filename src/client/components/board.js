import React from 'react'
import { Redirect } from 'react-router-dom'

const Board = ({props, actions, state}) => {
    return (
      <div>
        <p>ROOM: {props.match.params.room}</p>
        <p>PLAYER : {props.match.params.player}</p>
        {state.master ? (
          <p>Player_2: {state.p2 ? state.p2 : ""}</p>
        ) : (
          <p>Player_2: {state.master_name}[master]</p>
        )}
        <p>Master : {state.master.toString()}</p>
        <p>Start: {state.start.toString()}</p>
        <div>
        </div>
      </div>
    )
}

export default Board