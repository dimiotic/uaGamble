import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
const ThemeContext = createContext('light');
root.render(
  <ThemeContext.Provider>
    <App />
  </ThemeContext.Provider>
);
