// This is the entry point of the React application. It imports the necessary modules and renders your main App component into the HTML root element. It uses ReactDOM.createRoot for rendering.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
