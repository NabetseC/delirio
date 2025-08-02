import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./redLogo.svg";
import "./PageStyle.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header'>
      <div className='header-left'>
        <img src={logo} alt="Logo" className="logo" />
        <p className="brand-name">delirio</p>
      </div>

      <div className={`header-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className='headerLink'>Home</Link>
        <a href="/#features" className='headerLink'>Features</a>
        <button className='waitlistButtonSmall'>
          Join waitlist
        </button>
      </div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Header;
