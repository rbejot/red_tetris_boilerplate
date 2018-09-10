import React from 'react'
import { Redirect } from 'react-router-dom'
import PseudoForm from '../components/pseudoForm'
import RoomList from '../components/roomList'

const createStyle = {
  outline: 'none',
  border: 'none',
  background: 'transparent',
  borderLeft: '5px solid white',
  borderBottom: '5px solid white',
  fontFamily: 'inherit',
  fontSize: '30px',
  color: 'white',
  cursor: 'pointer',
  textAlign: 'center'
}

export const generate_room = () => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const Home = ({props, actions, state}) => {
    const room = generate_room()
    return (
      <div style={{textAlign:'center',marginTop: '100px'}}>
        {state.error_username ? state.error_username : ""}
        {state.player ? (
          <button style={createStyle} onClick={() => actions.create_room(room, state.player)}>Create a room</button>
        ) : (
          <PseudoForm actions={actions}/>
        )}
        { state.room && state.player ? <Redirect to={`/${state.room}[${state.player}]`}/> : "" }
        { state.rooms && state.player ? <RoomList actions={actions} state={state} /> : "" }
      </div>
    )
}

export default Home