import { RootState } from '@/store/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { toggleMenu } from '@/slices/mobileMenuSlice';
import { getDataFromLocalStorage } from '@/lib/utils';

export const MobileNav = () => {
  const [isMobileNavView, setIsMobileNavView] = useState(false);
  const dispatch = useDispatch();
  const isMobileNav = useSelector(
    (state: RootState) => state.mobileMenu.isVisible
  );
  const location = useLocation();
  const currentPath = location.pathname;

  const mobileMenuRef = useRef<HTMLElement>(null);

  const handleResize = () => {
    setIsMobileNavView(window.innerWidth <= 640); // Adjust 640px as the breakpoint as needed
  };

  const user = getDataFromLocalStorage();
  const role = user?.role;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const hamburgerMenu = document.getElementById('hamburgerMenu');

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !hamburgerMenu?.contains(target)
      ) {
        dispatch(toggleMenu());
      }
    };

    if (isMobileNav && isMobileNavView) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNav, isMobileNavView, dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileNav && isMobileNavView && (
        <nav className="bg-[#f0f0f0] text-white py-3" ref={mobileMenuRef}>
          <ul className="flex flex-col gap-2 justify-center items-center space-y-6">
            {/* Home - visible to everyone except coach */}
            {role !== 'coach' && (
              <li>
                <Link
                  to="/"
                  onClick={() => dispatch(toggleMenu())}
                  className={`text-gray-600 pl-3 ${
                    currentPath === '/' ? 'border-l-4 border-[#9EF300]' : ''
                  } pb-1`}
                >
                  Home
                </Link>
              </li>
            )}

            {/* Coaches - visible to public and clients */}
            {(!role || role === 'client') && (
              <li>
                <Link
                  to="/coaches"
                  onClick={() => dispatch(toggleMenu())}
                  className={`text-gray-600 pl-3 ${
                    currentPath === '/coaches'
                      ? 'border-l-4 border-[#9EF300]'
                      : ''
                  } pb-1`}
                >
                  Coaches
                </Link>
              </li>
            )}

            {/* Workouts - visible to client and coach */}
            {(role === 'client' || role === 'coach') && (
              <li>
                <Link
                  to="/workouts"
                  onClick={() => dispatch(toggleMenu())}
                  className={`text-gray-600 pl-3 ${
                    currentPath === '/workouts'
                      ? 'border-l-4 border-[#9EF300]'
                      : ''
                  } pb-1`}
                >
                  Workouts
                </Link>
              </li>
            )}

            {/* Reports - admin only */}
            {role === 'admin' && (
              <li>
                <Link
                  to="/reports"
                  onClick={() => dispatch(toggleMenu())}
                  className={`text-gray-600 pl-3 ${
                    currentPath === '/reports'
                      ? 'border-l-4 border-[#9EF300]'
                      : ''
                  } pb-1`}
                >
                  Reports
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};
