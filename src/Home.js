import React, { useContext } from 'react'
import { BlogContext } from './App'
import { useParams } from 'react-router-dom';

function Home() {
  const {blog}=useContext(BlogContext);
  const {id}=useParams()
  const findId=blog.find((item)=>item.id===parseInt(id))
  return (
    <div>
      <h1>{findId.title}</h1>
      <p>{findId.body}</p>
    </div>
  )
}

export default Home
