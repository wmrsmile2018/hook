import React from 'react';

import { useAlert } from './alertContext';

const Alert = () => {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div className='alert alert-danger' onClick={alert.hide}>
      {alert.text ?
        alert.text
        :
        'Это очень и очень важное сообщение'
      }
    </div>
  )
}

export default Alert;
