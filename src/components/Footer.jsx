import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 style={{color: '#ff69b4'}}>CyberCart</h3>
          <p>Your premium destination for futuristic tech and gadgets.</p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>TGL Group Project - 2026</p>
          <p>Solo Developer Edition</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@cybercart.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div style={{display: 'flex', gap: '10px', color: '#ff69b4', cursor: 'pointer'}}>
            <span>FB</span> | <span>IG</span> | <span>X</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 CyberCart. Built with ReactJS[cite: 13].</p>
      </div>
    </footer>
  );
};

export default Footer;