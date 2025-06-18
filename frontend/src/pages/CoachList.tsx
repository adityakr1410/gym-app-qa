// CoachList.tsx
import React, { useState, useEffect } from 'react';
import { Coaches } from '../mocks/Coaches';
import { CoachCard } from '../components/CoachCard';
import { ShimmerCard } from '../components/Shimmer';

import { UserRoleProp } from '../types';
import { useNavigate } from 'react-router-dom';

const CoachList: React.FC<UserRoleProp> = ({ userRole }) => {
  const navigate = useNavigate();
  if (userRole === 'coach' || userRole === 'admin') {
    navigate('/dashboard');
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload all coach images
    const imagePromises = Coaches.map((coach) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = coach.imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // When all images are loaded, set loading to false
    Promise.all(imagePromises)
      .then(() => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.error('Failed to load some images:', error);
        // Still show the content even if some images fail to load
        setLoading(false);
      });
  }, []);

  return (
    <div className="container w-[90%] mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? // Show shimmer cards while loading
            Array(Coaches.length)
              .fill(0)
              .map((_, index) => <ShimmerCard key={index} />)
          : // Show actual coach cards when all images are loaded
            Coaches.map((coach, index) => (
              <CoachCard key={index} coach={coach} />
            ))}
      </div>
    </div>
  );
};

export default CoachList;
