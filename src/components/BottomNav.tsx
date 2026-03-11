import React from 'react';
import { HomeIcon, PlusIcon, HandIcon, UserIcon } from './Icons';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'home' as Screen, label: 'Home', Icon: HomeIcon },
    { id: 'post' as Screen, label: 'Post', Icon: PlusIcon },
    { id: 'requests' as Screen, label: 'Requests', Icon: HandIcon },
    { id: 'profile' as Screen, label: 'Profile', Icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 safe-area-bottom">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = currentScreen === id || 
            (id === 'home' && (currentScreen === 'browse' || currentScreen === 'detail'));
          
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all ${
                isActive 
                  ? 'text-violet-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all ${
                isActive ? 'bg-violet-100' : ''
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-xs mt-1 font-medium ${
                isActive ? 'text-violet-600' : 'text-gray-500'
              }`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
