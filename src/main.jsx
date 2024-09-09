import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskListPage from "./components/TaskListPage.jsx";
import Navbar from "./components/Navbar.jsx";
import TaskForm from "./components/TaskForm.jsx";

const router = createBrowserRouter([
  {
    element: <App />, // Render the App component, which includes Navbar
    children: [
      { path: "/", Component: TaskForm },
      { path: "/TaskListPage", Component: TaskListPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
