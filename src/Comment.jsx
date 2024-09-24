import React from 'react'
import Reply from "./Reply"
export default function Comment({commentData}) {
    console.log(commentData,"comentData****************")
  return (
    <div>
        <h3>{commentData.text}</h3>
        {commentData.replies.map((replyData)=>(
            <Reply replyData={replyData}/>
        ))}
    </div>
  )
}
