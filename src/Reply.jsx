import React from 'react'

export default function Reply({replyData}) {
    console.log("replyData*******",replyData)
  return (
    <div>
        user:{replyData.user}
            <p>
                {replyData.text}
            </p>
    </div>
  )
}
