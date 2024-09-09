import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
function Navbar() {
  let { theme, tasks } = useContext(TaskContext);
  return (
    <header
      className="flex justify-between items-center p-4 sticky top-0 z-10 "
      style={{ background: theme === "light" ? "rgb(246, 248, 250)" : "black" }}
    >
      <NavLink to="/">
        <h1 className="text-xl font-bold text-[#9d62f3]">Task Management</h1>
      </NavLink>

      <div className="flex items-center justify-center text-[10px] gap-5">
        <NavLink to="/TaskListPage" className="hidden md:block">
          <button className="bg-[#f3f2f5] rounded-full py-[3px] px-[11px] relative">
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
              <span className="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-r5cs93"></span>
            </span>
            <span className="text-[##9d62f3]">Tasks</span>
            <span className="text-white bg-amber-300 absolute top-0 py-[4px] px-[6px] rounded-full bg-[#9d62f3] w-[24px] h-[24px] flex items-center justify-center top-[-3px] right-[-13px]">
              {tasks.length}
            </span>
          </button>
          {/* top: 0;
    padding: 4px 6px;
    border-radius: 50%;
    background: #9d62f3;
    color: white; */}
        </NavLink>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
