import React,{useEffect, useRef, useState} from 'react'
import './Login.css'
import NewBlog from './NewBlog'
import Newws from './Newws'


const Login = () => {
  const name=useRef()
  const email=useRef()
  const password=useRef() 
  const[showHome,setShowHome]=useState(false)
  const[show,setShow]=useState(false)
  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")
  const localName=localStorage.getItem("name")
  useEffect(()=>{
    if(localSignUp){
      setShowHome(true)
    }
    if(localEmail){
      setShow(true)

    }
  })

  const handleClick=()=>{
   
    if(name.current.value&&email.current.value&&password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signUp",email.current.value)
      alert("Account created succesfully!!")
      window.location.reload()
    }
  }

  const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
      localStorage.setItem("signUp",email.current.value)
      window.location.reload()

    }
  }
  return (
    <div>
    {showHome?<Newws/>:
    (show?
      <div className='container'>
      <h1>Hello{localName}</h1>
          <div className='input_space'>
          <input type="text" placeholder='Email' ref={email} />
          </div>
          <div className='input_space'>
          <input type="password" placeholder='Password' ref={password} />
          </div>
          <button onClick={handleSignIn}>Sign In</button>
      </div>
      :
      <div className='container'>
      <div className='input_space'>
          <input type="text" placeholder='Name' ref={name} />
          </div>
          <div className='input_space'>
          <input type="text" placeholder='Email' ref={email} />
          </div>
          <div className='input_space'>
          <input type="password" placeholder='Password' ref={password} />
          </div>
          <button onClick={handleClick}>Sign up</button>
      </div>)
      
    }
    </div>
  )
}

export default Login

