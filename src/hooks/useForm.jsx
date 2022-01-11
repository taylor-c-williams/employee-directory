import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be called within a FormContext Provider!!!');
  }
  return context;
};

export { useForm };
