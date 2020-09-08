import React, { useState, useEffect, useRef } from 'react';
import { Input, Button } from 'antd';

const UseRef = () => {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  const focus = () => inputRef.current.focus()

  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div style={{"marginTop": 20}}>
      <h1> Количество рендеров: {renderCount.current} </h1>
      <h1> Прошлое состояние: {prevValue.current} </h1>
      <Input ref={inputRef} type="text" onChange={e => setValue(e.target.value)}/>
      <Button onClick={focus}>Фокус</Button>

    </div>
  );
}

export default UseRef;
