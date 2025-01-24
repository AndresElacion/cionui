import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout() {
  // Determine whether to show the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="flex container max-w-7xl mx-auto items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold">
            cionui
          </Link>
          <nav className="space-x-3 hidden lg:flex">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/Components" className="hover:text-blue-600">
              Components
            </Link>

            {/* DarkMode */}
            <ThemeToggle />
          </nav>

          {/* Toggle Button for Mobile */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Toggle Sidebar</span>
            {sidebarOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className="flex pt-14">
        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Floating Sidebar */}
        <div
          className={`fixed bottom-0 left-0 h-2/5 lg:h-screen pt-12 lg:w-64 w-full dark:bg-gray-900 bg-gray-100 border-r
				shadow-lg transform ${
          sidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:transform-none lg:shadow-none`}
        >
          <nav className="flex-1 mt-5">
            <ul className="space-y-2 dark:text-gray-100">
              <li className="lg:hidden">
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Buttons"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Buttons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cards"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Accordions"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Accordions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Tables"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Tables
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Forms"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Forms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Hero"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Hero
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Cta"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  CTA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Nav"
                  className={({ isActive }) => 
                  `flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition ${isActive ? 'bg-gray-800 text-white' : ''}`}
                >
                  Nav
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4 dark:bg-gray-900 bg-gray-100 min-h-screen">
          <Outlet context={{ sidebarOpen }} />
        </div>
      </div>
    </div>
  );
}
