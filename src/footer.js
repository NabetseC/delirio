import React from 'react'
import { Link } from 'react-router-dom'
import "./PageStyle.css"
import logo from "./redLogo.svg"


function Footer() {
  return (
     <footer className="delirio-footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className="footer-logo">
            <img src= {logo} alt = "Logo" className ="footer-logo-img"></img>
            <span className="brand-name">delirio</span>
          </div>
          <p className="tagline">Train smarter. Move better.</p>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="/#demo">Demo</a>
          <a href="/#features">Features</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="mailto:d3lirio01@gmail.com">Email Us</a>
          <a href="https://www.linkedin.com/company/d3lirio/about/" target='_blank'>LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Delirio. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;