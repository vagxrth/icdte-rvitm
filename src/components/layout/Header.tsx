import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { conferenceInfo } from '../../data/conferenceData';
import NavLink from '../navigation/NavLink';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { name: 'About', href: 'about' },
  { name: 'Call for Papers', href: 'call-for-papers' },
  { name: 'Paper Submission', href: 'paper-submission' },
  { name: 'Important Dates', href: 'important-dates' },
  { name: 'Committees', href: 'committees' },
  { name: 'Registration', href: 'registration' },
  { name: 'Schedule', href: 'schedule' },
  { name: 'Acknowledgement', href: 'acknowledgement' },
  { name: 'Venue', href: 'venue' },
  { name: 'Contact', href: 'contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    return location.pathname === `/${path}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl md:text-2xl font-bold gradient-text">{conferenceInfo.shortTitle}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0.5">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={`px-2 py-2 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="flex justify-between items-center p-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="cursor-pointer"
            >
              <span className="text-xl font-bold gradient-text">{conferenceInfo.shortTitle}</span>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeMenu}
                className={`px-4 py-3 text-xl font-medium rounded-md cursor-pointer transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;