import React from 'react';

import Main from './main';
import Alert from './alert/alert';
import { AlertProvider } from './alert/alertContext'

const UseContext = () => {
  return (
    <AlertProvider>
      <div className='container pt-3'>
        <Alert/>
        <Main/>
      </div>
    </AlertProvider>
  );
}

export default UseContext;
