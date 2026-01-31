import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Save user data to localStorage
    localStorage.setItem('cyber_user', JSON.stringify(formData));
    alert('Account created successfully! Please login.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2 style={{color: '#ff69b4'}}>Create Account</h2>
        <p style={{color: '#a0a0a0'}}>Join the CyberCart community</p>
        
        <input 
          type="text" placeholder="Full Name" required 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        <input 
          type="email" placeholder="Email Address" required 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <input 
          type="password" placeholder="Password" required 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        
        <button type="submit" className="auth-btn">Sign Up</button>
        <p style={{marginTop: '15px'}}>
          Already have an account? <Link to="/login" style={{color: '#ff69b4'}}>Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;