import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Home = ({props, actions, state, room, player}) => {
    console.log(props)
    console.log(actions)
    console.log(state)
    return (
      <div>
        <input id="userName" type="text"/>
        <button><Link to={`/${room}[${player}]`} onClick={() => actions.create_room(room, player)}>Create room</Link></button>
      </div>
    )
}

export default Home