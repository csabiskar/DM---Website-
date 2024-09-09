import { useState, useEffect } from 'react';
import logo from '../assets/fulllogo.png';
import Darklogo from '../assets/dark-logo.png';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Violet Bar */}
        <div className="w-full py-1 bg-gradient-to-r from-[#ee5e2c] via-orange-400 to-orange-600 text-white text-center text-sm">
          Digital marketing is about connecting with people, creating value, and building lasting relationships online.
        </div>
        
        {/* Navbar */}
        <nav className="py-1 backdrop-blur-lg font-semibold bg-white dark:bg-black dark:text-white">
          <div className="container px-4 mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={darkMode ? Darklogo : logo} 
                className="h-12 md:h-16 w-auto object-contain mr-2" 
                alt="Logo" 
              />
            </div>
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode} 
              className="ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.7.7m14.56 14.56l.7.7M4.22 19.78l.7-.7m14.56-14.56l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-9h1m16 0h1M4.22 4.22l.7.7m14.56 14.56l.7.7M4.22 19.78l.7-.7m14.56-14.56l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
