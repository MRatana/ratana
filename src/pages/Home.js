import React, { useState, useEffect, useRef } from 'react';
import { DotLottiePlayer } from "@dotlottie/react-player";
import './Home.css';
import JsIcon from "../assets/images/java_script.png";
import JavaIcon from "../assets/images/java.png";
import PhpIcon from "../assets/images/php.png";
import ReactIcon from "../assets/images/react.png";
import GitIcon from "../assets/images/git.png";
import MysqlIcon from "../assets/images/mysql.png";
import TailwindcssIcon from "../assets/images/tailwind_css.png";
import CssIcon from "../assets/images/css.png";
import LaravelIcon from "../assets/images/laravel.png";
import GitHubIcon from "../assets/images/github_g.png";
import HtmlIcon from "../assets/images/html.png";

import ContactAnimation from '../assets/lotties/contact-me.lottie';
import telegramIcon from '../assets/images/telegram.png';
import facebookIcon from '../assets/images/facebook.png';
import MailIcon from '../assets/images/mail.png';

import AnimationBG from '../helper/Animation';
import WelcomeAnimation from '../helper/Welcome';
import PhotoAnimation from '../helper/PhotoAnimate';

import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    const [iconSize, setIconSize] = useState(getIconSize());
    const middleHomeRef = useRef(null);
    const lowerHomeRef = useRef(null);

    const lottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.5); // Reduce speed if it's too fast
        }
    }, []);
    function getIconSize() {
        return Math.max(30, window.innerWidth * 0.03); // Scale based on screen width
    }

    useEffect(() => {
        const handleResize = () => {
            setIconSize(getIconSize());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const skills = [
        { name: "JAVA", percentage: "75%", icon: <img src={JavaIcon} alt="Java" style={{ width: iconSize, height: iconSize }} /> },
        { name: "HTML", percentage: "75%", icon: <img src={HtmlIcon} alt="HTML" style={{ width: iconSize, height: iconSize }} /> },
        { name: "CSS", percentage: "60%", icon: <img src={CssIcon} alt="CSS" style={{ width: iconSize, height: iconSize }} /> },
        { name: "JAVASCRIPT", percentage: "60%", icon: <img src={JsIcon} alt="JavaScript" style={{ width: iconSize, height: iconSize }} /> },
        { name: "REACTJS", percentage: "65%", icon: <img src={ReactIcon} alt="ReactJS" style={{ width: iconSize, height: iconSize }} /> },
        { name: "MYSQL", percentage: "50%", icon: <img src={MysqlIcon} alt="MySQL" style={{ width: iconSize, height: iconSize }} /> },
        { name: "PHP", percentage: "40%", icon: <img src={PhpIcon} alt="PHP" style={{ width: iconSize, height: iconSize }} /> },
        { name: "TAILWINDCSS", percentage: "65%", icon: <img src={TailwindcssIcon} alt="TailwindCSS" style={{ width: iconSize, height: iconSize }} /> },
        { name: "LARAVEL", percentage: "40%", icon: <img src={LaravelIcon} alt="Laravel" style={{ width: iconSize, height: iconSize }} /> },
        { name: "GIT", percentage: "50%", icon: <img src={GitIcon} alt="Git" style={{ width: iconSize, height: iconSize }} /> },
        { name: "GITHUB", percentage: "60%", icon: <img src={GitHubIcon} alt="GitHub" style={{ width: iconSize, height: iconSize }} /> }
    ];

    const scrollToMiddle = () => {
        if (middleHomeRef.current) {
            middleHomeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToLower = () => {
        if (lowerHomeRef.current) {
            lowerHomeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="home">
            <div className='upper-home'>
                <div className='upper-left-home'>
                    <div className='welcome-animation'>
                        <WelcomeAnimation />
                    </div>
                    <h2 className="hello text-white font-popin text-2xl lg:text-4xl font-extrabold uppercase mt-6 lg:pt-0">Hello, I'm Ratana,</h2>
                    <div className="text1" fetchpriority="high">{t("uper-home-description")}</div>
                    <div className='linkTo'>

                        <div className='skills' onClick={scrollToMiddle}>{t("skill")}</div>
                        <div className='contacts' onClick={scrollToLower}>{t("contact-me")}</div>

                    </div>
                </div>
                <div className="upper-right-home relative overflow-hidden">
                    <div className="bg-animation">
                        <AnimationBG />
                    </div>
                    <div className="photo-animation">
                        <PhotoAnimation />
                    </div>
                    {/* <img src={MyPhoto} alt='My Photo' /> */}

                </div>


            </div>
            <div className='middle-home' ref={middleHomeRef}>
                <div className='skills-container'>
                    <div className="flex justify-center mb-6"> {/* Center the div */}
                        <h2 className="home-skill text-3xl font-bold border-b-4 border-[#008B8B] text-[#008B8B]">
                            {t("skill")}
                        </h2>
                    </div>
                    <div className="skills-box mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center bg-gray-800 text-white p-4 rounded-lg shadow-md">
                                <div className='skills-card items-center'>
                                    <div className="skills-icon text-green-400">{skill.icon}</div>
                                    <div className='skills-info'>
                                        <p className="text-xl font-semibold">{skill.percentage}</p>
                                        <p className="text-green-300 text-sm">{skill.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='lower-home' ref={lowerHomeRef}>
                <div className="home-content">
                    <h2 className="home-contact text-center w-fit text-3xl font-bold border-b-4 border-[#008B8B] text-[#008B8B] mt-6 mb-6">
                        {t("contact-me")}
                    </h2>

                    <div className='contact-animation'>
                        <DotLottiePlayer
                            src={ContactAnimation}
                            autoplay
                            loop
                        />
                    </div>

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
                            <a href="mailto:ratanamg105@gmail.com">
                                <img src={MailIcon} alt="Mail" />
                            </a>
                        </div>
                    </div>
                    <p className='mt-5'>{t("lower-home-description")}</p>
                </div>
            </div>
        </section>
    );
}

export default Home;