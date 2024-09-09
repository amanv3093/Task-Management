import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import TaskContext from "../context/TaskContext";

function Footer() {
  let { theme, tasks } = useContext(TaskContext);

  return (
    <footer
      className="flex items-center justify-between px-4 bg-black w-full h-16 fixed bottom-0 z-10"
      style={{ background: theme === "light" ? "rgb(246, 248, 250)" : "black" }}
    >
      <NavLink to="/TaskListPage">
        <button className="rounded-full text-[10px] relative">
          <span className="">
            <svg
              style={{ fill: "#9d62f3" }}
              className=""
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TaskAltIcon"
            >
              <path d="M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"></path>
            </svg>
          </span>
          <span className="text-[#9d62f3]">Tasks</span>
          <span className="text-white bg-amber-300 absolute top-0 py-[2px] px-[4px] rounded-full bg-[#9d62f3] w-[18px] h-[18px] flex items-center justify-center top-[-3px] right-[-10px]">
            {tasks.length}
          </span>
        </button>
      </NavLink>
      <NavLink to="/">
        <button className=" flex items-center justify-center rounded-full p-[3px] bg-[#9d62f3]  text-4xl">
          <span className="material-symbols-outlined text-white">add</span>
        </button>
      </NavLink>
      <a href="https://github.com/amanv3093">
        <i className="fa-brands fa-github text-[#9d62f3] text-2xl"></i>
      </a>
    </footer>
  );
}

export default Footer;
