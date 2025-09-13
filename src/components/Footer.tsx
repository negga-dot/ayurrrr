import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AyurDiet</h3>
                <p className="text-sm text-green-300">Ayurvedic Nutrition</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming healthcare with India's first digital Ayurvedic nutrition platform. 
              Ancient wisdom meets modern technology.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">About Us</Link>
              <Link to="/features" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">Features</Link>
              <Link to="/services" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">Services</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">Pricing</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">Blog</Link>
              <Link to="/faq" className="block text-gray-300 hover:text-green-300 transition-colors text-sm">FAQ</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">support@ayurdiet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-300">Download App</h4>
            <p className="text-gray-300 text-sm">Get the AyurDiet mobile app for personalized nutrition tracking</p>
            <div className="space-y-3">
              <button className="flex items-center space-x-3 w-full bg-black/30 hover:bg-black/40 transition-colors rounded-lg p-3">
                <Smartphone className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-medium">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 w-full bg-black/30 hover:bg-black/40 transition-colors rounded-lg p-3">
                <Download className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-medium">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 AyurDiet. All rights reserved. Made with ❤️ for holistic wellness.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-green-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-300 transition-colors">Terms of Service</Link>
            <Link to="/support" className="text-gray-400 hover:text-green-300 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;