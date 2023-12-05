import React, { useContext, useRef } from 'react'
import { BlogContext } from './App'
import { Link } from 'react-router-dom';


  

function NewBlog() {
  const {blog,setBlog}=useContext(BlogContext);
  const title=useRef({});
  const description=useRef({});

const handleClick=()=>{
  const newTitle=title.current.value;
  const newBlog=description.current.value;
  const value={title:newTitle, body:newBlog, id: Date.now()};
  setBlog([...blog, value]);
 console.log(blog);
}
  return (
    <div className='blog'>
    
    
     <form onChange={handleClick}>
      <textarea className='box1' cols="80" placeholder='Write your title' ref={title}></textarea>
      <br/>
      <textarea className='box2 mt-5' cols="100" rows="20" placeholder='Write your blog' ref={description}></textarea>
      <br/>
      <Link to='/list'>
      <button >Submit</button>
      </Link>
     </form>
      
    </div>
  )
}

export default NewBlog
