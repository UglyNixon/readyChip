import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChipStore from './store/ChipStore';
import UserStore from './store/UserStore';
export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)


ReactDOM.render(
  
  <Context.Provider value={{
    user :new UserStore(),
    chip: new ChipStore()
    }}>
    <App />
    </Context.Provider>,

  document.getElementById('root')
);




