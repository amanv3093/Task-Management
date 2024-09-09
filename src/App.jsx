import TaskForm from "./components/TaskForm";
import TaskListPage from "./components/TaskListPage";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <TaskProvider>
      <Navbar />

      <Outlet />
      <div className="md:hidden">
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;
