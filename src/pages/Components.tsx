import { Link } from "react-router-dom";
import SEO from '../components/SEO';

export default function Components() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <SEO 
                title="Components | CIONUI" 
                description="A collection of pre-built React components using Tailwind CSS. Copy, paste, and customize." 
                keywords="react, laravel, tailwindcss, design system, components"
            />
            {/* Introduction Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-indigo-500 mb-4">
                    Getting Started with CION/UI
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A collection of pre-built React components using Tailwind CSS. Copy, paste, and customize.
                </p>
            </div>

            {/* Quick Start Steps */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-indigo-500 text-2xl font-bold mb-2">01</div>
                    <h3 className="font-semibold text-lg dark:text-gray-100 mb-2">Install Dependencies</h3>
                    <div className="bg-gray-50 p-3 rounded-md">
                        <code className="text-sm text-gray-800">
                            npm create vite@latest
                        </code>
                    </div>
                </div>
                
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-indigo-500 text-2xl font-bold mb-2">02</div>
                    <h3 className="font-semibold text-lg dark:text-gray-100 mb-2">Install Dependencies</h3>
                    <div className="bg-gray-50 p-3 rounded-md">
                        <code className="text-sm text-gray-800 hover:text-indigo-500">
                            <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank">Install Tailwind CSS</a>
                        </code>
                    </div>
                </div>

                <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-indigo-500 text-2xl font-bold mb-2">03</div>
                    <h3 className="font-semibold text-lg dark:text-gray-100 mb-2">Browse Components</h3>
                    <p className="text-gray-600 dark:text-gray-100">
                        Explore our collection of components in the sidebar
                    </p>
                </div>

                <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-indigo-500 text-2xl font-bold mb-2">04</div>
                    <h3 className="font-semibold text-lg dark:text-gray-100 mb-2">Copy & Customize</h3>
                    <p className="text-gray-600 dark:text-gray-100">
                        Simply copy the component code and customize using Tailwind classes
                    </p>
                </div>
            </div>

            {/* Component Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Buttons', 'Forms', 'Cards', 'Accordions', 'Tables', 'Hero', 'Cta', 'Nav'].map((category) => (
                    <Link
                        key={category}
                        to={`/${category}`}
                        className="p-6 border rounded-lg hover:border-indigo-500 transition-colors group"
                    >
                        <h3 className="font-semibold text-lg mb-2 dark:text-gray-100 group-hover:text-indigo-600">
                            {category}
                        </h3>
                        <p className="text-gray-600">
                            Browse our collection of {category}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}