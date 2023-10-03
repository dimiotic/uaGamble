import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link className="logo" to="/">
        <img src={logo} alt="UA.gamble" />
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  padding: 17px 35px;
  box-shadow: -5px 5px 22px #d7d7d7, 5px -5px 22px #e9e9e9;
  .logo {
    font-size: 26px;
  }
`;
