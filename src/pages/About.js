import React from 'react';
import './About.css';

import FaCheckCircle from '../assets/images/check.png';
import FaMapMarkerAlt from '../assets/images/location.png';
import FaGraduationCap from '../assets/images/graduate.png';
import FaBriefcase from '../assets/images/briefcase.png';

import telegramIcon from '../assets/images/telegram.png';
import facebookIcon from '../assets/images/facebook.png';
import linkedinIcon from '../assets/images/linkedin.png';
import MailIcon from '../assets/images/mail.png';
import GithubIcon from '../assets/images/github.png';
import RadioIcon from '../assets/images/radio.png';
import AnimationBG from '../helper/Animation';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  return (
    <section className="summary-section">
      <div className='about-animation'>
        <AnimationBG />
      </div>
      <div className="summary-container">
        <h2 className="summary-title">{t("personal-info")}</h2>

        <div className="summary-content">
          <div className='summary-list'>
            <img src={FaCheckCircle} className="icon"/>
            <p> {t("name")} <strong style={{ marginLeft: '10px' }}>{t("my-name")}</strong></p>
          </div>

          <div className='summary-list'>
          <img src={FaMapMarkerAlt} className="icon"/>
            <p> {t("p-o-b")}<strong style={{ marginLeft: '10px' }}>{t("my-p-o-b")}</strong></p>
          </div>

          <div className='summary-list'>
          <img src={FaGraduationCap} className="icon"/>
            <p> {t("study")}</p>
          </div>

          <ul>
            <div className='study-list'>
              <img className='radio-icon' src={RadioIcon} alt="RadioIcon" />
              <li><strong>2017-2020: {t("high-school")}</strong></li>
            </div>

            <div className='study-list'>
              <img className='radio-icon' src={RadioIcon} alt="RadioIcon" />
              <li><strong>2020-2024: {t("college")}</strong></li>
            </div>
          </ul>

          <div className='summary-list'>
          <img src={FaBriefcase} className="icon"/>
            <p> {t("work")} <strong style={{ marginLeft: '10px' }}>(none)</strong></p>
          </div>
        </div>

        <div className="social-media">
          <h3 className='social-title'><strong>{t("social")}</strong></h3>

          <div className="social-about">
            <div className='about-icon'>
              <a href="https://t.me/Mengratana" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </div>

            <div className='about-icon'>
              <a href="https://web.facebook.com/ratana.meng.984/" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>

            <div className='about-icon'>
              <a href="https://www.linkedin.com/in/ratana-meng-b85594317/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>

            <div className='about-icon'>
              <a href="https://github.com/MRatana" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github" />
              </a>
            </div>

            <div className='about-icon'>
              <a href="mailto:ratanamg105@gmail.com">
                <img src={MailIcon} alt="Mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;