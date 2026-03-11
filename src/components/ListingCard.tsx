import React from 'react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
  onClick: () => void;
}

const typeColors = {
  'For Sale': 'bg-emerald-100 text-emerald-700',
  'For Rent': 'bg-blue-100 text-blue-700',
  'Service': 'bg-purple-100 text-purple-700',
};

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left w-full active:scale-[0.98]"
    >
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-32 object-cover"
        />
        <span className={`absolute top-2 right-2 px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[listing.type]}`}>
          {listing.type}
        </span>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-1.5">
          {listing.title}
        </h3>
        <p className="text-violet-600 font-bold text-lg">₹{listing.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
            <span className="text-white text-xs font-medium">{listing.sellerAvatar}</span>
          </div>
          <span className="text-xs text-gray-500 truncate">{listing.seller}</span>
        </div>
      </div>
    </button>
  );
};
