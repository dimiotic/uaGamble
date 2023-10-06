import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <Wrapper>{tempStars}</Wrapper>;
};

export default Stars;

const Wrapper = styled.div`
  display: flex;

  span {
    margin: 5px;
    color: #ec1f30;
  }
`;
