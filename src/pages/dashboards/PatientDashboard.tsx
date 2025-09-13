import React, { useState } from 'react';
import { 
  Home, Calendar, TrendingUp, MessageCircle, User, 
  CheckCircle2, Clock, Target, Heart, Apple, 
  Phone, Video, Bell, Settings, LogOut
} from 'lucide-react';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'diet', label: 'Diet Chart', icon: Apple },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const todayMeals = [
    {
      time: '7:00 AM',
      meal: 'Breakfast',
      items: ['Oats porridge with almonds', 'Herbal tea (Tulsi)', 'Fresh fruits (Apple, Pomegranate)'],
      completed: true,
      calories: 320,
      dosha: 'Balances Vata'
    },
    {
      time: '12:30 PM',
      meal: 'Lunch',
      items: ['Brown rice', 'Dal (Moong)', 'Steamed vegetables', 'Buttermilk'],
      completed: true,
      calories: 450,
      dosha: 'Supports Pitta'
    },
    {
      time: '4:00 PM',
      meal: 'Snack',
      items: ['Dates and nuts', 'Ginger tea'],
      completed: false,
      calories: 180,
      dosha: 'Vata balancing'
    },
    {
      time: '7:30 PM',
      meal: 'Dinner',
      items: ['Roti (2)', 'Mixed vegetable curry', 'Raita', 'Warm milk with turmeric'],
      completed: false,
      calories: 380,
      dosha: 'Kapha reducing'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', compliance: 85, symptoms: 3 },
    { day: 'Tue', compliance: 92, symptoms: 2 },
    { day: 'Wed', compliance: 78, symptoms: 4 },
    { day: 'Thu', compliance: 95, symptoms: 1 },
    { day: 'Fri', compliance: 88, symptoms: 2 },
    { day: 'Sat', compliance: 91, symptoms: 1 },
    { day: 'Sun', compliance: 87, symptoms: 2 }
  ];

  const renderHome = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Priya!</h2>
        <p className="text-green-100 mb-4">Your wellness journey continues today</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">Day 15</div>
            <div className="text-green-100 text-sm">Current Plan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">87%</div>
            <div className="text-green-100 text-sm">Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">-3kg</div>
            <div className="text-green-100 text-sm">Progress</div>
          </div>
        </div>
      </div>

      {/* Today's Goals */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-green-600">3/4</span>
          </div>
          <h3 className="font-semibold text-gray-900">Meals Completed</h3>
          <p className="text-sm text-gray-600">1 meal remaining</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold text-red-600">Good</span>
          </div>
          <h3 className="font-semibold text-gray-900">Energy Level</h3>
          <p className="text-sm text-gray-600">Feeling energetic</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">2L</span>
          </div>
          <h3 className="font-semibold text-gray-900">Water Intake</h3>
          <p className="text-sm text-gray-600">Goal: 3L daily</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Bell className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-purple-600">3</span>
          </div>
          <h3 className="font-semibold text-gray-900">Reminders</h3>
          <p className="text-sm text-gray-600">Pending today</p>
        </div>
      </div>

      {/* Daily Ayurvedic Tip */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Ayurvedic Tip</h3>
            <p className="text-gray-700 leading-relaxed">
              Start your morning with warm water and lemon to kindle your digestive fire (Agni). 
              This simple practice helps cleanse the system and prepares your body for the day ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Video className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Schedule Consultation</h3>
              <p className="text-sm text-gray-600">Book video call with Dr. Meera</p>
            </div>
          </div>
        </button>

        <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ask a Question</h3>
              <p className="text-sm text-gray-600">Chat with your dietician</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );

  const renderDietChart = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Today's Diet Chart</h2>
        <div className="text-sm text-gray-600">
          <Calendar className="w-4 h-4 inline mr-1" />
          January 15, 2025
        </div>
      </div>

      <div className="space-y-6">
        {todayMeals.map((meal, index) => (
          <div key={index} className={`bg-white rounded-xl shadow-lg border-l-4 overflow-hidden ${
            meal.completed ? 'border-green-500' : 'border-gray-300'
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    meal.completed ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {meal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{meal.meal}</h3>
                    <p className="text-sm text-gray-600">{meal.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">{meal.calories} cal</div>
                  <div className="text-sm text-green-600">{meal.dosha}</div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {meal.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {!meal.completed && (
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all">
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>

      {/* Weekly Overview */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Diet Compliance</h3>
          <div className="space-y-3">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{day.day}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                      style={{ width: `${day.compliance}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-10">{day.compliance}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Symptom Improvement</h3>
          <div className="space-y-3">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{day.day}</span>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < day.symptoms ? 'bg-red-400' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{day.symptoms}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">-3kg</div>
          <p className="text-gray-600">Weight Loss</p>
          <p className="text-sm text-gray-500 mt-2">In last 2 weeks</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">+2</div>
          <p className="text-gray-600">Energy Level</p>
          <p className="text-sm text-gray-500 mt-2">Scale improvement</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
          <p className="text-gray-600">Sleep Quality</p>
          <p className="text-sm text-gray-500 mt-2">Average score</p>
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Chat with Experts</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: 'Dr. Meera Sharma', role: 'Ayurvedic Dietician', online: true, lastSeen: 'Active now' },
          { name: 'Yoga Instructor Raj', role: 'Certified Yoga Trainer', online: false, lastSeen: '2 hours ago' },
          { name: 'Dr. Kumar', role: 'Fitness Coach', online: true, lastSeen: 'Active now' },
          { name: 'Dr. Priya', role: 'Homeopathy Doctor', online: false, lastSeen: '1 day ago' }
        ].map((expert, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {expert.name.charAt(0)}
                    </span>
                  </div>
                  {expert.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-sm text-gray-600">{expert.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{expert.lastSeen}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors">
                <Video className="w-4 h-4" />
                <span>Video</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" value="Priya Sharma" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value="priya@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" value="+91 9876543210" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dosha Constitution</label>
              <input type="text" value="Vata-Pitta" disabled className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Health Goal</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>Weight Management</option>
                <option>Digestive Health</option>
                <option>Energy Boost</option>
                <option>General Wellness</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Restrictions</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows={3} 
                placeholder="Any food allergies or restrictions..."></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            'Meal reminders',
            'Medication alerts', 
            'Appointment notifications',
            'Progress updates',
            'Health tips'
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{item}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return renderHome();
      case 'diet': return renderDietChart();
      case 'progress': return renderProgress();
      case 'chat': return renderChat();
      case 'profile': return renderProfile();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AyurDiet</h2>
              <p className="text-sm text-green-600">Patient Portal</p>
            </div>
          </div>
        </div>

        <nav className="p-6 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default PatientDashboard;