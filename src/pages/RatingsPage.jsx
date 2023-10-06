import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RatingItem } from '../components';
import { useTranslation } from 'react-i18next';

const RatingsPage = ({ title, ua, ru }) => {
  const { t, i18n } = useTranslation();
  const [casinos, setCasinos] = useState(ru);
  useEffect(() => {
    if (i18n.language === 'uk') setCasinos(ua);
    else setCasinos(ru);
  }, [i18n.language, ru, ua]);

  return (
    <Wrapper>
      <h1>{t(title)}</h1>
      <div className="casinos">
        {casinos.map((item) => {
          return <RatingItem key={item.name} data={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default RatingsPage;
const Wrapper = styled.main`
  .casinos {
    margin-top: 50px;
  }
  @media (max-width: 920px) {
    .casinos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
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
  }
`;
