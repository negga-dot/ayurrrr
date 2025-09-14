import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white/80 px-10 py-4 backdrop-blur-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-soft-sage-green">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24,4C12.95,4,4,7.25,4,11.27c0,2.74,4.16,5.12,10.31,6.37C8.16,18.88,4,21.26,4,24c0,2.74,4.16,5.12,10.31,6.37C8.16,31.6,4,33.99,4,36.73,4,40.74,12.95,44,24,44s20-3.26,20-7.27c0-2.74-4.16-5.13-10.31-6.37C39.84,29.12,44,26.74,44,24c0-2.74-4.16-5.12-10.31-6.37C39.84,16.39,44,14.01,44,11.27,44,7.25,35.05,4,24,4Zm0,36c-8.84,0-16-2.24-16-5s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Zm0-12c-8.84,0-16-2.24-16-5s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Zm0-12C15.16,16,8,13.76,8,11s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Z"></path>
            </svg>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">AyurLife</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/features') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/services" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/services') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/pricing') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/about') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-base font-medium leading-normal transition-colors hover:text-soft-sage-green ${
                isActive('/contact') ? 'text-soft-sage-green' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full h-12 px-6 bg-white text-gray-700 text-base font-medium leading-normal tracking-wide shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="material-symbols-outlined mr-2">account_circle</span>
              <span className="truncate">My Account</span>
            </button>
            <Link 
              to="/dietician/signup" 
              className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-soft-sage-green text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="truncate">Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-100 absolute top-full left-0 right-0 bg-white shadow-lg">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Home</Link>
            <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Features</Link>
            <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Services</Link>
            <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Pricing</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">About</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Contact</Link>
            <div className="pt-4 border-t border-gray-100">
              <Link to="/patient/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md">Login</Link>
              <Link to="/dietician/signup" className="block px-4 py-2 text-sm text-white bg-soft-sage-green rounded-md mx-4">Get Started</Link>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;