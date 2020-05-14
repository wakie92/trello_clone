import React from 'react';
import styled from 'styled-components';
import CardWrapper from './CardWrapper';

const CardList = () => {
  return (
    <Wrapper>
      <CardWrapper />
      <CardWrapper />
      <CardWrapper />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  top: 4rem;
  display: flex;
  position: absolute;
  min-height: calc(100% - 4rem);
`
export default CardList;