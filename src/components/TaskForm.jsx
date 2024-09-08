import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return alert("Please fill out all fields.");
    if (new Date(dueDate) < new Date())
      return alert("Due date cannot be in the past.");

    addTask({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <div>
        <TextField
          label="Task title *"
          color="secondary"
          focused
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </div>
      <div className="mt-6">
        <TextField
          label="Task Description *"
          color="secondary"
          focused
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
      </div>
      <div className="my-6">
        <TextField
          label="Task Description *"
          type="date"
          color="secondary"
          focused
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="input "
        />
      </div>
      <button type="submit" className="btn w-full">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
