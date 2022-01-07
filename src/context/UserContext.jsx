import { createContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { email: currentUser.email } : {}
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
