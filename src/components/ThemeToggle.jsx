import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(TaskContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="btn"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
