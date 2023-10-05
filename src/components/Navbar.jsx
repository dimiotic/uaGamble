import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const hadleLangChange = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <NavbarWrapper>
      <Link className="logo" to="/">
        <img src={logo} alt="UA.gamble" />
      </Link>
      <div className="langs">
        <button
          onClick={() => hadleLangChange('uk')}
          className={`lang_btn ${lang === 'uk' ? 'active' : ''}`}
        >
          UA
        </button>
        <button
          onClick={() => hadleLangChange('ru')}
          className={`lang_btn ${lang === 'ru' ? 'active' : ''}`}
        >
          RU
        </button>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 35px;
  .logo {
    font-size: 26px;
  }

  .langs {
    .lang_btn {
      color: #f0f0f0;
      border: 0;
      margin: 3px;
      transition: color 0.2s ease;
      font-size: 15px;
      background-color: transparent;
    }
    .active {
      color: #a60311;
    }
  }
`;
