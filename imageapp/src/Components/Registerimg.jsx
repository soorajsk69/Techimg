
import React, { useState } from 'react';
import './Registerimg.css'; 
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Registerimg() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleReg = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };

    try {
      const result = await axios.post('http://localhost:8000/reg', body);
      if (result.data.statusCode === 202) {
        alert('User registered successfully');
        navigate('/')
      } else {
        alert('User registration failed');
      }
    } catch (error) {
    
      alert('Error: ' + error.message);
      
    }
  };
    return (
    <div className="Reg-container">
      <h2>Register</h2>
      <form  className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter your email"
        required
        style={{ width: '100%' }}
      />
    </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button  onClick={(e)=>handleReg(e)} type="submit">Register</button>
        <Link to={'/'}>do u have an Ac?</Link> 
        
      </form>
    </div>
  );
}
