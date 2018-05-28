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
        {/* SI JOIN FULL -> GAME ALREADY STARTED et BOUTON VERS HOME */}
        
        {/* SI JOIN POSSIBLE -> master = false  */}
        {/* SI PARTI LANCE -> gaming = true */}
        {/* SI gaming = true -> GAME ALREADY STARTED et BOUTON VERS HOME*/}
        {props.match.params.room}
        {props.match.params.player}
      </div>
    )
}

export default Board