import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Lock, Eye, EyeOff, ArrowRight, Heart, Leaf } from 'lucide-react';

const PatientLogin = () => {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AyurDiet</h1>
                <p className="text-sm text-green-600">Patient Portal</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">
              Sign in to access your personalized Ayurvedic diet plan
            </p>
          </div>

          {/* Login Method Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginMethod === 'phone'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Phone</span>
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginMethod === 'email'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </button>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {loginMethod === 'phone' ? (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Smartphone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {loginMethod === 'email' && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {loginMethod === 'email' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span>{loginMethod === 'phone' ? 'Send OTP' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              New patient?{' '}
              <Link to="/patient/signup" className="text-green-600 hover:text-green-500 font-medium">
                Register here
              </Link>
            </p>
          </div>

          {/* Dietician Login Link */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Are you a healthcare professional?</p>
            <Link 
              to="/dietician/login" 
              className="text-sm text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign in to Dietician Portal →
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white space-y-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Your Wellness Journey Awaits</h3>
            <p className="text-xl text-green-100 leading-relaxed max-w-md">
              Access your personalized Ayurvedic diet plans, track your progress, 
              and connect with expert dieticians for holistic health guidance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-green-100">Patient Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-green-100">Health Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-white/5 blur-lg"></div>
      </div>
    </div>
  );
};

export default PatientLogin;