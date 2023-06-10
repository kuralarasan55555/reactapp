import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetching() {
  const [post,setpost]=useState({})
  const [errmsg,seterrmsg]=useState('');
  const [id,setid]=useState(1)
  const [buttonid,setbuttonid]=useState(1);
  const buttonidfetch=()=>{
    setbuttonid(id)
  }
  useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
          .then(response=>{
            console.log(response)
            setpost(response.data)
            console.log(post)
          })
          .catch(err=>{
            console.log(err)
            seterrmsg('Failed to load data')
          })
  },[buttonid])
  return (
    <div>
      <h1>Title of the post</h1>
      <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
      <button type="submit" value={buttonid} onClick={buttonidfetch}>FETCH DATA</button>
      {
       Object.keys(post).length?<h1>{post.title}</h1>:null
      }
      {/* {
        post.length?
        <div style={{display:'table',margin:0,margin:'auto'}}>
        <ul>
          {
          post.map(post=>(
          <li key={post.id}>{post.title}</li>
          ))}
          </ul></div>:null
      } */}
      {
        errmsg.length?<div>{errmsg}</div>:null
      }
    </div>
  )
}

export default DataFetching
