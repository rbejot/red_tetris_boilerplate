import React from 'react'
import { Form, Text } from 'react-form'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

const PseudoForm = ({actions}) => {
  const pseudoFormStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20%'
  }

  const textFieldStyle = {
    backgroundColor: '#201E21',
    border: 'none',
    borderBottom: '1px solid #6b6b6b',
    height: '30px',
    fontSize: '20px',
    color: '#ff0037',
    outline: 'none',
    marginTop: '27px'
  }

  const buttonStyle = {
    outline: 'none',
    background: 'transparent',
    border: 'transparent',
  }

  return (
    <div style={pseudoFormStyle}>
      <div style={{display:'flex', width: '120px', height: '120px', position: 'absolute', flexDirection: 'row', flexWrap: 'wrap', top: '5', left: '5'}}>
        <div style={{width: '60px', height: '60px', backgroundColor: '#00b8ff'}}>
        </div>
        <div style={{width: '60px', height: '60px', backgroundColor: 'transparent'}}>
        </div>
        <div style={{width: '60px', height: '60px', backgroundColor: 'transparent'}}>
        </div>
        <div style={{width: '60px', height: '60px', backgroundColor: '#ffe000'}}>
        </div>
      </div>
      <h1 style={{zIndex: '1'}}>Red Tetris</h1>
      <Form onSubmit={values => isAlphanumeric(values.Pseudo) ? actions.add_username(values.Pseudo) : actions.err_username()} render={({
        submitForm
      }) => (
        <form onSubmit={submitForm}>
          <Text style={textFieldStyle} field="Pseudo" placeholder='Pseudo' required="true"/>
          <button style={buttonStyle} onClick={() => actions.get_list_room()} type="submit"></button>
        </form>
      )} />
    </div>
  )
}

export default PseudoForm