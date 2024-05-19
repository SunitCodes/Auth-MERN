import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './register.css'
import axios from 'axios'

function Register() {

  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const handleSignup = async(e)=>{
    e.preventDefault();
      const response = await axios.post('http://localhost:5000/register',{
        username,
        email,
        password
      }).then((response) => {
        console.log(response);
      });
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
        <form onSubmit={handleSignup} >
          <input type="text" name="username" id="username" placeholder="UserName" 
              value = {username}
              onChange={(e) => setusername(e.target.value)}         
          />
          <input type="email" name="email" placeholder="Email" id="email" 
              value = {email}
              onChange={(e) => setemail(e.target.value)}/>
          <input type="password" name="password" placeholder="Password" id="password"
              value = {password}
              onChange={(e) => setpassword(e.target.value)} />
          <button type='submit' >Sign Up</button>
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