import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from "./pages/homePage/Posts"
function App() {
  const [count,setCount]=useState(0)

  let num = 10
  

  const increment= ()=>{
    num++
    console.log(count,"before")
    let total = count+1
    setCount(total)
    console.log(total,"after")
    return <p>{num}</p>
  }
  return (
    <>
   {/* <Posts/> */}
   {count}
   <button onClick={increment}>increment</button>
    </>
  )
}

export default App
