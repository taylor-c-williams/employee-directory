import React from 'react';
import { render } from 'react-dom';
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import { ProfileProvider } from './context/ProfileContext';
import App from './App';

render(
  <React.StrictMode>
    <ProfileProvider>
      <FormProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </FormProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
