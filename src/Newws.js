import React from 'react'
import Login from './Login'



const Newws = () => {

    const logOut=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
      <button onClick={logOut} className='logOut'>Logout</button>
      <button onClick={deleteAccount} className='delete'>delete</button>
    </div>
  )
}

export default Newws
