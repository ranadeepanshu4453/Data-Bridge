import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing the sidebar
  const [isUsersOpen, setIsUsersOpen] = useState(false); // State for managing the Users dropdown
  const [isReportsOpen, setIsReportsOpen] = useState(false); // State for managing the Reports dropdown
  const [isWorkoutsOpen, setIsWorkoutsOpen] = useState(false); // State for managing the Workouts dropdown

  return (
    <div
      className={`bg-white text-black ${
        isCollapsed ? "w-24" : "w-56"
      } h-screen p-2 rounded-sm shadow-md transition-all duration-300 overflow-y-auto`}
    >
      {/* Toggle button to collapse/expand */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-12 mt-2 p-2 rounded-full flex items-center gap-3"
      >
        <svg
          className="w-9 h-9 ml-7 hover:text-purple-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M488.028 207.68L487.354 205.949L422.019 34.7949C420.69 31.4404 418.336 28.5947 415.296 26.6663C412.254 24.7705 408.705 23.8575 405.129 24.0504C401.554 24.2433 398.123 25.5329 395.301 27.7451C392.51 30.0207 390.485 33.1043 389.502 36.5762L345.388 172.054H166.756L122.641 36.5762C121.685 33.0854 119.655 29.9864 116.843 27.72C114.02 25.5078 110.59 24.2182 107.014 24.0253C103.438 23.8324 99.8898 24.7454 96.8475 26.6412C93.8139 28.5774 91.4622 31.4206 90.1241 34.7698L24.6648 205.848L24.015 207.579C14.6098 232.246 13.4489 259.314 20.7073 284.701C27.9656 310.089 43.2498 332.419 64.2553 348.326L64.4803 348.501L65.0801 348.928L164.606 423.742L213.844 461.149L243.837 483.879C247.345 486.553 251.629 488 256.034 488C260.439 488 264.723 486.553 268.231 483.879L298.224 461.149L347.462 423.742L447.588 348.476L447.838 348.276C468.796 332.366 484.045 310.059 491.292 284.706C498.54 259.353 497.394 232.323 488.028 207.68Z"></path>
        </svg>
        <Link to="/dashboard">
          <label className="cursor-pointer ml-3">Dashboard</label>
        </Link>
      </button>

      {/* Menu items */}
      <ul className="space-y-3">
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Users" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => {
            setIsUsersOpen(!isUsersOpen);
            setActiveItem("Users");
          }} className="no-underline text-black">
            <span className="mr-2">📦</span>
            {!isCollapsed && <span >Users</span>}
          </Link>
        </li>
        {isUsersOpen && (
          <ul className="ml-5 space-y-2">
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Members" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/members" onClick={() => setActiveItem("Members")} className="no-underline text-black">
                <span className="mr-2">👥</span>
                {!isCollapsed && <span>Members</span>}
              </Link>
            </li>
            {/* <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Trainers" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/trainers" onClick={() => setActiveItem("Trainers")}>
                <span className="mr-2">🛠️</span>
                {!isCollapsed && <span>Trainers</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Leads" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/leads" onClick={() => setActiveItem("Leads")}>
                <span className="mr-2">⚙️</span>
                {!isCollapsed && <span>Leads</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Deleted Members" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/deleted-members" onClick={() => setActiveItem("Deleted Members")}>
                <span className="mr-2">⚙️</span>
                {!isCollapsed && <span>Deleted Members</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Staff" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/staff" onClick={() => setActiveItem("Staff")}>
                <span className="mr-2">⚙️</span>
                {!isCollapsed && <span>Staff</span>}
              </Link>
            </li>
          </ul>
        )}
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Manage PT" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => setActiveItem("Manage PT")}>
            <span className="mr-2">📝</span>
            {!isCollapsed && <span>Manage PT</span>}
          </Link>
        </li>
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Branches" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => setActiveItem("Branches")}>
            <span className="mr-2">📊</span>
            {!isCollapsed && <span>Branches</span>}
          </Link>
        </li>
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Plans" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => setActiveItem("Plans")}>
            <span className="mr-2">🔤</span>
            {!isCollapsed && <span>Plans</span>}
          </Link>
        </li>
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Reports" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => {
            setIsReportsOpen(!isReportsOpen);
            setActiveItem("Reports");
          }}>
            <span className="mr-2">📈</span>
            {!isCollapsed && <span>Reports</span>}
          </Link>
        </li>
        {isReportsOpen && (
          <ul className="ml-5 space-y-2">
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Upcoming Renewals" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/upcoming-renewals" onClick={() => setActiveItem("Upcoming Renewals")}>
                <span className="mr-2">📅</span>
                {!isCollapsed && <span>Upcoming Renewals</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Expired Plans" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/expired-plans" onClick={() => setActiveItem("Expired Plans")}>
                <span className="mr-2">❌</span>
                {!isCollapsed && <span>Expired Plans</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Transaction Report" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/transaction-report" onClick={() => setActiveItem("Transaction Report")}>
                <span className="mr-2">💳</span>
                {!isCollapsed && <span>Transaction Report</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Remaining Balance" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/remaining-balance" onClick={() => setActiveItem("Remaining Balance")}>
                <span className="mr-2">💰</span>
                {!isCollapsed && <span>Remaining Balance</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Follow Up Leads" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/follow-up-leads" onClick={() => setActiveItem("Follow Up Leads")}>
                <span className="mr-2">🔍</span>
                {!isCollapsed && <span>Follow Up Leads</span>}
              </Link>
            </li> */}
          </ul>
        )}
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "User Pages" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => {
            setIsWorkoutsOpen(!isWorkoutsOpen);
            setActiveItem("User Pages");
          }} className="no-underline text-black">
            <span className="mr-2">👤</span>
            {!isCollapsed && <span>Products</span>}
          </Link>
        </li>
        {isWorkoutsOpen && (
          <ul className="ml-5 space-y-2">
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Plans" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/ViewAssets" onClick={() => setActiveItem("Plans")} className="no-underline text-black">
                <span className="mr-2">📋</span>
                {!isCollapsed && <span>Assets</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Categories" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/workout-categories" onClick={() => setActiveItem("Categories")} className="no-underline text-black">
                <span className="mr-2">📂</span>
                {!isCollapsed && <span>Categories</span>}
              </Link>
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
                activeItem === "Exercises" ? "bg-purple-200" : ""
              }`}
            >
              <Link to="/workout-exercises" onClick={() => setActiveItem("Exercises")} className="no-underline text-black">
                <span className="mr-2">🏋️</span>
                {!isCollapsed && <span>Exercises</span>}
              </Link>
            </li>
            
          </ul>
        )}
         <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "templates" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="" onClick={() => setActiveItem("templates")} className="no-underline text-black">
            <span className="mr-2">📊</span>
            {!isCollapsed && <span>templates</span>}
          </Link>
        </li>
        <li
          className={`flex items-center cursor-pointer hover:bg-purple-100 p-2 rounded ${
            activeItem === "Charts" ? "bg-purple-200" : ""
          }`}
        >
          <Link to="/chart" onClick={() => setActiveItem("Charts")} className="no-underline text-black">
            <span className="mr-2">📊</span>
            {!isCollapsed && <span>Charts</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
