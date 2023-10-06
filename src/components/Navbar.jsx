import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import logoDark from '../logoDark.png';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../context/ThemeContext';
const Navbar = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const handleLangChange = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  const { themeLight, setThemeLight } = useThemeContext();
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)');
  useEffect(() => {
    setThemeLight(prefersDarkScheme.matches);
  }, [setThemeLight, prefersDarkScheme.matches]);
  useEffect(() => {
    document.body.style.backgroundColor = themeLight ? '#fff' : '#010101';
  }, [themeLight]);
  return (
    <NavbarWrapper themeLight={themeLight}>
      <div className="navbar">
        <button
          onClick={() => {
            setThemeLight(!themeLight);
          }}
          className="logo"
          to="/"
        >
          <img src={themeLight ? logoDark : logo} alt="UA.gamble" />
        </button>
        <div className="links">
          <NavLink to="/casino">Казино</NavLink>
          <NavLink to="/mfo">МФО</NavLink>
        </div>
        <div className="langs">
          <button
            onClick={() => handleLangChange('uk')}
            className={`lang_btn ${lang === 'uk' ? 'active' : ''}`}
          >
            UA
          </button>
          <button
            onClick={() => handleLangChange('ru')}
            className={`lang_btn ${lang === 'ru' ? 'active' : ''}`}
          >
            RU
          </button>
        </div>
      </div>
      <div>
        <div className="links_bottom">
          <NavLink to="/casino">Казино</NavLink>
          <NavLink to="/mfo">МФО</NavLink>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 17px 35px;
    .logo {
      font-size: 26px;
      width: 10%;
      background-color: transparent;
      border: none;
    }
    .links {
      a {
        color: ${(props) => (props.themeLight ? '#000000' : '#f0f0f0')};
      }
      display: flex;
      gap: 20px;
      font-size: 20px;
      .active {
        color: #df0b1d;
      }
    }

    .langs {
      width: 10%;
      text-align: end;
      .lang_btn {
        color: ${(props) => (props.themeLight ? '#010101' : '#f0f0f0')};
        border: 0;
        margin: 3px;
        transition: color 0.2s ease;
        font-size: 17px;
        background-color: transparent;
      }
      .active {
        color: #df0b1d;
      }
    }
  }
  .links_bottom {
    display: none;
  }
  @media (max-width: 820px) {
    .navbar {
      img {
        width: 150px;
      }
      .links {
        display: none;
      }
    }
    .links_bottom {
      display: flex;
      gap: 10px;
      margin: 0 40px;
      font-size: 20px;
      .active {
        color: #df0b1d;
        text-decoration: underline;
        text-underline-offset: 5px;
      }
    }
  }
  @media (max-width: 500px) {
    .navbar {
      img {
        width: 120px;
      }
    }
    .links_bottom {
      margin: 0 40px 30px;
      font-size: 18px;
    }
  }
  @media (max-width: 320px) {
    .links_bottom {
      margin: 0 40px 30px;
      font-size: 16px;
    }
  }
`;
