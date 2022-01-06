import React from 'react';
import { render } from 'react-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
