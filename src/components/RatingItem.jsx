import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import { FaCheckCircle } from 'react-icons/fa';
import { useThemeContext } from '../context/ThemeContext';
const RatingItem = ({ data }) => {
  const { name, bonuses, url, license, rate, image_url } = data;
  const { themeLight } = useThemeContext();

  return (
    <RatingItemWrapper $themelight={themeLight}>
      <div className="header">
        <div className="logo">
          <img src={image_url} alt={name} />

          <h2 className="title">{name}</h2>
          <div className="rate">
            <Stars stars={rate} />
            <p>{rate}</p>
          </div>
        </div>
        <dl className="bonuses">
          <dt>
            <h2>{bonuses[0]}</h2>
          </dt>
          {bonuses.slice(1).map((item, index) => (
            <dt key={index}>
              <FaCheckCircle />
              <p>{item}</p>
            </dt>
          ))}
          {license && <dt>{license}</dt>}
        </dl>
      </div>

      <div className="link">
        <a target="_blank" rel="noreferrer" href={url}>
          Перейти
        </a>
      </div>
    </RatingItemWrapper>
  );
};

export default RatingItem;
const RatingItemWrapper = styled.div`
  width: 1100px;
  padding: 20px 20px 40px 20px;
  border-radius: 7px;
  margin: 20px;
  border: 1px solid #1a1919;
  align-items: center;
  .header {
    display: flex;
  }
  .logo {
    width: 320px;
    display: flex;
    margin-right: 140px;
    flex-direction: column;
    font-size: 23px;
    img {
      margin-bottom: 25px;
    }
    .title {
      font-weight: 600;
      font-size: 26px;
      color: ${(props) => (props.$themelight ? '#010101' : '#dcdedf')};
      margin: 30px 0 20px;
    }
    .rate {
      display: flex;
      p {
        margin: 4px;
      }
      margin-bottom: 20px;
    }
  }
  color: ${(props) => (props.$themelight ? '#010101' : '#dcdedf')};
  h2 {
    color: ${(props) => (props.$themelight ? '#010101' : '#dcdedf')};
  }
  .bonuses {
    list-style: none;
    dt {
      display: flex;
      margin: 10px 0;
      svg {
        width: 19px;
        margin: 0 5px;
        color: #08a603;
      }
    }
  }
  .link {
    margin-top: 20px;
  }
  .link a {
    font-size: 28px;
    background-color: ${(props) => (props.$themelight ? '#df3131' : '#ce0213')};
    padding: 25px 465px;
    border-radius: 7px;
    color: white;
    transition: background-color 0.2s ease;
  }
  .link a:hover {
    background-color: #ff3143;
  }
  @media (max-width: 1040px) {
    font-size: 14px;
    width: 95%;
    font-size: 18px;

    .logo {
      margin-right: 20px;
      img {
        padding: 40px 0 0;
        width: 250px;
      }
      .title {
        font-size: 18px;
      }
      .rate {
        span {
          font-size: 14px;
          margin: 2px;
        }
      }
    }
    .link {
      background-color: ${(props) =>
        props.$themelight ? '#df3131' : '#ce0213'};
      padding: 0 20px;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      a {
        padding: 15px 50px;

        text-align: center;
      }
    }
  }
  @media (max-width: 920px) {
    width: 350px;
    .header {
      display: block;
      height: 550px;
      .logo {
        img {
          width: 300px;
        }
        .title {
          font-size: 24px;
        }
      }
    }
    .rate {
      margin: 0;
      p {
        font-size: 14px;
      }
    }
    .link {
    }
  }
  @media (max-width: 820px) {
    width: 85%;
    .header {
      .logo {
        img {
          width: 350px;
        }
      }
    }
    .link {
      width: 100%;

      a {
      }
    }
  }
  @media (max-width: 500px) {
    .header {
      height: 400px;
      margin-bottom: 50px;
      .logo {
        width: 254px;
        .title {
          margin: 0;
        }
        img {
          width: 250px;
        }
      }
      .rate {
        margin: 20px 0 0 0;
      }
      font-size: 14px;
    }
  }
  @media (max-width: 320px) {
    .header {
      .logo {
        img {
          width: 200px;
        }
      }
    }
  }
`;
