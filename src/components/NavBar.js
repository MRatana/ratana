import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo1.png';
import menu from '../assets/images/menu.png';
import './NavBar.css';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../helper/LanguageSwitcher";

function NavBar() {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || '/');
  const [isVisible, setIsVisible] = useState(true);
  
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
    localStorage.setItem('activeLink', location.pathname); // Store in localStorage
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDifference = Math.abs(window.scrollY - lastScrollY);

      if (scrollDifference > 50) { // Only trigger if scrolled more than px
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Hide navbar when scrolling down
        } else {
          setIsVisible(true); // Show navbar when scrolling up
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevents triggering the outside click handler
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-content">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Open menu">
          <img src={menu} alt="" className="menu" />
        </button>

        <div className="nav-left">
          <a href='/'>
            <img src={logo} alt="Web Logo" className="logo" />
          </a>
        </div>

        <div ref={menuRef} className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
          >
            {t("home")}
          </Link>

          <Link
            to="/article"
            className={`nav-link ${activeLink === '/article' ? 'active' : ''}`}
          >
            {t("blog")}
          </Link>

          <Link
            to="/about"
            className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
          >
            {t("about")}
          </Link>
        </div>

        <div className="lang-switch">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
