import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userName: "",
  login: (token) => {},
  logut: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const initialName = localStorage.getItem("uName");
  const [userName, setUserName] = useState(initialName);
  const userLoggedIn = !!token;

  const nameHandler = (name) => {
    setUserName(name);
    localStorage.setItem("uName", name);
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    name: nameHandler,
    userName: userName,
    login: loginHandler,
    logut: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
