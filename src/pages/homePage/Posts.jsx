import React,{useState} from 'react'
import postsData from "./postsData"
import Post from "./components/Post"
export default function Posts() {
    // console.log(postsData)
  const [postList,setPostList]= useState(postsData)
  console.log("🚀 ~ Posts ~ postList:", postList)

  const [filterOptions,setFilterOptions]=useState({
    title:null,
    id:null
  })
    const handleChange = (e)=>{
      // console.log(e.target.value)
      // // console.log(postsData)
      // let filteredPosts = postsData.filter((item)=>{
      //   // console.log(e.target.value,item.title)
      //   if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
      //     return true
      //     // console.log("yay",item.title)
      //   }else{
      //     // console.log("nooooooo",item.title)
      //   }
      //   // if it includes console yay otherwise log noooo

      // })
      // setPostList(filteredPosts)
      // console.log(filteredPosts)
      // //we want to filter post titles based on the input
      // //let's just start with filtering
    }


    const updateTitle =(e)=>{
      let copy  = {...filterOptions}
      copy.title = e.target.value
      setFilterOptions(copy)
    }
    const updateId = (e)=>{
      let copy  = {...filterOptions}
      copy.id = Number(e.target.value)
      setFilterOptions(copy)
    }
    const filterData= ()=>{
      console.log("hello",filterOptions)

         let filteredPosts = postsData.filter((item)=>{
        console.log(item,"iteeeeeeeeeeeeeeeeeeeeeeem")
        // if(item.title.toLowerCase().(filterOptions.title.toLowerCase() && item.id ===filterOptions.id)){includes
        //   return true
        //   // console.log("yay",item.title)
        // }else{
        //   // console.log("nooooooo",item.title)
        // }
        let title = item.title.toLowerCase()
        let id = item.id
        let filterTitle = filterOptions.title.toLowerCase()
        let filterId = filterOptions.id
        if(title.includes(filterTitle) && id === filterId){
          return true
        }
        // if it includes console yay otherwise log noooo

      })
      setPostList(filteredPosts)
      // console.log(filteredPosts)
      // //we want to filter post titles based on the input
      // //let's just start with filtering
    }
  return (
    <div>
      <label htmlFor="">title:</label>
      <input type="text" name="" id="" onChange={updateTitle}/>
      <label htmlFor="">id:</label>
      <input type="number" name="" id="" onChange={updateId}/>

      <button onClick={filterData}>filter </button>
      
        {postList.map((postData)=>(
          <Post postData={postData} key={postData.title}/>
        ))}
        {postList.length ===0 &&<p>no results found</p>}
    </div>
  )
}
