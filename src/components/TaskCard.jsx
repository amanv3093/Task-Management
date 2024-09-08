import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { toggleComplete, deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    editTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
            className="input mb-2"
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            className="input mb-2"
          ></textarea>
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
            }
            className="input mb-2"
          />
          <button onClick={handleEdit} className="btn">
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p>{task.description}</p>
          <p className="text-sm">Due: {task.dueDate}</p>
          <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
          <div className="flex justify-between mt-2">
            <button onClick={() => toggleComplete(task.id)} className="btn">
              Toggle Complete
            </button>
            <button onClick={() => setIsEditing(true)} className="btn">
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)} className="btn">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
