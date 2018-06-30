import React from 'react'
import { Link } from 'react-router-dom'

const RoomList = ({actions, state}) => {
  var result = Object.keys(state.rooms).map(key => 
    state.rooms[key].master
  )
  console.log(result)
  const listItems = Object.keys(state.rooms).map(room => {
    if (!state.rooms[room].isFull && !state.rooms[room].gameStarted ||
        state.rooms[room].gameOver && !state.rooms[room].isFull && !state.rooms[room].gameStarted)
      return <li key={room}><Link onClick={() => actions.join_room(room, state.player, state.rooms[room].master)} to={`:${room}[:${state.player}]`}>{room}</Link> {state.rooms[room].master} </li>
    }
  )
  return (
    <div>
      {state.rooms.length > 0 ? "Rooms : " : ""}
      {state.reject ? "Cette room est pleine" : ""}
      <ul>{listItems}</ul>
    </div>
  )
}

export default RoomList