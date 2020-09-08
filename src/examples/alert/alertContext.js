import React, { useState, useContext, useReducer } from 'react';
// useContext
// v1___________________-
const AlertContext = React.createContext();
// v2___________________-
// const AlertToggleContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext)
}

// useContext
// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext)
// }

const SHOW_ALERT = 'SHOW';
const HIDE_ALERT = 'HIDE';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, visible: true, text: action.text}
    case HIDE_ALERT:
      return {...state, visible: false}
    default:
      return state;
  }
}

export const AlertProvider = ({children}) => {
  // useContext
  // const [alert, setAlert] = useState(false)
  // const toggle = () => setAlert(prev => !prev)

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = text => dispatch({type: SHOW_ALERT, text})
  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AlertContext.Provider value={{
        visible: state.visible,
        text: state.text,
        show, hide
      }}>
        {children}
    </AlertContext.Provider>
  )


  // v1___________________-
  // return (
  //   <AlertContext.Provider value={{
  //       visible: alert,
  //       toggle
  //     }}>
  //       {children}
  //   </AlertContext.Provider>
  // )

  // v2___________________-
  // return (
  //   <AlertContext.Provider value={alert}>
  //     <AlertToggleContext.Provider value={toggle}>
  //       {children}
  //     </AlertToggleContext.Provider>
  //   </AlertContext.Provider>
  // )
}
