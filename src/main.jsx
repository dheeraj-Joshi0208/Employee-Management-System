import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <TaskContext>
    <AuthContext>
      <App />
    </AuthContext>
  </TaskContext>,
);
