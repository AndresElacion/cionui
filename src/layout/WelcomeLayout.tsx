import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
export default function WelcomeLayout() {
	return (
		<div>
			{/* Main Nav */}
			<div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
				<div className="flex container max-w-7xl mx-auto items-center justify-between p-4">
					<h1 className="text-lg font-bold">cionui</h1>
					<nav className="space-x-3 flex">
						<Link to="/" className="hover:text-blue-600">
							Home
						</Link>
						<Link to="/Components" className="hover:text-blue-600">
							Components
						</Link>
						
						<ThemeToggle />
					</nav>
				</div>
			</div>

			{/* Sidebar and Content */}
			<div className="flex items-center justify-center">

				{/* Main Content */}
				<div
					className="flex-grow transition-all"
				>
					{/* Outlet for nested routes */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}

