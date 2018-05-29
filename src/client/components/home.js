import React from 'react'
import { Redirect } from 'react-router-dom'
import PseudoForm from '../components/pseudoForm'
import RoomList from '../components/roomList'

const Home = ({props, actions, state}) => {
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
        {state.error_username ? "Pseudo deja pris" : ""}
        {state.player ? (
          <button onClick={() => actions.create_room(room, state.player)}>Créer une room</button>
        ) : (
          <PseudoForm actions={actions}/>
        )}
        { state.room && state.player ? <Redirect to={`/${state.room}[${state.player}]`}/> : "" }
        { state.rooms && state.player ? <RoomList actions={actions} state={state} /> : "" }
      </div>
    )
}

export default Home