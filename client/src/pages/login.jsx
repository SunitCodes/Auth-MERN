import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './login.css'

function Login() {

    const [username, setusername] = useState()
  
    function handleSignup(event){
      event.preventDefault();
      alert("User LogedIn !!!")
    }
  
    {console.log(username)} 
    
    return (
      <div>
        <div className="container">
        <div className="cardIN">
          <div className="card_title">
            <h1>Welcome User</h1>
            <span>Need an account? <Link to={'/register'}>Register</Link> now!</span>
          </div>
          <div className="form">
          <form action="/register" method="post">
            <input type="text" name="username" id="username" placeholder="UserName" 
                value = {username}
                onChange={(e) => setusername(e.target.value)}         
            />
            <input type="password" name="password" placeholder="Password" id="password" />
            <button onClick={handleSignup} >Log In</button>
            </form>
          </div>
          <div className="card_terms">
              <span><a href="">Forgot Password?</a></span>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
export default Login