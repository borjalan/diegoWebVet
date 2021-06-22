import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Components
import App from './App/App';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrapblack.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
