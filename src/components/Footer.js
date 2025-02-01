import React from 'react';
import './Footer.css';
import logo from '../images/logo1.png';
import telegramIcon from '../images/telegram.png';
import facebookIcon from '../images/facebook.png';
import linkedinIcon from '../images/linkedin.png';
import MailIcon from '../images/mail.png'


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-uper'>
          <a href='/'><img src={logo} className="b-logo" /></a>
          <div className='line'></div>
          <div>
            <p>©Copyright {currentYear} By Meng Ratana. All Rights Reserved.</p>
          </div>
        </div>

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
            <a href="mailto:ratanamg105@gmail.com">
              <img src={MailIcon} alt="Mail" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;