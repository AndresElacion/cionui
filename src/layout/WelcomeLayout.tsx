import { Link, Outlet } from "react-router-dom";

export default function WelcomeLayout() {
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
			<div className="flex items-center justify-center">

				{/* Main Content */}
				<div
					className="flex-grow max-w-7xl transition-all"
				>
					{/* Outlet for nested routes */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}
