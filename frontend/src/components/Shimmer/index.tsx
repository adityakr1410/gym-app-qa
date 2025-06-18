// components/ShimmerCard.tsx
import React from 'react';

export const ShimmerCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between items-center relative h-full animate-pulse">
      {/* Shimmer for image */}
      <div className="w-full h-48 bg-gray-200"></div>

      <div className="p-4 flex flex-col gap-2 w-full flex-grow">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            {/* Shimmer for name */}
            <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
            {/* Shimmer for role */}
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          {/* Shimmer for rating */}
          <div className="h-5 bg-gray-200 rounded w-12"></div>
        </div>
        {/* Shimmer for description */}
        <div className="mt-2">
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

      {/* Shimmer for button */}
      <div className="w-full px-3 pb-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};
