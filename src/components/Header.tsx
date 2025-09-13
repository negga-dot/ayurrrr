import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative p-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AyurDiet</h1>
              <p className="text-xs text-green-600 -mt-1">Ayurvedic Nutrition</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/features') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/services') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/pricing') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/about') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/blog') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/contact') ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/patient/login" 
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link 
              to="/dietician/signup" 
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-100">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Home</Link>
            <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Features</Link>
            <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Services</Link>
            <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Pricing</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">About</Link>
            <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Blog</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Contact</Link>
            <div className="pt-4 border-t border-gray-100">
              <Link to="/patient/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">Login</Link>
              <Link to="/dietician/signup" className="block px-4 py-2 text-sm text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md mx-4">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;