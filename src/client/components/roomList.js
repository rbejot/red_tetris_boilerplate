import React from 'react'
import { Link } from 'react-router-dom'

const RoomList = ({actions, state}) => {
  console.log(state.rooms)
  const listItems = Object.keys(state.rooms).map((room, index) =>
    <li key={room}><Link onClick={() => actions.join_room(room, state.player, state.rooms[room])} to={`:${room}[:${state.player}]`}>{room}</Link> {state.rooms[room]} </li>
  )
  return (
    <div>
      {state.rooms.length > 0 ? "Ou, rejoindre une room" : ""}
      {state.reject ? "Cette room est pleine" : ""}
      <ul>{listItems}</ul>
    </div>
  )
}

export default RoomList