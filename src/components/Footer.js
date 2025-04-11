import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Footer.css';
import logo from '../assets/images/logo1.png';
import telegramIcon from '../assets/images/telegram.png';
import facebookIcon from '../assets/images/facebook.png';
import linkedinIcon from '../assets/images/linkedin.png';
import MailIcon from '../assets/images/mail.png'
import GithubIcon from '../assets/images/github.png'
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || '/');

  useEffect(() => {
    setActiveLink(location.pathname);
    localStorage.setItem('activeLink', location.pathname); // Store in localStorage
  }, [location.pathname]);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-uper'>
          <a href='/' aria-label="Go to Home"><img src={logo} className="b-logo" alt='Web Logo' /></a>

          <div className='line'></div>

          <div className='start-right'>
            <div className='uper-right'>
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
            <div className='copyright'>
              ©Copyright {currentYear} By <span className='name'>Meng Ratana</span>. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className='footer-right'>
          <span className='social'>{t("social")}</span>
          <div className="social-icons">
            <div className='icon-border'>
              <a href="https://t.me/Mengratana" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </div>

            <div className='icon-border'>
              <a href="https://web.facebook.com/ratana.meng.984/" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>

            <div className='icon-border'>
              <a href="https://www.linkedin.com/in/ratana-meng-b85594317/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>

            <div className='icon-border'>
              <a href="https://github.com/MRatana" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
            </div>

            <div className='icon-border'>
              <a href="mailto:ratanamg105@gmail.com">
                <img src={MailIcon} alt="Mail" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;