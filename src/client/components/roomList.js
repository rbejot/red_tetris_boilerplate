import React from 'react'
import { Link } from 'react-router-dom'

const RoomList = ({actions, state}) => {
  const linkStyle = {
    textDecoration: 'none',
    backgroundColor: '#00a1ff',
    color: 'white',
    borderRadius: '5px',
    padding: '5px',
    cursor: 'pointer'
  }

  var result = Object.keys(state.rooms).map(key => 
    state.rooms[key].master
  )
  const listItems = Object.keys(state.rooms).map(room => {
    if (!state.rooms[room].isFull && !state.rooms[room].gameStarted ||
        state.rooms[room].gameOver && !state.rooms[room].isFull && !state.rooms[room].gameStarted)
      return <li style={{marginLeft:'-20px',marginBottom:'10px'}} key={room}><span style={{color:'grey'}}>room </span><Link style={linkStyle} onClick={() => actions.join_room(room, state.player, state.rooms[room].master)} to={`:${room}[:${state.player}]`}>{room}</Link> <span style={{color:'grey'}}>hosted by </span>{state.rooms[room].master} </li>
    }
  )
  return (
    <div>
      {Object.keys(state.rooms).length > 0 ? <h3 style={{textAlign: 'center'}}>Or Join one</h3> : ""}
      {state.reject ? "This room is full" : ""}
      <ul style={{listStyle:'none'}}>{listItems}</ul>
    </div>
  )
}

export default RoomList