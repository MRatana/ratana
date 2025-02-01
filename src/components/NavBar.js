import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo1.png';
import menu from '../images/menu.png';
import './NavBar.css';

function NavBar() {

  const [activeLink, setActiveLink] = useState('ទំព័រដើម');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-content">
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="menu" className="menu" />
        </div>

        <div className="nav-left">
          <a href='/'>
            <img src={logo} alt="Logo" className="logo" /> 
          </a>
        </div>

        <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${activeLink === 'ទំព័រដើម' ? 'active' : ''}`}
            onClick={() => handleLinkClick('ទំព័រដើម')}> ទំព័រដើម </Link>

          <Link
            to="/article"
            className={`nav-link ${activeLink === 'អត្ថបទ' ? 'active' : ''}`}
            onClick={() => handleLinkClick('អត្ថបទ')}> អត្ថបទ </Link>

          <Link
            to="/about"
            className={`nav-link ${activeLink === 'អំពី' ? 'active' : ''}`}
            onClick={() => handleLinkClick('អំពី')}> អំពី </Link>

        </div>
        <div className="lang-switch">
          <button>🇰🇭</button>
          <button>🇬</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
