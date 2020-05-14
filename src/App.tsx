import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter(counter + 1);
  }
  const onDecrease = () => {
    setCounter(counter -1 );
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={onIncrease}>+1</button>
      <button type="button" onClick={onDecrease}>-1</button>
    </div>
  );
}

export default App;
