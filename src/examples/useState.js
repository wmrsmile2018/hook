import React, { useState } from 'react';
import { Button } from 'antd';

const computeInitialCounter = () => {
  console.log('some calculations...');
  return Math.trunc(Math.random() * 20)
}

function UseState() {
  // const  [counter, setCounter] = useState(0);
  const  [counter, setCounter] = useState(() => (
    computeInitialCounter()
  ));

  const [state, setState] = useState({
    title: 'Hello',
    date: Date.now()
  })

  const increment = () => {
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <Button onClick={increment}>Increase</Button>
      <Button onClick={decrement}>Decrease</Button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default UseState;
