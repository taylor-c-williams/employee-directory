import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be called within a UserContext Provider!!!');
  }
  return context;
};

export { useUser };
