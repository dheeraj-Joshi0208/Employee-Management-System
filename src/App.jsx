import "./css/App.css";
import "./css/Font.css";
// import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      <div className="container m-auto flex min-h-screen w-full items-center justify-center p-6">
        {/* <Login /> */}
        <EmployeeDashboard />
      </div>
    </>
  );
}

export default App;
