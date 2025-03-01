import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-20 min-h-screen container mx-auto">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
