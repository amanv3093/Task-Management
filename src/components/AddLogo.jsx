import React from "react";

function AddLogo() {
  return (
    <div className="mb-4">
      <span className="relative inline-block">
        <div
          className="flex items-center justify-center w-24 h-24 rounded-full bg-[#b624ff]"
          // style="background-color: #b624ff"
        >
          <svg
            className="w-[3rem] h-[5rem] text-white fill-white"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M18 9V7h-2V2.84C14.77 2.3 13.42 2 11.99 2 6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-1.05-.17-2.05-.47-3zm-2.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5M22 3h2v2h-2v2h-2V5h-2V3h2V1h2z"></path>
          </svg>
        </div>

        <span className="absolute bottom-0 right-0 block w-8 h-8 backdrop-blur-xl rounded-full fill-white">
          <div className="flex items-center justify-center w-8 h-8  rounded-full">
            <svg
              className="w-4 h-4 text-gray-700"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
            </svg>
          </div>
        </span>
      </span>
    </div>
  );
}

export default AddLogo;
