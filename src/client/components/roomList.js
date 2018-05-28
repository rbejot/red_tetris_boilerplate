import React from 'react'
import { Link } from 'react-router-dom'

const RoomList = ({actions, state}) => {
  console.log(state.rooms)
  const listItems = state.rooms.map((room, i) => 
    <li key={i}><Link onClick={() => actions.join_room(room, state.player)} to={`:${room}[:${state.player}]`}>{room}</Link></li>
  )
  return (
    <div>
      Or join a Room
      <ul>{listItems}</ul>
    </div>
  )
}

export default RoomList