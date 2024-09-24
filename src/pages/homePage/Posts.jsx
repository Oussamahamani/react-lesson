import React from 'react'
import postsData from "./postsData"
import Post from "./components/Post"
export default function Posts() {
    // console.log(postsData)
  return (
    <div>
        {postsData.map((postData)=>(
          <Post postData={postData} key={postData.title}/>
        ))}
    </div>
  )
}
