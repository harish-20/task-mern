import React, { useState } from 'react'
import axios from 'axios'

const NewMessageForm = (props) => {
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (message.length <= 50 || message >= 500) {
      alert('Message should contain 50 - 500 characters')
      return
    }
    const data = await axios.post('http://localhost:8080/messages/addMessage', {
      fullName: props.username,
      message,
    })
    console.log(data)
    props.getMessages()
    setMessage('')
  }
  return (
    <div className="new-message">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          cols="50"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default NewMessageForm
