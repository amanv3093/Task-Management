import React from "react";

function AddNewTaskButton() {
  return (
    <div>
      <button className="hidden md:flex AddButton  items-center justify-center   bg-[#9d62f3]  text-4xl">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}

export default AddNewTaskButton;
