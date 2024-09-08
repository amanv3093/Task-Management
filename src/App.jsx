import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";
function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-[28rem] mx-auto p-4">
          {/* <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Task Management Dashboard</h1>

            <ThemeToggle />
          </header> */}

          {/* <SearchBar /> */}

          <TaskForm />

          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
