import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RatingItem } from '../components';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../context/ThemeContext';

const RatingsPage = ({ title, ua, ru }) => {
  const { t, i18n } = useTranslation();
  const [casinos, setCasinos] = useState(ru);

  useEffect(() => {
    if (i18n.language === 'uk') setCasinos(ua);
    else setCasinos(ru);
  }, [i18n.language, ru, ua]);
  const { themeLight } = useThemeContext();
  return (
    <Wrapper $themelight={themeLight}>
      <h1>{t(title)}</h1>
      <div className="casinos">
        {casinos.map((item) => {
          return <RatingItem key={item.name} data={item} />;
        })}
      </div>
      <div className="footer">
        <p>{t('topCasino.footerText')}</p>
      </div>
    </Wrapper>
  );
};

export default RatingsPage;
const Wrapper = styled.main`
  h1,
  p {
    color: ${(props) => (props.$themelight ? '#070707' : '#fdfdfd')};
  }
  .casinos {
    margin-top: 50px;
  }
  .footer {
    margin: 170px 20px;
    width: 80%;
    padding-bottom: 50px;

    p {
      line-height: 1.5;
      font-size: 22px;
      font-weight: 400;
    }
  }
  @media (max-width: 920px) {
    .casinos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .footer {
      margin: 50px 15px;

      P {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 18px;
      padding: 0 20px;
    }
    .casinos {
      margin-top: 20px;
    }
    .footer {
      p {
        font-size: 16px;
      }
    }
  }
`;
