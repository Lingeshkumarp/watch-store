import axios from 'axios';
import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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
    nav('/login')
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      
        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        /> */}
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
        <div className='Link'><Link to="/login"  onClick={handleSubmit}>Sign Up</Link></div>
      
    </div>
  );
};

export default Signup;
