import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'antd';

const complexComputed = (num) => {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

const UseMemo = () => {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexComputed(number)
  }, [number])

  useEffect(() => {
    console.log('Hello');
  }, [styles])

  return (
    <div style={{"marginTop": 20}}>
      <h1 style={styles}> Вычисляем свойство: {computed} </h1>
      <Button onClick={() => setNumber(prev => prev + 1)}>Добавить</Button>
      <Button onClick={() => setNumber(prev => prev - 1)}>Убрать</Button>
      <Button onClick={() => setColored(prev => !prev)}>Изменить</Button>

    </div>
  );
}

export default UseMemo;
