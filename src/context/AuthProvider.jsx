import PropTypes from "propTypes";
import { createContext } from "react";

export const AuthContext = createContext;
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ isAuthenticated: true }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
