import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardHandler from './CardHandler';

const CardWrapper = () => {
  return (
    <Wrapper>
      <CardLayout>
        <CardHeader />
        <CardHandler />
      </CardLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 27rem;
  margin: 0 0.5rem;
`;

const CardLayout = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;

export default CardWrapper;
