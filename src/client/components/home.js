import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = ({props, actions, state, player}) => {
    // console.log(props)
    // console.log(actions)
    // console.log(state)
    const generate_room = () => {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    const room = generate_room()
    console.log(room)
    return (
      <div>
        <input id="userName" type="text"/>
        {state.room ? <Redirect to={`/${state.room}[${player}]`}/> : "" }
        <button onClick={() => actions.create_room(room, player)}>Create room</button>
      </div>
    )
}

export default Home