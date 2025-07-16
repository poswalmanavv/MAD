import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import { 
  Users, 
  Calendar, 
  Trophy, 
  Mail, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Search,
  Filter,
  Bell,
  TrendingUp,
  Activity,
  FileText,
  Image,
  Send
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'registrations', name: 'Registrations', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'sponsors', name: 'Sponsors', icon: Trophy },
    { id: 'gallery', name: 'Gallery', icon: Upload },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  // Mock data for demonstration
  const stats = [
    { label: 'Total Registrations', value: '1,234', change: '+12%', color: 'bg-gradient-to-r from-blue-500 to-blue-600', icon: Users },
    { label: 'Active Events', value: '8', change: '+2', color: 'bg-gradient-to-r from-green-500 to-green-600', icon: Calendar },
    { label: 'Sponsors', value: '15', change: '+3', color: 'bg-gradient-to-r from-purple-500 to-purple-600', icon: Trophy },
    { label: 'Alumni', value: '2,567', change: '+45', color: 'bg-gradient-to-r from-orange-500 to-orange-600', icon: Users },
  ];

  const recentRegistrations = [
    { id: 1, name: 'Arjun Sharma', email: 'arjun@nitkkr.ac.in', event: 'Confluence 2024', date: '2024-01-15' },
    { id: 2, name: 'Priya Patel', email: 'priya@nitkkr.ac.in', event: 'Dance Competition', date: '2024-01-14' },
    { id: 3, name: 'Rohit Kumar', email: 'rohit@nitkkr.ac.in', event: 'Technical Events', date: '2024-01-13' },
    { id: 4, name: 'Sneha Gupta', email: 'sneha@nitkkr.ac.in', event: 'Art Exhibition', date: '2024-01-12' },
  ];

  const quickActions = [
    { title: 'Add Event', icon: Plus, color: 'bg-blue-500', action: () => alert('Add Event functionality') },
    { title: 'Upload Photos', icon: Upload, color: 'bg-green-500', action: () => alert('Upload Photos functionality') },
    { title: 'Send Newsletter', icon: Mail, color: 'bg-purple-500', action: () => alert('Send Newsletter functionality') },
    { title: 'Export Data', icon: Download, color: 'bg-orange-500', action: () => alert('Export Data functionality') },
    { title: 'Manage Gallery', icon: Image, color: 'bg-pink-500', action: () => alert('Manage Gallery functionality') },
    { title: 'View Analytics', icon: TrendingUp, color: 'bg-indigo-500', action: () => alert('View Analytics functionality') },
  ];

  const recentActivities = [
    { action: 'New registration', user: 'Arjun Sharma', time: '2 minutes ago', type: 'registration' },
    { action: 'Event updated', user: 'Admin', time: '15 minutes ago', type: 'event' },
    { action: 'Photo uploaded', user: 'Priya Patel', time: '1 hour ago', type: 'gallery' },
    { action: 'Sponsor added', user: 'Admin', time: '2 hours ago', type: 'sponsor' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedCard
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            hoverScale={1.05}
            glowEffect={true}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.02}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Registrations</h3>
            <Eye className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentRegistrations.map((registration) => (
              <motion.div 
                key={registration.id} 
                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <p className="font-medium text-gray-900">{registration.name}</p>
                  <p className="text-sm text-gray-600">{registration.email}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {registration.event}
                  </span>
                  <p className="text-xs text-gray-500">{registration.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>

        <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.02}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={action.action}
                className={`flex flex-col items-center justify-center p-4 ${action.color} rounded-xl text-white hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">{action.title}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedCard>

        <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.02}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className={`w-2 h-2 rounded-full mr-3 ${
                  activity.type === 'registration' ? 'bg-blue-500' :
                  activity.type === 'event' ? 'bg-green-500' :
                  activity.type === 'gallery' ? 'bg-purple-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </div>
  );

  const renderRegistrations = () => (
    <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Event Registrations</h3>
          <p className="text-gray-600">Manage all event registrations</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search registrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Download className="w-4 h-4 inline mr-2" />
          Export CSV
          </motion.button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Email</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Event</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentRegistrations.map((registration) => (
              <motion.tr 
                key={registration.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <td className="py-4 px-6 font-medium text-gray-900">{registration.name}</td>
                <td className="py-4 px-6 text-gray-600">{registration.email}</td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {registration.event}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600">{registration.date}</td>
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <motion.button 
                      className="text-blue-600 hover:text-blue-800 p-1 rounded-lg hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="text-green-600 hover:text-green-800 p-1 rounded-lg hover:bg-green-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="text-red-600 hover:text-red-800 p-1 rounded-lg hover:bg-red-50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedCard>
  );

  const renderEvents = () => (
    <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Events Management</h3>
          <p className="text-gray-600">Create and manage club events</p>
        </div>
        <motion.button 
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Create New Event functionality')}
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Event
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Confluence 2024', 'Tech Workshop', 'Cultural Night', 'Alumni Meet'].map((event, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">{event}</h4>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Event description and details...</p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Edit
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedCard>
  );

  const renderSponsors = () => (
    <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Sponsors Management</h3>
          <p className="text-gray-600">Manage sponsor partnerships and agreements</p>
        </div>
        <motion.button 
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Add New Sponsor functionality')}
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Sponsor
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Title Sponsor', 'Gold Sponsors', 'Silver Sponsors', 'Bronze Sponsors'].map((tier, index) => (
          <motion.div
            key={index}
            className="p-4 border-2 border-dashed border-gray-300 rounded-xl text-center hover:border-purple-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => alert(`Manage ${tier} functionality`)}
          >
            <Trophy className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">{tier}</h4>
            <p className="text-sm text-gray-600">{Math.floor(Math.random() * 5) + 1} sponsors</p>
          </motion.div>
        ))}
      </div>
    </AnimatedCard>
  );

  const renderGallery = () => (
    <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Gallery Management</h3>
          <p className="text-gray-600">Upload and organize event photos</p>
        </div>
        <motion.button 
          className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Upload Photos functionality')}
        >
          <Upload className="w-5 h-5 mr-2" />
          Upload Photos
        </motion.button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert('View/Edit Photo functionality')}
          >
            <Image className="w-8 h-8 text-gray-400" />
          </motion.div>
        ))}
      </div>
    </AnimatedCard>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Club Name</label>
            <input type="text" defaultValue="MAD Club" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input type="email" defaultValue="mad.club@nitkkr.ac.in" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <motion.button 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Save Settings functionality')}
          >
            Save Changes
          </motion.button>
        </div>
      </AnimatedCard>

      <AnimatedCard className="bg-white rounded-xl shadow-lg p-6" hoverScale={1.01}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h3>
        <div className="space-y-4">
          {['New Registrations', 'Event Updates', 'Sponsor Inquiries', 'System Alerts'].map((setting, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{setting}</span>
              <motion.button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
                whileTap={{ scale: 0.95 }}
                onClick={() => alert(`Toggle ${setting} functionality`)}
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </motion.button>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'registrations':
        return renderRegistrations();
      case 'events':
        return renderEvents();
      case 'sponsors':
        return renderSponsors();
      case 'gallery':
        return renderGallery();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        {/* Sidebar */}
        <motion.div 
          className="w-64 bg-white shadow-xl border-r border-gray-200"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Admin Portal</h2>
                <p className="text-sm text-gray-600">MAD Club</p>
              </div>
            </div>
            {notifications > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Bell className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-800">{notifications} new notifications</span>
                </div>
              </div>
            )}
          </div>
          <nav className="mt-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-r-4 border-blue-600 font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
                whileHover={{ x: activeTab === tab.id ? 0 : 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className={`w-5 h-5 mr-3 ${activeTab === tab.id ? 'text-blue-600' : ''}`} />
                {tab.name}
              </motion.button>
            ))}
          </nav>
          <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {tabs.find(tab => tab.id === activeTab)?.name}
            </h1>
            <p className="text-lg text-gray-600">
              Manage your MAD Club content and settings
            </p>
          </motion.div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;