import React from 'react';
import { LogoutIcon, BookIcon, WrenchIcon, HandIcon } from './Icons';

interface ProfileScreenProps {
  onLogout: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-indigo-600 px-5 pt-12 pb-20 rounded-b-3xl">
        <h1 className="text-white text-xl font-bold mb-8">Profile</h1>
        
        {/* Profile Card */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-violet-600">AS</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Aditya Singh</h2>
            <p className="text-violet-200">aditya@college.edu.in</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-white">🎓</span>
              <span className="text-sm text-violet-200">Verified Student</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-10">
        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Your Activity</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-violet-50 rounded-xl">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <BookIcon className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-xl font-bold text-gray-800">5</p>
              <p className="text-xs text-gray-500">Listings</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <WrenchIcon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xl font-bold text-gray-800">12</p>
              <p className="text-xs text-gray-500">Sold</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <HandIcon className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-xl font-bold text-gray-800">3</p>
              <p className="text-xs text-gray-500">Requests</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">My Listings</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">My Requests</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">Saved Items</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">Messages</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span className="text-gray-800">Settings</span>
            <span className="text-gray-400">→</span>
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full mt-6 py-4 bg-white rounded-2xl shadow-sm flex items-center justify-center gap-2 text-red-600 font-medium hover:bg-red-50 transition-colors"
        >
          <LogoutIcon className="w-5 h-5" />
          Logout
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          CampusKart v1.0 • Made for students 💜
        </p>
      </div>
    </div>
  );
};
