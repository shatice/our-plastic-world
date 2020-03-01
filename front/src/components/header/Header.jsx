import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sound from "react-sound";
import soundfile from "../../assets/audio/sound.wav";
import "./header.scss";

const Header = () => {
  const [swapSound, setSwapSound] = useState(Sound.status.PLAYING);

  const { i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  const toggle = () => {
    if (swapSound === Sound.status.PLAYING) {
      setSwapSound(Sound.status.STOPPED);
    } else {
      setSwapSound(Sound.status.PLAYING);
    }
  };

  return (
    <header className="header">
      <Sound url={soundfile} playStatus={swapSound} loop={true} />
      <nav>
        <ul>
          <li className="nav__item nav__item--lang">
            <p onClick={() => { changeLanguage("fr"); }} style={{ opacity: i18n.language === "fr" ? "1" : "0.5" }} className={`navItem navItem--lang`}>
              FR
            </p>
            <p onClick={() => { changeLanguage("en"); }} style={{ opacity: i18n.language === "en" ? "1" : "0.5" }} className={`navItem navItem--lang`}>
              EN
            </p>
          </li>
          <li className="nav__item nav__item--audio" onClick={toggle}>
            <svg className="navItem__icon navItem__icon--audioOff">
              <use xlinkHref="/sprite-sheet.svg#audioOffIcon" />
            </svg>
          </li>
          <li className="nav__item nav__item--turnOff">
            <Link to="/">
              <svg className="navItem__icon navItem__icon--turnOff">
                <use xlinkHref="/sprite-sheet.svg#turnOffIcon" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
