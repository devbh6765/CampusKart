import React from 'react';
import { PlusIcon } from './Icons';
import { mockRequests } from '../data/mockData';
import { Screen } from '../types';

interface RequestsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export const RequestsScreen: React.FC<RequestsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Requests</h1>
            <p className="text-gray-500 mt-1">Students looking for help</p>
          </div>
          <button
            onClick={() => onNavigate('post-request')}
            className="p-3 bg-violet-600 rounded-xl text-white shadow-lg shadow-violet-200"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Requests List */}
      <div className="px-5 py-4 space-y-4">
        {mockRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">{request.requesterAvatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800 truncate">{request.title}</h3>
                  {request.urgent && (
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded-full flex-shrink-0">
                      Urgent
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                  {request.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{request.requester} • {request.postedAt}</span>
                  <button className="text-violet-600 text-sm font-medium">
                    I can help
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
