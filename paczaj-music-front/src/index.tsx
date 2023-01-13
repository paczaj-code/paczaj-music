import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import AppContextProvider from './context/AppContext';
import App from './App';
import './assets/scss/index.scss';

axios.defaults.baseURL =
  process.env.REACT_APP_ENVIROMENT && process.env.REACT_APP_ENVIROMENT === 'dev'
    ? 'http://localhost:3001/api/'
    : '/api/';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
