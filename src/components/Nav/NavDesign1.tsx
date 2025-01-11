import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';


const NavDesign1: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const buttonCode = `
    <div className="w-full bg-white dark:bg-gray-800 shadow-md ml-4">
        <div className="flex max-w-7xl mx-auto items-center justify-between p-4">
            <Link to="#" className="text-lg font-bold dark:text-gray-100">Logo</Link>
            <nav className="space-x-3 hidden lg:flex dark:text-gray-100">
                <Link to="#" className="hover:text-blue-600">
                    Home
                </Link>
                <Link to="#" className="hover:text-blue-600">
                    About
                </Link>
                <Link to="#" className="hover:text-blue-600">
                    Contact
                </Link>
            </nav>
        </div>
    </div>
  `;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(buttonCode).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center space-y-3 space-x-4 mt-4">
        <div className="w-full bg-white dark:bg-gray-800 shadow-md ml-4">
			<div className="flex max-w-7xl mx-auto items-center justify-between p-4">
                <Link to="#" className="text-lg font-bold dark:text-gray-100">Logo</Link>
                <nav className="space-x-3 hidden lg:flex dark:text-gray-100">
                    <Link to="#" className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link to="#" className="hover:text-blue-600">
                        About
                    </Link>
                    <Link to="#" className="hover:text-blue-600">
                        Contact
                    </Link>
                </nav>
			</div>
		</div>
      <div className="w-full max-w-5xl p-4 border rounded-md relative">
        {/* Copy Button */}
        <button
          onClick={copyCodeToClipboard}
          className="absolute top-2 right-2 px-2 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          )}
        </button>

        {/* Syntax Highlighter */}
        <SyntaxHighlighter language="tsx" style={nightOwl} className="rounded-md">
          {buttonCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default NavDesign1;