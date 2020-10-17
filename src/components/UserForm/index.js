import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder='Email'
          type='email'
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          type='password'
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
