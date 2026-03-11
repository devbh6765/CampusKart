import React from 'react';
import { SearchIcon, BookIcon, LaptopIcon, BedIcon, WrenchIcon, ClockIcon, MegaphoneIcon } from './Icons';
import { ListingCard } from './ListingCard';
import { mockListings } from '../data/mockData';
import { Category, Listing, Screen } from '../types';

interface HomeScreenProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategorySelect: (category: Category | 'Requests') => void;
  onListingSelect: (listing: Listing) => void;
  onNavigate: (screen: Screen) => void;
}

const categories = [
  { id: 'Books' as Category, label: 'Books', Icon: BookIcon, color: 'bg-amber-100 text-amber-600' },
  { id: 'Electronics' as Category, label: 'Electronics', Icon: LaptopIcon, color: 'bg-blue-100 text-blue-600' },
  { id: 'Hostel Essentials' as Category, label: 'Hostel', Icon: BedIcon, color: 'bg-green-100 text-green-600' },
  { id: 'Services' as Category, label: 'Services', Icon: WrenchIcon, color: 'bg-purple-100 text-purple-600' },
  { id: 'Rentals' as Category, label: 'Rentals', Icon: ClockIcon, color: 'bg-pink-100 text-pink-600' },
  { id: 'Requests' as const, label: 'Requests', Icon: MegaphoneIcon, color: 'bg-orange-100 text-orange-600' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  searchQuery,
  onSearchChange,
  onCategorySelect,
  onListingSelect,
  onNavigate,
}) => {
  const recentListings = mockListings.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-indigo-600 px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-violet-200 text-sm">Welcome back 👋</p>
            <h1 className="text-white text-xl font-bold">Campus Marketplace</h1>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🎓</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for books, electronics, services..."
            className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300 shadow-lg"
          />
        </div>
      </div>

      <div className="px-5 -mt-2">
        {/* Categories */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map(({ id, label, Icon, color }) => (
              <button
                key={id}
                onClick={() => {
                  if (id === 'Requests') {
                    onNavigate('requests');
                  } else {
                    onCategorySelect(id);
                  }
                }}
                className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-2`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-gray-700">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Listings */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Listings</h2>
            <button 
              onClick={() => onCategorySelect('Books')}
              className="text-violet-600 text-sm font-medium"
            >
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {recentListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onClick={() => onListingSelect(listing)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-2xl p-5 text-white">
          <h3 className="font-semibold mb-3">🎯 Campus Activity</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">156</p>
              <p className="text-xs text-violet-200">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">42</p>
              <p className="text-xs text-violet-200">Open Requests</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">89</p>
              <p className="text-xs text-violet-200">Deals Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
