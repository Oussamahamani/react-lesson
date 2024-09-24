import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import posts from "./posts"
function App() {
  console.log(posts)


  return (
    <>
    {posts.map((post)=>(
      <div>
        <h4>
        {post.title}
        </h4>
        {/* {console.log(post)} */}
        {post.comments.map((comment)=>(
          <h5>
            {comment.text}
            {/* {console.log(comment)} */}
            {comment.replies.map((reply)=>(
              <li>
                {reply.text}
                {console.log(reply)}
              </li>
            ))}
          </h5>
        ))}
      </div>
    ))}
    </>
  )
}

export default App
