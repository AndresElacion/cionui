import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();

  // Determine whether to show the sidebar
  const isHome = location.pathname === "/";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="flex container max-w-7xl mx-auto items-center justify-between p-4">
          <h1 className="text-lg font-bold">cionui</h1>
          <nav className="space-x-3 hidden lg:flex">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/components" className="hover:text-blue-600">
              Components
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
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
      <div className={`flex pt-16 ${isHome ? "justify-center" : ""}`}>
        {/* Sidebar */}
        {!isHome && (
          <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-48 border-r text-gray-800 flex flex-col transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-64"
            } transition-transform lg:translate-x-0`}
          >
            <nav className="flex-1 mt-14">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/Buttons"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 rounded-md transition"
                  >
                    Buttons
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cards"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 rounded-md transition"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Accordions"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 rounded-md transition"
                  >
                    Accordions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Tables"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 rounded-md transition"
                  >
                    Tables
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div
          className={`flex-grow ${
            isHome ? "max-w-7xl" : "ml-0 lg:ml-64"
          } transition-all`}
        >
          {/* Outlet for nested routes */}
          <Outlet context={{ sidebarOpen }} />
        </div>
      </div>
    </div>
  );
}
