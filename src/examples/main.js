import React from 'react';
import { useAlert } from './alert/alertContext';

const  Main = () => {
  const {show} = useAlert()
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={() => show('new some text')} className='btn btn-success'>Показать alert</button>
    </>
  )
}

export default Main;
