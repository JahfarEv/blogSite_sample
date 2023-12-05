import React, { useContext } from 'react'
import { BlogContext } from './App'
import { Link } from 'react-router-dom';


const List = () => {
  const {blog} =useContext(BlogContext);
  return (
    <>
    <div>
    <h1>Your blogs</h1>
      
    </div>
    {
    blog.map((item)=>{
      return (
        <div key={item.id}>
          <Link to={`/home/${item.id}`}>
          <h1>{item.title}</h1>
          </Link>
        </div>
      )
    })
  }
    </>
  )
}

export default List
