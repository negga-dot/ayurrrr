import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Users, Database, Brain, TrendingUp, Shield, 
  Star, ArrowRight, CheckCircle, Play, Download, UserCheck,
  Leaf, Heart, Target, Award
} from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-teal-500 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>India's First Ayurvedic Nutrition Platform</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Ayurveda + Nutrition,{' '}
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Digitally Simplified
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your practice with AI-powered Ayurvedic nutrition planning. 
                  Complete patient management, dosha analysis, and personalized diet charts 
                  backed by ancient wisdom and modern technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/dietician/signup" 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Get Started (Dieticians)</span>
                </Link>
                <Link 
                  to="/patient/signup" 
                  className="flex items-center justify-center space-x-2 bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-medium text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App (Patients)</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Foods Digitized</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Patients Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Dosha Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">AyurDiet Dashboard</h3>
                        <p className="text-sm text-gray-500">Dietician Portal</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Active Patients</p>
                          <p className="text-2xl font-bold text-green-600">24</p>
                        </div>
                        <Users className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Compliance</p>
                          <p className="text-2xl font-bold text-blue-600">89%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-start space-x-3">
                      <Brain className="w-5 h-5 text-purple-500 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">AI Insight</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Patients with Vata imbalance show 23% better results with warm food recommendations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-900">Recent Activity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">Diet plan sent to Priya Sharma</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">New patient consultation scheduled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose AyurDiet?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary features that bridge ancient Ayurvedic wisdom with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Ayurvedic Food Database",
                description: "India's first digital database with 500+ foods mapped with dosha properties, rasa, virya, and vipaka",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Brain,
                title: "AI Diet Personalization",
                description: "Smart algorithms consider prakriti, lifestyle, symptoms, and seasonal variations for perfect meal plans",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Shield,
                title: "Validation Engine",
                description: "Track diet compliance against symptom improvement with scientific validation and insights",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Heart,
                title: "Holistic Care Team",
                description: "Connect with dieticians, yoga trainers, fitness coaches, and homeopathy doctors in one platform",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what dieticians and patients are saying about AyurDiet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "AyurDiet has transformed my practice. The AI recommendations are incredibly accurate, and patients love the personalized approach.",
                name: "Dr. Meera Krishnan",
                title: "Ayurvedic Dietician, Mumbai",
                type: "Dietician"
              },
              {
                quote: "Finally, a platform that understands Ayurveda! The food database is comprehensive and the dosha analysis is spot-on.",
                name: "Dr. Rajesh Gupta",
                title: "BAMS, Delhi",
                type: "Dietician"
              },
              {
                quote: "The app makes it so easy to follow my diet plan. I can see my progress and chat with my dietician anytime. Highly recommend!",
                name: "Priya Sharma",
                title: "Patient, Bangalore",
                type: "Patient"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <div className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                      testimonial.type === 'Dietician' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {testimonial.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Join hundreds of Ayurvedic practitioners who are already using AyurDiet to provide 
            better patient care and grow their practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/dietician/signup" 
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <UserCheck className="w-5 h-5" />
              <span>Start Free Trial</span>
            </Link>
            <Link 
              to="/features" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;