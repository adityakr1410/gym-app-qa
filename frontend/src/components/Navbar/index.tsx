import React, { useEffect, useState } from 'react';
import notification from '../../assets/notification.svg';
import profileIcon from '../../assets/profileIcon.svg';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import { OutlinedButton } from '../Button/index';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleDropdown } from '../../slices/userDropdownSlice';
import { DesktopNav } from './DesktopNav';

import { IoMenuOutline } from 'react-icons/io5';
import { toggleMenu } from '../../slices/mobileMenuSlice';

import { getDataFromLocalStorage } from '../../lib/utils';

// some logic to check if the user is logged in
// const isLoggedIn = false;

const NavBar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 640); // Adjust 640px as the breakpoint as needed
  };

  const isUserLoggedIn = (): boolean => {
    const userData = getDataFromLocalStorage();
    return userData ? true : false;
  };

  const user = getDataFromLocalStorage();

  useEffect(() => {
    // Initial check
    handleResize();
    // Attach resize listener for live updates
    window.addEventListener('resize', handleResize);
    // Cleanup the listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Login page redirection
  const handleLoginBtnClick = () => {
    console.log('Logion clicked');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-40">
      {/* Logo */}
      <section className="flex justify-between sm:space-x-15 sm:justify-start w-[80%]">
        <Link to={user?.role === 'coach' ? '/dashboard' : '/'}>
          <figure className="flex gap-2">
            <img src={logo} alt="logo" />
            <figcaption className="text-lg font-bold text-gray-800">
              EnergyX
            </figcaption>
          </figure>
        </Link>

        {/* dekstop nav Links */}
        {!isMobileView && <DesktopNav />}
      </section>
      {/* Icons */}
      {isUserLoggedIn() ? (
        <div className="flex space-x-4 text-gray-600 items-center">
          <figure className="shrink-0">
            <img
              src={notification}
              alt="notification"
              className="cursor-pointer"
            />
          </figure>
          <figure className="shrink-0">
            <img
              src={profileIcon}
              alt="profileIcon"
              id="profileIcon"
              onClick={() => dispatch(toggleDropdown())}
              className="cursor-pointer"
            />
          </figure>
          {isMobileView && (
            <button
              onClick={() => {
                dispatch(toggleMenu());
              }}
              id="hamburgerMenu"
              className="text-3xl"
            >
              <IoMenuOutline />
            </button>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <OutlinedButton
            buttonText="Log In"
            onClick={handleLoginBtnClick}
            styling={`${isMobileView ? 'text-xs w-[75px]' : 'text-3xl'}`}
          />
          {isMobileView && (
            <button
              onClick={() => {
                dispatch(toggleMenu());
              }}
              id="hamburgerMenu"
              className="text-3xl"
            >
              <IoMenuOutline />
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;
