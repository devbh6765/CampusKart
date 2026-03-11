import React from 'react';
import { ArrowLeftIcon, SearchIcon } from './Icons';
import { ListingCard } from './ListingCard';
import { mockListings } from '../data/mockData';
import { Category, Listing } from '../types';

interface BrowseScreenProps {
  category: Category | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onBack: () => void;
  onListingSelect: (listing: Listing) => void;
}

export const BrowseScreen: React.FC<BrowseScreenProps> = ({
  category,
  searchQuery,
  onSearchChange,
  onBack,
  onListingSelect,
}) => {
  const filteredListings = mockListings.filter((listing) => {
    const matchesCategory = !category || listing.category === category;
    const matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {category || 'All Listings'}
          </h1>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search in this category..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="px-5 py-4">
        {filteredListings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="text-6xl mb-4">🔍</span>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No listings found</h3>
            <p className="text-gray-500 text-sm text-center">
              Try adjusting your search or check back later
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">
              {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''} found
            </p>
            <div className="grid grid-cols-2 gap-4">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onClick={() => onListingSelect(listing)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
