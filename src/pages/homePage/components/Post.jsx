import React from 'react'
import Comment from "./Comment"
import styles from "../styles/post.module.css"
export default function Post({postData}) {
  console.log("🚀 ~ Post ~ postData:", postData)
  return (
    <div className={styles.container}>
        <h1>{postData.title}</h1>
        {postData.comments.map((commentData)=>(
            <Comment commentData={commentData}/>
        ))}
    </div>
  )
}
