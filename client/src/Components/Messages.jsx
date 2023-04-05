import React, { useEffect, useState } from 'react'
import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'

const Messages = (props) => {
  const [messages, setmessages] = useState([])

  const getMessages = async () => {
    const response = await fetch('http://localhost:8080/messages')
    const data = await response.json()

    console.log(data)
    setmessages(data)
  }

  useEffect(() => {
    getMessages()
  }, [])
  return (
    <div className="messages-container">
      <MessageList messages={messages} />
      <NewMessageForm username={props.username} getMessages={getMessages} />
    </div>
  )
}

export default Messages
