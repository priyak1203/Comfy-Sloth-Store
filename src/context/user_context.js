import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect, useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    console.log(`User : ${user}`);
    console.log(`isAuthenticaticated : ${isAuthenticated}`);
    console.log(`isLoading : ${isLoading}`);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
