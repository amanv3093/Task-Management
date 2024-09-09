import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddLogo from "./AddLogo";
import "../App.css";
const TaskForm = () => {
  const { addTask, theme } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      return alert("Please fill out all fields.");
    }

    const selectedDate = new Date(dueDate);
    const today = new Date();

    // Remove the time portion from the dates by setting hours to 0
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return alert("Due date cannot be in the past.");
    }

    addTask({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-[28rem] mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className=" dark:bg-gray-800 p-4 rounded-md flex items-center justify-center flex-col"
        >
          <h2 className="text-xl font-bold mb-4">Add New Task</h2>
          <AddLogo />
          <div className="w-full">
            <TextField
              label="Task title *"
              color="secondary"
              focused
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input rounded-xl"
              sx={{
                "& .MuiOutlinedInput-input": {
                  color: theme === "dark" ? "white" : "black",
                },
              }}
            />
          </div>
          <div className="mt-6 rounded-xl w-full">
            <TextField
              label="Task Description *"
              color="secondary"
              focused
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input rounded-xl"
              rows="5"
              multiline
              sx={{
                "& .MuiOutlinedInput-input": {
                  color: theme === "dark" ? "white" : "black",
                },
              }}
            />
          </div>
          <div className="my-6 w-full">
            <TextField
              label="Task Deadline *"
              type="date"
              color="secondary"
              focused
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="input rounded-xl"
              sx={{
                "& .MuiOutlinedInput-input": {
                  color: theme === "dark" ? "white" : "black",
                },
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-full p-[18px] text-[22px] font-extrabold rounded-[30px] bg-[#9d62f3]"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
