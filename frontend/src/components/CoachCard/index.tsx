// components/CoachCard.tsx
import React from 'react';
import { SolidButton } from '../Button';
import { Coach } from '../../types';
import { Link } from 'react-router-dom';

export const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => {
  const coachRoute = coach.name.split(' ').join('_');

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between items-center relative h-full">
      <img
        src={coach.imageUrl}
        alt={coach.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 w-full flex-grow">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{coach.name}</h3>
            <p className="text-gray-500 text-sm">{coach.role}</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <span className="text-[#4B5563]">{coach.rating}</span> ⭐
          </div>
        </div>
        <div className="text-gray-600 text-sm mt-2">{coach.description}</div>
      </div>
      <Link to={`/coaches/${coachRoute}`} className="w-full px-3 pb-4 ">
        <SolidButton
          buttonText="Book Workout"
          styling="w-full font-semibold hover:bg-[#98e210] transition text-[#323A3A] rounded-md"
        />
      </Link>
    </div>
  );
};
