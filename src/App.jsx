import "./css/App.css";
import "./css/Font.css";
import Login from "./components/Auth/Login";
import { useState } from "react";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const [user, setUser] = useState(null);
  const loginHandler = (email, password) => {
    setUser({ email, password });
  };

  return (
    <>
      <div className="container m-auto min-h-screen p-6">
        {!user ? <Login /> : ""}
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
      </div>
    </>
  );
}

export default App;
