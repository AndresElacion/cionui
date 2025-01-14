import { Link, Outlet } from "react-router-dom";
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
                <Link
                  to="/"
                  className="flex justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Buttons"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  to="/Cards"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/Accordions"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Accordions
                </Link>
              </li>
              <li>
                <Link
                  to="/Tables"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Tables
                </Link>
              </li>
              <li>
                <Link
                  to="/Forms"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  to="/Hero"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Hero
                </Link>
              </li>
              <li>
                <Link
                  to="/Cta"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  CTA
                </Link>
              </li>
              <li>
                <Link
                  to="/Nav"
                  className="flex lg:justify-start justify-center px-4 py-2 text-md hover:bg-gray-800 rounded-md transition"
                >
                  Nav
                </Link>
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
