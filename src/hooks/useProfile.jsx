import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error(
      'useProfile must be called within a ProfileContext Provider!!!'
    );
  }
  return context;
};

export { useProfile };
