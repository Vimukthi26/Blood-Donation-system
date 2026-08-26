import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, Droplet, Bell, MapPin, Send, PlusCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('inventory');
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodType: 'O+', location: 'Colombo' },
    { name: 'Jane Smith', bloodType: 'A-', location: 'Kandy' }
  ]);
  const [requests, setRequests] = useState([
    { recipientName: 'Urgent Care', bloodType: 'O+', hospital: 'General Hospital', status: 'Pending' }
  ]);
  const [notification, setNotification] = useState(null);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newDonor = Object.fromEntries(formData);
    setDonors([...donors, newDonor]);
    showNotification('Donor successfully registered!');
    e.target.reset();
  };

  const handleRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRequest = Object.fromEntries(formData);
    setRequests([...requests, { ...newRequest, status: 'Pending' }]);
    showNotification('Blood request submitted!');
    e.target.reset();
  };

  const tabs = [
    { id: 'inventory', label: 'Dashboard', icon: Activity },
    { id: 'register', label: 'New Donor', icon: PlusCircle },
    { id: 'request', label: 'Request Blood', icon: Send },
    { id: 'notifications', label: 'Alerts', icon: Bell }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 font-sans text-slate-200">
      {/* Navbar */}
      <nav className="bg-slate-950/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-red-500">
            <Droplet className="w-8 h-8 fill-current" />
            <h1 className="text-2xl font-bold tracking-tight text-white">BloodConnect</h1>
          </div>
          <div className="hidden md:flex space-x-1 bg-slate-900/50 p-1 rounded-full border border-slate-700">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/50' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-red-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 relative">
        <AnimatePresence mode="wait">
          
          {/* INVENTORY / DASHBOARD */}
          {activeTab === 'inventory' && (
            <motion.div 
              key="inventory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 font-medium">Total Donors</h3>
                    <div className="p-2 bg-red-500/20 text-red-400 rounded-xl"><Users className="w-5 h-5" /></div>
                  </div>
                  <p className="text-4xl font-bold text-white">{donors.length}</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 font-medium">Active Requests</h3>
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl"><Activity className="w-5 h-5" /></div>
                  </div>
                  <p className="text-4xl font-bold text-white">{requests.length}</p>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-red-900 p-6 rounded-3xl shadow-lg shadow-red-900/40 text-white">
                  <h3 className="text-red-200 font-medium mb-1">System Status</h3>
                  <p className="text-2xl font-bold mb-4">Healthy</p>
                  <div className="w-full bg-red-950/50 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-slate-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Donor Roster</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-700">
                        <th className="pb-3 font-medium">Name</th>
                        <th className="pb-3 font-medium">Blood Type</th>
                        <th className="pb-3 font-medium">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donors.map((d, i) => (
                        <tr key={i} className="hover:bg-slate-800/50 transition-colors border-b border-slate-800 last:border-0">
                          <td className="py-4 font-medium flex items-center space-x-3 text-slate-200">
                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-sm font-bold">
                              {d.name.charAt(0)}
                            </div>
                            <span>{d.name}</span>
                          </td>
                          <td className="py-4">
                            <span className="px-3 py-1 rounded-full text-sm font-bold bg-red-500/20 text-red-400 border border-red-500/20">{d.bloodType}</span>
                          </td>
                          <td className="py-4 text-slate-400 flex items-center space-x-1">
                            <MapPin className="w-4 h-4" /> <span>{d.location}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {donors.length === 0 && <p className="text-center text-slate-500 mt-6">No donors found.</p>}
                </div>
              </div>
            </motion.div>
          )}

          {/* REGISTER */}
          {activeTab === 'register' && (
            <motion.div 
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-slate-800">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-red-500/20 text-red-500 rounded-2xl"><Users className="w-6 h-6" /></div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Become a Donor</h2>
                    <p className="text-slate-400 text-sm">Join the community and save lives.</p>
                  </div>
                </div>
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input name="name" type="text" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" required />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Blood Type</label>
                      <select name="bloodType" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all" required>
                        <option value="">Select Type</option>
                        <option value="A+">A+</option><option value="A-">A-</option>
                        <option value="B+">B+</option><option value="B-">B-</option>
                        <option value="O+">O+</option><option value="O-">O-</option>
                        <option value="AB+">AB+</option><option value="AB-">AB-</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">City / Location</label>
                      <input name="location" type="text" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-red-500 hover:-translate-y-1 hover:shadow-red-500/50 transition-all duration-300 active:scale-[0.98] active:translate-y-0">
                    Register Now
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* REQUEST */}
          {activeTab === 'request' && (
            <motion.div 
              key="request"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-slate-800">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl"><Activity className="w-6 h-6" /></div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request Blood</h2>
                    <p className="text-slate-400 text-sm">Submit an urgent request for a patient.</p>
                  </div>
                </div>
                <form onSubmit={handleRequest} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Patient Name</label>
                    <input name="recipientName" type="text" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Blood Type Needed</label>
                      <select name="bloodType" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required>
                        <option value="">Select Type</option>
                        <option value="A+">A+</option><option value="A-">A-</option>
                        <option value="B+">B+</option><option value="B-">B-</option>
                        <option value="O+">O+</option><option value="O-">O-</option>
                        <option value="AB+">AB+</option><option value="AB-">AB-</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Hospital</label>
                      <input name="hospital" type="text" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-500 hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300 active:scale-[0.98] active:translate-y-0">
                    Submit Urgent Request
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <motion.div 
              key="notifications"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <h2 className="text-2xl font-bold mb-6 text-white px-2">Alerts & Matches</h2>
              {requests.map((r, i) => (
                <div key={i} className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-slate-700 border-l-4 border-l-red-500 flex items-start space-x-4">
                  <div className="p-2 bg-red-500/20 rounded-full text-red-500 mt-1">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Match Required: {r.bloodType} Blood</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Patient <strong className="text-slate-200">{r.recipientName}</strong> needs {r.bloodType} blood at <strong className="text-slate-200">{r.hospital}</strong>. 
                      Notifying {donors.filter(d => d.bloodType === r.bloodType).length} eligible donors in the area.
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 text-xs font-bold rounded-full">Status: {r.status}</span>
                  </div>
                </div>
              ))}
              <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-slate-700 border-l-4 border-l-green-500 flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-full text-green-500 mt-1">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">System Online</h4>
                    <p className="text-slate-400 text-sm mt-1">All microservices are operational and responding normally.</p>
                  </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center space-x-3 z-50"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
