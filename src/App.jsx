import "./css/App.css";
import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      <div className="container m-auto min-h-screen w-full p-6 flex items-center justify-center">
        <Login />
        {/* <EmployeeDashboard /> */}
      </div>
    </>
  );
}

export default App;
