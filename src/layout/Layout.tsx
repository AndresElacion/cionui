import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // Determine whether to show the sidebar
  const isHome = location.pathname === "/";

  return (
    <div>
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="flex container max-w-7xl mx-auto items-center justify-between p-4">
          <h1 className="text-lg font-bold">cionui</h1>
          <nav className="space-x-3">
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
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className={`flex pt-16 ${isHome ? "justify-center" : ""}`}>
        {/* Sidebar */}
        {!isHome && (
          <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-800 text-white flex flex-col">
            <nav className="flex-1 mt-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/components"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-700 rounded-md transition"
                  >
                    Buttons
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className={`${isHome ? "max-w-7xl" : "flex-grow ml-64"}`}>
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
