import React from 'react'
import { MessageContent } from './Message.elements'

function Message({ messageContent }) {
  return (
    <>
      <MessageContent>{messageContent}</MessageContent>
    </>
  )
}

export default Message
