import React, { useState } from 'react';
import { 
  Home, Users, FileText, Database, BarChart3, 
  Calendar, CreditCard, Settings, Plus, Search,
  Bell, User, LogOut, Brain, TrendingUp, Target,
  MessageCircle, Video, CheckCircle, AlertCircle
} from 'lucide-react';

const DieticianDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'diet-plans', label: 'Diet Plans', icon: FileText },
    { id: 'food-db', label: 'Food Database', icon: Database },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  const recentPatients = [
    { id: 1, name: 'Priya Sharma', age: 32, condition: 'Weight Management', lastVisit: '2 days ago', compliance: 87, status: 'active' },
    { id: 2, name: 'Rajesh Kumar', age: 45, condition: 'Diabetes', lastVisit: '1 week ago', compliance: 92, status: 'active' },
    { id: 3, name: 'Meera Patel', age: 28, condition: 'Digestive Issues', lastVisit: '3 days ago', compliance: 78, status: 'needs-attention' },
    { id: 4, name: 'Arjun Singh', age: 38, condition: 'Hypertension', lastVisit: '5 days ago', compliance: 95, status: 'active' }
  ];

  const todayAppointments = [
    { time: '10:00 AM', patient: 'Priya Sharma', type: 'Follow-up', duration: '30 min' },
    { time: '11:30 AM', patient: 'New Patient', type: 'Initial Consultation', duration: '60 min' },
    { time: '2:00 PM', patient: 'Rajesh Kumar', type: 'Diet Review', duration: '30 min' },
    { time: '3:30 PM', patient: 'Meera Patel', type: 'Progress Check', duration: '30 min' }
  ];

  const aiInsights = [
    {
      type: 'success',
      title: 'Improved Compliance',
      message: 'Patients with Vata imbalance show 23% better results with warm food recommendations.',
      action: 'View Details'
    },
    {
      type: 'warning',
      title: 'Attention Needed',
      message: '3 patients have missed their meal schedules for 2+ days. Consider follow-up.',
      action: 'Review Patients'
    },
    {
      type: 'info',
      title: 'Seasonal Adjustment',
      message: 'Winter season approaching - consider updating diet plans with warming foods.',
      action: 'Update Plans'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Good morning, Dr. Meera!</h2>
            <p className="text-blue-100 mb-4">You have 4 appointments today and 2 pending diet plans to review.</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">24</div>
            <div className="text-blue-100 text-sm">Active Patients</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">24</span>
          </div>
          <h3 className="font-semibold text-gray-900">Active Patients</h3>
          <p className="text-sm text-gray-600">+3 this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-green-600">89%</span>
          </div>
          <h3 className="font-semibold text-gray-900">Avg Compliance</h3>
          <p className="text-sm text-gray-600">+5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-purple-600">67%</span>
          </div>
          <h3 className="font-semibold text-gray-900">Symptom Improvement</h3>
          <p className="text-sm text-gray-600">Average across patients</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-600">4</span>
          </div>
          <h3 className="font-semibold text-gray-900">Today's Appointments</h3>
          <p className="text-sm text-gray-600">Next at 10:00 AM</p>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-900">AI Insights</h3>
        </div>
        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              insight.type === 'success' ? 'bg-green-50 border-green-500' :
              insight.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
              'bg-blue-50 border-blue-500'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                  <p className="text-gray-700 text-sm">{insight.message}</p>
                </div>
                <button className={`text-sm font-medium px-3 py-1 rounded-full ${
                  insight.type === 'success' ? 'text-green-700 bg-green-100 hover:bg-green-200' :
                  insight.type === 'warning' ? 'text-yellow-700 bg-yellow-100 hover:bg-yellow-200' :
                  'text-blue-700 bg-blue-100 hover:bg-blue-200'
                } transition-colors`}>
                  {insight.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Schedule & Recent Patients */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Today's Schedule</h3>
            <button className="text-blue-600 hover:text-blue-500 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900">{appointment.time}</div>
                    <div className="text-xs text-gray-500">{appointment.duration}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Patients</h3>
            <button className="text-blue-600 hover:text-blue-500 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {patient.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{patient.name}</h4>
                    <p className="text-sm text-gray-600">{patient.condition} • Age {patient.age}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patient.status === 'active' ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {patient.compliance}%
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{patient.lastVisit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Conditions</option>
            <option>Weight Management</option>
            <option>Diabetes</option>
            <option>Digestive Issues</option>
            <option>Hypertension</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Status</option>
            <option>Active</option>
            <option>Needs Attention</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">Age {patient.age}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.condition}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                          style={{ width: `${patient.compliance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{patient.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status === 'active' ? 'Active' : 'Needs Attention'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      <button className="text-green-600 hover:text-green-900">Edit</button>
                      <button className="text-purple-600 hover:text-purple-900">Diet Plan</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'patients': return renderPatients();
      case 'diet-plans': return <div className="text-center py-20 text-gray-500">Diet Plans module coming soon...</div>;
      case 'food-db': return <div className="text-center py-20 text-gray-500">Food Database module coming soon...</div>;
      case 'analytics': return <div className="text-center py-20 text-gray-500">Analytics module coming soon...</div>;
      case 'appointments': return <div className="text-center py-20 text-gray-500">Appointments module coming soon...</div>;
      case 'billing': return <div className="text-center py-20 text-gray-500">Billing module coming soon...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AyurDiet</h2>
              <p className="text-sm text-blue-600">Dietician Portal</p>
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
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
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
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 capitalize">
                {activeTab.replace('-', ' ')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dr. Meera Sharma</p>
                  <p className="text-xs text-gray-500">Ayurvedic Dietician</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DieticianDashboard;