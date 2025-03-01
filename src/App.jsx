import "./css/App.css";
// import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      <div className="bg-[#1c1c1c] text-gray-200">
        <div className="bg-black text-gray-200">
          {/* <Login /> */}
          <EmployeeDashboard />
        </div>
      </div>
    </>
  );
}

export default App;
