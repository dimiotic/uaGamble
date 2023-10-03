import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CasinoItem = ({ data }) => {
  const { name, bonuses, url } = data;
  return (
    <CasinoItemWrapper>
      <Link
        to={`casino/${name.replace(' ', '-').toLowerCase()}`}
        className="title"
      >
        <img
          src="https://www.liga.net/igaming/assets/liga/images/first-casino/first-casino-logo-new.svg"
          alt=""
        />
        <h2>{name}</h2>
      </Link>
      <dl className="bonuses">
        {bonuses.map((item, index) => (
          <dt key={index}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/864/864778.png"
              alt=""
            />
            <p>{item}</p>
          </dt>
        ))}
      </dl>
      <a href={url} className="link">
        Перейти
      </a>
    </CasinoItemWrapper>
  );
};

export default CasinoItem;
const CasinoItemWrapper = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  padding: 20px;
  border-radius: 7px;
  border: 1px solid #ccc;
  margin: 20px;
  background-color: white;
  align-items: center;
  .title {
    width: 320px;
    display: flex;
    flex-direction: column;
    font-size: 28px;
  }
  .bonuses {
    list-style: none;
    width: 320px;
    dt {
      display: flex;
      margin: 10px 0;
      img {
        width: 19px;
        margin: 0 10px;
      }
    }
  }
  .link {
    font-size: 28px;
    background-color: #ffa114;
    padding: 12px 14px;
    border-radius: 7px;
    color: white;
    transition: background-color 0.2s ease;
  }
  .link:hover {
    background-color: #ebb565;
  }
`;
