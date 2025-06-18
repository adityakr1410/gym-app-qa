import React from 'react';
import underline from '../../assets/underline.svg';
import arrow from '../../assets/arrow.svg';

export default function HomeTitle() {
  return (
    <div className="flex flex-col justify-center items-start py-6 md:py-8 px-4 md:px-0">
      <h1 className="w-full md:w-3/4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
        Achieve your{' '}
        <span className="relative inline-block">
          fitness goals!
          {/* Underline SVG */}
          <img
            src={underline}
            alt="Underline"
            className="absolute left-0 bottom-0 w-[110%] h-auto pointer-events-none hidden sm:block"
            style={{
              transform: 'translateX(23px) translateY(12px) scale(1.2)',
            }}
          />
          {/* Mobile-friendly underline with adjusted position */}
          <img
            src={underline}
            alt="Underline"
            className="absolute left-0 bottom-0 w-[110%] h-auto pointer-events-none sm:hidden"
            style={{
              transform: 'translateX(15px) translateY(8px) scale(1.2)',
            }}
          />
        </span>
      </h1>

      <div className="w-full text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 mt-4 md:mt-6">
        Find a workout and book{' '}
        <span className="relative inline-block">
          today.
          {/* Arrow SVG - Mobile version */}
          <img
            src={arrow}
            alt="Arrow"
            className="absolute -right-12 top-0 w-10 h-auto pointer-events-none sm:hidden"
            style={{ transform: 'translateY(8px)' }}
          />
          {/* Arrow SVG - Tablet version */}
          <img
            src={arrow}
            alt="Arrow"
            className="absolute -right-16 top-0 w-16 h-auto pointer-events-none hidden sm:block md:hidden"
            style={{ transform: 'translateY(8px)' }}
          />
          {/* Arrow SVG - Desktop version */}
          <img
            src={arrow}
            alt="Arrow"
            className="absolute -right-24 top-0 w-20 h-auto pointer-events-none hidden md:block"
            style={{ transform: 'translateY(12px)' }}
          />
        </span>
      </div>
    </div>
  );
}
