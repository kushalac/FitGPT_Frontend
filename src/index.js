// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';  // Importing global CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
