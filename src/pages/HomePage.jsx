import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CasinoItem } from '../components';
import { useTranslation } from 'react-i18next';
import { casinosRU, casinosUA } from '../casinos';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const lng = navigator.language;
  const [casinos, setCasinos] = useState(casinosRU);
  useEffect(() => {
    if (i18n.language === 'uk') setCasinos(casinosUA);
    else setCasinos(casinosRU);
  }, [i18n.language]);

  return (
    <Wrapper>
      <h1>{t('topCasino')}</h1>
      <div className="casinos">
        {casinos.map((item) => {
          return <CasinoItem key={item.name} data={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default HomePage;
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
