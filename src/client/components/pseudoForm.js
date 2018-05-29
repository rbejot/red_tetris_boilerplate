import React from 'react'
import { Form, Text } from 'react-form'

const PseudoForm = ({actions}) => (
  <Form onSubmit={values => actions.add_username(values.Pseudo)} render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <Text field="Pseudo" placeholder='Pseudo' required="true"/>
      <button onClick={() => actions.get_list_room()} type="submit">Entrer</button>
    </form>
  )} />
)

export default PseudoForm