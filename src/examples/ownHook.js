import React, { useState, useEffect } from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log('value changed: ', value);
  }, [value])
}

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {onChange, value},
    value,
    clear
  }
}

const OwnHook = () => {
  const inputName = useInput('');
  const inputLastName = useInput('');

  useLogger(inputName.value)
  useLogger(inputLastName.value)

  return (
      <div className='container pt-3'>
        <input type="text" {...inputName.bind}/>
        <input type="text" {...inputLastName.bind}/>
        <hr/>
        <h1>{inputName.value} {inputLastName.value}</h1>
        <button className="btn btn-warning" onClick={() => inputName.clear()}></button>

      </div>
  );
}
export default OwnHook;
