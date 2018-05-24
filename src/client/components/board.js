import React from 'react'

const Board = (props) => {
    const playable = props.playable
    return (
      <div>
        The game is {playable ? "" : "not"} playable
      </div>
    )
}

export default Board