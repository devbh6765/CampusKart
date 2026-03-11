import React, { useState } from 'react';
import { ArrowLeftIcon, AlertIcon } from './Icons';
import { restrictedWords } from '../data/mockData';

interface PostRequestScreenProps {
  onBack: () => void;
  onPost: () => void;
}

export const PostRequestScreen: React.FC<PostRequestScreenProps> = ({ onBack, onPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgent, setUrgent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const checkRestrictedContent = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return restrictedWords.some(word => lowerText.includes(word));
  };

  const handleSubmit = () => {
    if (!title || !description) {
      alert('Please fill in all required fields');
      return;
    }

    if (checkRestrictedContent(title) || checkRestrictedContent(description)) {
      setShowAlert(true);
      return;
    }

    alert('Request posted successfully! 🎉');
    onPost();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Post a Request</h1>
            <p className="text-gray-500 text-sm">Ask fellow students for help</p>
          </div>
        </div>
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
        {/* Example Requests */}
        <div className="bg-violet-50 rounded-2xl p-4">
          <p className="text-sm font-medium text-violet-800 mb-2">💡 Example requests:</p>
          <ul className="text-sm text-violet-600 space-y-1">
            <li>• "Need calculator for exam tomorrow"</li>
            <li>• "Looking for physics tutor"</li>
            <li>• "Anyone have notes for DSA?"</li>
          </ul>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What do you need? *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g., Need calculator for exam"
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            More details *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain what you're looking for, when you need it, etc..."
            rows={4}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all resize-none"
          />
        </div>

        {/* Urgent Toggle */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
          <div>
            <p className="font-medium text-gray-800">Mark as Urgent</p>
            <p className="text-sm text-gray-500">For time-sensitive requests</p>
          </div>
          <button
            onClick={() => setUrgent(!urgent)}
            className={`w-14 h-8 rounded-full transition-colors relative ${
              urgent ? 'bg-violet-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                urgent ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-violet-200 active:scale-[0.98] transition-transform"
        >
          Post Request
        </button>
      </div>
    </div>
  );
};
