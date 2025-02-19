import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <LoginContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoginContext.Provider>
  );
};
