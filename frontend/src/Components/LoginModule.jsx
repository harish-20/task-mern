import React, { useState } from 'react'

const LoginModule = (props) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (username.length >= 2 && username.length <= 55) {
      props.setIsLoggedIn(true)
      localStorage.setItem('username', username)
    } else {
      alert('Something went Wrong')
    }
  }
  return (
    <div className="login-container">
      <div className="backdrop"></div>
      <form className="login-modal" onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <label>Username: </label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginModule
