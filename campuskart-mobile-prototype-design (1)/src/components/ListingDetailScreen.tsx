import React from 'react';
import { ArrowLeftIcon, ChatIcon } from './Icons';
import { Listing } from '../types';

interface ListingDetailScreenProps {
  listing: Listing;
  onBack: () => void;
}

const typeColors = {
  'For Sale': 'bg-emerald-100 text-emerald-700',
  'For Rent': 'bg-blue-100 text-blue-700',
  'Service': 'bg-purple-100 text-purple-700',
};

export const ListingDetailScreen: React.FC<ListingDetailScreenProps> = ({
  listing,
  onBack,
}) => {
  const handleMessage = () => {
    alert(`Opening chat with ${listing.seller}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Image Section */}
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-72 object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-12 left-4 p-2 bg-white/90 backdrop-blur rounded-xl shadow-lg"
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
        <span className={`absolute top-12 right-4 px-3 py-1.5 rounded-full text-sm font-medium ${typeColors[listing.type]}`}>
          {listing.type}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 -mt-6">
        <div className="bg-white rounded-3xl shadow-lg p-5">
          {/* Price & Title */}
          <div className="mb-4">
            <p className="text-violet-600 font-bold text-2xl mb-1">₹{listing.price}</p>
            <h1 className="text-xl font-bold text-gray-800">{listing.title}</h1>
            <p className="text-sm text-gray-400 mt-1">Posted {listing.postedAt}</p>
          </div>

          {/* Category Badge */}
          <div className="mb-5">
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {listing.category}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{listing.description}</p>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h2 className="font-semibold text-gray-800 mb-3">Listed by</h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-semibold">{listing.sellerAvatar}</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">{listing.seller}</p>
                <p className="text-sm text-gray-500">Verified Student 🎓</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="mt-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-sm text-amber-700">
            💡 <strong>Safety Tip:</strong> Meet in public campus areas for exchanges. Never share personal banking info.
          </p>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-20 left-0 right-0 px-5 py-3 bg-white border-t border-gray-100">
        <button
          onClick={handleMessage}
          className="w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-violet-200 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <ChatIcon className="w-5 h-5" />
          Message Student
        </button>
      </div>
    </div>
  );
};
