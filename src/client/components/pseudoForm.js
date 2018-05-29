import React from 'react'
import { Form, Text } from 'react-form'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

const PseudoForm = ({actions}) => (
  <Form onSubmit={values => isAlphanumeric(values.Pseudo) ? actions.add_username(values.Pseudo) : actions.err_username()} render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <Text field="Pseudo" placeholder='Pseudo' required="true"/>
      <button onClick={() => actions.get_list_room()} type="submit">Entrer</button>
    </form>
  )} />
)

export default PseudoForm