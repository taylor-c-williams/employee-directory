import React from 'react';
import { render } from 'react-dom';
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import App from './App';

render(
  <React.StrictMode>
    <FormProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
