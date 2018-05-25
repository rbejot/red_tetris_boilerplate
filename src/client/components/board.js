import React from 'react'

const Board = (props) => {
    const playable = props.playable
    console.log(props)
    return (
      <div>
        {/* The game is {playable ? "" : "not"} playable */}
        {props.match.params.room}
        {props.match.params.player}
      </div>
    )
}

export default Board