import React from 'react'
import Comment from "./Comment"
export default function Post({postData}) {
  console.log("🚀 ~ Post ~ postData:", postData)
  return (
    <div>
        <h1>{postData.title}</h1>
        {postData.comments.map((commentData)=>(
            <Comment commentData={commentData}/>
        ))}
    </div>
  )
}
