import React, { useState } from 'react';
import Main from './Components/Main'
import Login from './Components/Login'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  
  if (loggedIn) {
    return (
      <Main />
    )
  }

  return (
    <Login setLoggedIn={setLoggedIn} />
  )

}

export default App;
