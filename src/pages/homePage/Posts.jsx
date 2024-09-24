import React,{useState} from 'react'
import postsData from "./postsData"
import Post from "./components/Post"
export default function Posts() {
    // console.log(postsData)
  const [postList,setPostList]= useState(postsData)

    const handleChange = (e)=>{
      console.log(e.target.value)
      // console.log(postsData)
      let filteredPosts = postsData.filter((item)=>{
        // console.log(e.target.value,item.title)
        if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
          return true
          // console.log("yay",item.title)
        }else{
          // console.log("nooooooo",item.title)
        }
        // if it includes console yay otherwise log noooo

      })
      setPostList(filteredPosts)
      console.log(filteredPosts)
      //we want to filter post titles based on the input
      //let's just start with filtering
    }
  return (
    <div>
      <input type="text" name="" id="" onChange={handleChange}/>
        {postList.map((postData)=>(
          <Post postData={postData} key={postData.title}/>
        ))}
    </div>
  )
}
