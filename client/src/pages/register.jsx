import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './register.css'

function Register() {

  const [username, setusername] = useState()

  function handleSignup(event){
    event.preventDefault();
    alert("User SignedUp !!!")
  }

  {console.log(username)} 
  
  return (
    <div>
       <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account?<Link to={'/login'}> Login</Link></span>
        </div>
        <div className="form">
        <form action="/register" method="post">
          <input type="text" name="username" id="username" placeholder="UserName" 
              value = {username}
              onChange={(e) => setusername(e.target.value)}         
          />
          <input type="email" name="email" placeholder="Email" id="email" />
          <input type="password" name="password" placeholder="Password" id="password" />
          <button onClick={handleSignup} >Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
            <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register