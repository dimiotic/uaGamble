import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav('/casino');
  }, [nav]);
  return <div>HomePage</div>;
};

export default HomePage;
