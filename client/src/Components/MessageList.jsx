import React from 'react'
import moment from 'moment'

const MessageList = (props) => {
  console.log(props.messages.forEach((e) => console.log(e)))
  if (props.messages.length === 0) {
    return (
      <div>
        <h1>No Messages Found</h1>
        <p>Add some messages</p>
      </div>
    )
  }

  return (
    <ul className="message-list">
      {props.messages.reverse().map((message) => (
        <li key={message._id}>
          <div>
            <h3>{message.fullName}</h3>
            <h5>{message.message}</h5>
            <p>{moment(message.createdAt).fromNow()}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
