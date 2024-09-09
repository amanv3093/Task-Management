import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "rgb(246, 248, 250)"
  );
  console.log(tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // document.documentElement.classList.toggle("dark", theme === "dark");
    console.log(theme);

    if (theme === "light") {
      document.body.style.background = "rgb(246, 248, 250)";
    } else {
      document.body.style.background = "black";
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  let navigate = useNavigate();
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);

    navigate("/TaskListPage");
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        toggleComplete,
        filteredTasks,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        theme,
        setTheme,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
