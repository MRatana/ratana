import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import enFlag from "../assets/images/en-flag.png";
import khFlag from "../assets/images/kh-flag.png";
import "./LanguageSwitcher.css";

const languages = {
  en: { name: "English", flag: enFlag },
  km: { name: "ភាសាខ្មែរ", flag: khFlag },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border-2 border-[#87ecd8] rounded-md bg-gray-800 text-white hover:bg-gray-700"
      >
        <img
          src={languages[i18n.language] ? languages[i18n.language].flag : khFlag}
          alt="Flag"
          className="w-8 h-8"
        />

        {/* {languages[i18n.language]?.name} */}
      </button>

      {isOpen && (
        <div className="language-switch absolute mt-2 w-40 bg-gray-800 text-white border-2 border-[#87ecd8] rounded-md shadow-lg">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-700 hover:text-[#87ecd8]"
            >
              <img src={languages[lang].flag} alt="Flag" className="w-6 h-6" />
              {languages[lang].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
