import TaskForm from "./components/TaskForm";
import TaskListPage from "./components/TaskListPage";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Navbar />

      <Outlet />
    </TaskProvider>
  );
}

export default App;
