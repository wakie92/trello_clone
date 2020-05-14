import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderLayout from './components/Header/HeaderLayout';
import CardList from './components/Card/CardList';

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter(counter + 1);
  };
  const onDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <AppWrapper>
      <HeaderLayout />
      <CardList />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-image: url('https://blog-oscar.s3.ap-northeast-2.amazonaws.com/images/himalayas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: 50%;
  height: 100vh;
  position: relative;
`;

export default App;
