import { useEffect, useState } from 'react'

import LoginModule from './Components/LoginModule'
import Messages from './Components/Messages'

import './App.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const username = localStorage.getItem('username')

    if (username) {
      setUsername(username)
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  return (
    <div className="App">
      <header>Twitter App</header>
      {isLoggedIn ? (
        <Messages username={username} />
      ) : (
        <LoginModule setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
