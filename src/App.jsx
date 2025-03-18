import "./css/App.css";
import "./css/Font.css";
import { useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const loginHandler = (email, password) => {
    if (email == "admin@123.com" && password == "admin@123") setUser("admin");
    else if (email == "user@123.com" && password == "user@123") setUser("user");
    else console.log("Invalid credentials");
  };

  const data = useContext(AuthContext);

  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl">
        {!user ? (
          <Login loginHandler={loginHandler} />
        ) : user === "admin" ? (
          <AdminDashboard />
        ) : (
          <EmployeeDashboard />
        )}
      </div>
    </>
  );
}

export default App;
