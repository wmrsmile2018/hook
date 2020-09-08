import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ItemsList from './itemsList';
import { Button } from 'antd';

const UseCallback = () => {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
  }, [count])

  return (
    <div style={{"marginTop": 20}}>
      <h1 style={styles}> Количество элементов: {count} </h1>
      <Button onClick={() => setCount(prev => prev + 1)}>Добавить</Button>
      <Button onClick={() => setColored(prev => !prev)}>Изменить</Button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  );
}

export default UseCallback;
