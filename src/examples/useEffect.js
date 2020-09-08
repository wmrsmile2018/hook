import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const UseEffect = () => {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))

    return () => {
      console.log('pew pew');
    }
  }, [type]) // if type is change

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    console.log('Component did mount');

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

// <pre>{JSON.stringify(data, null, 2)}</pre>

  return (
    <div style={{"marginTop": 20}}>
      <h1> Ресурс: {type}</h1>
      <pre>{JSON.stringify(pos, null, 2)}</pre>

      <Button onClick={() => setType('users')}>users</Button>
      <Button onClick={() => setType('todos')}>todos</Button>
      <Button onClick={() => setType('posts')}>posts</Button>



    </div>
  );
}

export default UseEffect;
