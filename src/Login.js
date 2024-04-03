// src/LoginForm.js
import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const nav  = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    nav('/homepage')
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className='Link'><Link to="/" onClick={handleSubmit}>Login</Link></div>
      </form>
    </div>
  );
};

export default Login;
