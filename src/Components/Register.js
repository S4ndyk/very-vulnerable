import React, { useState } from 'react';
import service from '../service'

const Register = ({setRegister}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = (event) => {
    event.preventDefault()
    service.register(username, password)
  }

  return (
    <div>
      <form onSubmit={register}>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>register!</button>
      </form>
    </div>
  )
}

export default Register