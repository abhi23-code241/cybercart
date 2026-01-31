import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('cyber_user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      alert(`Welcome back, ${storedUser.name}!`);
      navigate('/'); // Redirect to Home
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2 style={{color: '#ff69b4'}}>Welcome Back</h2>
        <p style={{color: '#a0a0a0'}}>Login to your CyberCart account</p>
        
        <input 
          type="email" placeholder="Email Address" required 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" placeholder="Password" required 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button type="submit" className="auth-btn">Login</button>
        <p style={{marginTop: '15px'}}>
          New to CyberCart? <Link to="/signup" style={{color: '#ff69b4'}}>Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;