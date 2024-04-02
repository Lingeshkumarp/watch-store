// App.js
import React from 'react';
import  { useState } from 'react'
import { ReactDOM } from 'react';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import './Login.css';

const Login=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here (e.g., calling an API)
    // For simplicity, this example just logs the user's info.
    console.log(`Logged in as ${username}`);
     
  };
  

  return (
    
    <div className="App">
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              placeholder='UserName'
            />
          </label>
          <br />
        
          
           
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder='Password'
            />
          </label>
          <br />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;