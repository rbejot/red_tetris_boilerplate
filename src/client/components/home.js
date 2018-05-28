import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = ({props, actions, state, player}) => {
    console.log(props)
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
    return (
      <div>
        {state.player ? <button onClick={() => actions.create_room(room, state.player)}>Create room</button> : (
          <div>
            {/* <iframe width="0" height="0" name="form_frame"></iframe> */}
            <form onSubmit={() => actions.add_username("titi")}>
              <input required="true" type="text" name="username"></input>
              <input type="submit"></input>
            </form>
            {/* <button onClick={() => actions.add_username("tata")}>add username</button> */}
          </div>
        )}
        {state.room ? <Redirect to={`/${state.room}[${state.player}]`}/> : "" }
      </div>
    )
}

export default Home