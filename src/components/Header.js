// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    'Phones',
    'Earbuds',
    'Watches & Trackers',
    'Accessories',
    'Offers',
    'Support'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                alt="Google Logo"
                className="h-8 w-8 mr-2"
              />
              <ul className="flex space-x-4">
                {navigationItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-google-blue">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-google-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;