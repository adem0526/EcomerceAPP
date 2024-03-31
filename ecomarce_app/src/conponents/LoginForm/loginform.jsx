import React from 'react'
import './loginform.css'
import { FaUser,FaLock } from "react-icons/fa";

const loginform = () => { 
  return (
    <div className='wrapper '>
      <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" name="" id="" placeholder='Username' required/>
        <FaUser className='icon'/>
     
      </div>
      <div className="input-box">
        <input type="password" name="" id="" placeholder='Password' required/>
        <FaLock className='icon' />
      </div>
      <div className="remember-forgot">
  <label > <input type="checkbox" name="" id="" />Remember me</label>
  <a href="#">Forgot password?</a>
</div>
<button type='submit'>Login</button>
<div className="register-link">
  <p> Don't have an account <a href="#">Register</a></p>
</div>
      </form>
    </div>
  )
}

export default loginform
