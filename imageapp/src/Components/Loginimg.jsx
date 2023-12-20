
import React, { useState } from 'react';
import './Loginimg.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Loginimg() {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLog = async (e) => {
    e.preventDefault();
    const body = {
      name,
      password,
    };

    try {
      const result = await axios.post('http://localhost:8000/login', body);
      if (result.data.statusCode === 202) {
        alert('User login successfully');
        navigate('/home')
        
      } else {
        alert('User login failed');
      }
    } catch (error) {
    
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="Reg-container">
      <h2>Login</h2>
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
        <button onClick={(e)=>handleLog(e)} type="submit">Login</button>
       <Link to={'/Reg'}>Don't have an account?</Link> 
      </form>
    </div>
  );
}
