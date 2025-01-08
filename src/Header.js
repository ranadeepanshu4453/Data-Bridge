import React from "react";

const Header = () => {
  return (
    <>
    <div></div>
      <nav className="bg-gray-200 text-white p-5 flex flex-col items-start h-screen fixed">
        <div className="mb-4">
          <h3 className="text-3xl font-semibold text-blue-500">LOGO</h3>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Users
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Manage PT
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Branches
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Plans
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Reports
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 p-2 rounded transition no-underline"
          >
            Workouts
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
