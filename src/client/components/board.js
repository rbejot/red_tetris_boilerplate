import React from 'react'

const Board = (props) => {
    const playable = props.playable
    console.log(props)
    return (
      <div>
        {/* The game is {playable ? "" : "not"} playable */}
        {/* SI JOIN FULL -> GAME ALREADY STARTED et BOUTON VERS HOME */}
        {/* SI JOIN POSSIBLE -> master = false  */}
        {/* SI PARTI LANCE -> gaming = true */}
        {props.match.params.room}
        {props.match.params.player}
      </div>
    )
}

export default Board