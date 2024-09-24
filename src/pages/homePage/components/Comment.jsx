import React from 'react'
import Reply from "./Reply"
import styles from "../styles/comment.module.css"
export default function Comment({commentData}) {
    console.log(commentData,"comentData****************")
  return (
    <div className={styles.container}>
        <h3>{commentData.text}</h3>
        {commentData.replies.map((replyData)=>(
            <Reply replyData={replyData}/>
        ))}
    </div>
  )
}
