import PropTypes from "prop-types";
import { getLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

const AuthContext = ({ children }) => {
  // useEffect(() => {
  //   getLocalStorage();
  // }, []);

  return <div>{children}</div>;
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
