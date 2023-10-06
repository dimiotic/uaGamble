import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav('/casino');
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
