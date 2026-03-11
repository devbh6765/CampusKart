import React, { useState, useEffect } from 'react';
import { CameraIcon, SparklesIcon, AlertIcon } from './Icons';
import { Category, ListingType } from '../types';
import { priceRanges, restrictedWords } from '../data/mockData';

interface PostListingScreenProps {
  onPost: () => void;
}

export const PostListingScreen: React.FC<PostListingScreenProps> = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>('Books');
  const [type, setType] = useState<ListingType>('For Sale');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 150, max: 600 });

  useEffect(() => {
    setPriceRange(priceRanges[category]);
  }, [category]);

  const checkRestrictedContent = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return restrictedWords.some(word => lowerText.includes(word));
  };

  const handleSubmit = () => {
    if (!title || !price || !description) {
      alert('Please fill in all required fields');
      return;
    }

    if (checkRestrictedContent(title) || checkRestrictedContent(description)) {
      setShowAlert(true);
      return;
    }

    alert('Listing posted successfully! 🎉');
    onPost();
  };

  const categories: Category[] = ['Books', 'Electronics', 'Hostel Essentials', 'Services', 'Rentals'];
  const types: ListingType[] = ['For Sale', 'For Rent', 'Service'];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Post a Listing</h1>
        <p className="text-gray-500 mt-1">Share what you want to sell, rent, or offer</p>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertIcon className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              Not Allowed
            </h3>
            <p className="text-center text-gray-600 mb-6">
              This item is not allowed on the platform. Please review our community guidelines.
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-full py-3 bg-gray-800 text-white font-semibold rounded-xl"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="px-5 py-6 space-y-5">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo
          </label>
          <button className="w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
            <CameraIcon className="w-10 h-10 text-gray-400 mb-2" />
            <span className="text-gray-500 font-medium">Upload Image</span>
            <span className="text-gray-400 text-sm">Tap to add a photo</span>
          </button>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What are you listing?"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type *
          </label>
          <div className="flex gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  type === t
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (₹) *
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
          />
          {/* AI Price Suggestion */}
          <div className="mt-2 p-3 bg-violet-50 rounded-xl flex items-start gap-2">
            <SparklesIcon className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-violet-700">
              <strong>AI-suggested fair student price range:</strong> ₹{priceRange.min} - ₹{priceRange.max}
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your item, condition, and any other details..."
            rows={4}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-violet-200 active:scale-[0.98] transition-transform"
        >
          Post Listing
        </button>
      </div>
    </div>
  );
};
