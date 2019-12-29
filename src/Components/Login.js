import React, { useState } from 'react';
import service from '../service'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

import Register from './Register'

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = (event) => {
    event.preventDefault()
    service.login(username, password)
      .then(() => setLoggedIn(true))
  }

  return (
    <div>
      <Router>

        <Route exact path="/" render={() =>
          <div>
            <form onSubmit={login}>
              <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
              <input type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
              <button type='submit'>login!</button>
            </form>
            <Link to="/register">register</Link>
          </div>
        } />

        <Route path="/register" render={() =>
          <div>
            <Register />
            <Link to="/">cancel</Link>
          </div>
        } />
      </Router>
    </div>
  )
}

export default Login