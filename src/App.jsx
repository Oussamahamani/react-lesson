import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import posts from "./posts"
function App() {
  // console.log(posts)


  return (
    <>
    {posts.map((post)=>(
      <div>
        <h4>
        {post.title}

        </h4>
       {post.comments.map((comment)=>(
        <div>
          {console.log(comment)}
        </div>
       ))}
      </div>
    ))}
    </>
  )
}

export default App
