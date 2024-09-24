import React from 'react'

export default function Reply({replyData}) {
    console.log("replyData*******",replyData)
  return (
    <div>
      <h5 style={{textAlign:"left"}}>

      {replyData.user}
      </h5>
            <li style={{textAlign:"left"}}>
                {replyData.text}
            </li>
    </div>
  )
}
