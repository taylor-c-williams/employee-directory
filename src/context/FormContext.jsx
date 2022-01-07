import { createContext, useState } from 'react';

const FormContext = createContext();
const FormProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <FormContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </FormContext.Provider>
  );
};
export { FormProvider, FormContext };
