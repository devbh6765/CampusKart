import React, { useState } from 'react';
import { ShieldCheckIcon } from './Icons';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email) {
      setError('Please enter your college email');
      return;
    }
    if (!email.includes('.edu') && !email.includes('ac.in')) {
      setError('Please use a valid college email address');
      return;
    }
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex flex-col">
      {/* Header decoration */}
      <div className="h-32 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-b-[3rem]" />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        {/* Logo */}
        <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-6">
          <span className="text-4xl">🛒</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CampusKart</h1>
        <p className="text-gray-500 text-center mb-8">Student-to-Student Marketplace</p>
        
        {/* Login Card */}
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-6 space-y-5">
          <div className="flex items-center gap-3 p-4 bg-violet-50 rounded-2xl">
            <ShieldCheckIcon className="w-6 h-6 text-violet-600 flex-shrink-0" />
            <p className="text-sm text-violet-700">
              Login with college email to access the campus marketplace.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              College Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="yourname@college.edu"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full py-3.5 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl transition-all active:scale-[0.98]"
          >
            Login with College Email
          </button>
          
          <p className="text-xs text-gray-400 text-center">
            Only verified college students can access CampusKart
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-6 text-center">
        <p className="text-xs text-gray-400">Made for students, by students 💜</p>
      </div>
    </div>
  );
};
