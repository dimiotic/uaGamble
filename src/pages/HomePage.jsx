import React from 'react';
import styled from 'styled-components';
import { CasinoItem } from '../components';

const casinos = [
  {
    id: 0,
    name: 'First',
    bonuses: ['250 freespin', '100 000 hrn', '150%'],
    url: 'https://youtube.com',
  },
  {
    id: 1,
    name: 'Cosmolot',
    bonuses: ['100 frespins', 'demo plays'],
    url: 'https://youtube.com',
  },
  {
    id: 2,
    name: 'Vulkan',
    bonuses: ['unlimin balance', '50 freespins'],
    url: 'https://youtube.com',
  },
  {
    id: 3,
    name: 'Slotocity',
    bonuses: ['sex for free', '2350 freespins'],
    url: 'https://youtube.com',
  },
];

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Найкращі казино України у 2023 році</h1>
      {casinos.map((item) => {
        return <CasinoItem key={item.name} data={item} />;
      })}
    </HomeWrapper>
  );
};

export default HomePage;
const HomeWrapper = styled.main``;
