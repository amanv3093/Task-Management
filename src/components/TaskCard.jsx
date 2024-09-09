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
          <div className="task-container p-6 bg-white shadow-lg rounded-lg border border-gray-200 max-w-sm mx-auto">
            <h3 className="font-bold text-xl text-gray-800 mb-2 break-words">
              {task.title}
            </h3>
            <p className="text-gray-600 mb-2 break-words">
              <span className="font-semibold">Description:</span>{" "}
              {task.description}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-semibold">Due:</span> {task.dueDate}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Status:</span>{" "}
              {task.completed ? "Completed" : "Incomplete"}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="btn bg-blue-500 text-white hover:bg-blue-600"
              >
                Toggle Complete
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="btn bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
