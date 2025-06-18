import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getDataFromLocalStorage } from '@/lib/utils';

export const DesktopNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const user = getDataFromLocalStorage();
  const role = user?.role;

  return (
    <nav>
      <ul className="flex space-x-6">
        {/* Home (visible to everyone except coach only) */}
        {role !== 'coach' && (
          <li>
            <Link
              to="/"
              className={`text-gray-600 ${currentPath === '/' ? 'border-b-2 border-[#9EF300]' : ''} pb-1`}
            >
              Home
            </Link>
          </li>
        )}

        {/* Coaches (public and clients) */}
        {(!role || role === 'client') && (
          <li>
            <Link
              to="/coaches"
              className={`text-gray-600 ${currentPath === '/coaches' ? 'border-b-2 border-[#9EF300]' : ''} pb-1`}
            >
              Coaches
            </Link>
          </li>
        )}

        {/* Workouts (client + coach) */}
        {(role === 'client' || role === 'coach') && (
          <li>
            <Link
              to="/workouts"
              className={`text-gray-600 ${currentPath === '/workouts' ? 'border-b-2 border-[#9EF300]' : ''} pb-1`}
            >
              Workouts
            </Link>
          </li>
        )}

        {/* Reports (admin only) */}
        {role === 'admin' && (
          <li>
            <Link
              to="/reports"
              className={`text-gray-600 ${currentPath === '/reports' ? 'border-b-2 border-[#9EF300]' : ''} pb-1`}
            >
              Reports
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
