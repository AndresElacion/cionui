import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="max-h-screen">
            {/* Hero Section */}
            <div className="mt-24 flex items-center justify-center bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Built for React & Tailwind</span>
                            <span className="block text-indigo-600">Modern UI Components</span>
                        </h1>
                        
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                            Effortlessly customizable, fully accessible UI components. 
                            Copy, paste, and create stunning designs in seconds.
                        </p>
                        
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                            <div className="rounded-md shadow">
                            <Link
                                to="/Components"
                                className="w-full flex items-center justify-center px-8 py-3 border 
                                        border-transparent text-base font-medium rounded-md text-white 
                                        bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                Get started
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="py-12">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to build modern UIs
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {/* Feature 1 */}
                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ready to Use</p>
                            <p className="mt-2 ml-16 text-base text-gray-500">
                            Pre-built components that you can copy and paste directly into your projects.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fully Responsive</p>
                            <p className="mt-2 ml-16 text-base text-gray-500">
                            All components are mobile-first and fully responsive.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative">
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customizable</p>
                            <p className="mt-2 ml-16 text-base text-gray-500">
                            Easy to customize using Tailwind CSS utility classes.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="pt-20 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="https://github.com/AndresElacion/cionui" target="_blank" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; 2024 CION UI. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}