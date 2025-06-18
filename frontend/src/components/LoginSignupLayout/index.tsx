//for sign up and login page
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  heroImage: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, heroImage }) => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="flex w-full flex-col md:flex-row max-w-screen-2xl mx-auto">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {children}
        </div>
        <div className="hidden w-1/2 md:flex md:w-1/2 justify-center items-center p-4 sm:p-6">
          {heroImage}
        </div>
      </div>
    </div>
  );
};
