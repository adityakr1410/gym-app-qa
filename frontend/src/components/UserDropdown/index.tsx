import { RootState } from '../../store/store';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import accountSetting from '../../assets/accountSetting.svg';
import { OutlinedButton } from '../Button';
import { toggleDropdown } from '@/slices/userDropdownSlice';

import { useNavigate } from 'react-router-dom';

import { getDataFromLocalStorage, logoutUser } from '../../lib/utils';

const UserDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const isDropdownVisible = useSelector(
    (state: RootState) => state.userDropdown.isVisible
  );

  const handleLogoutClick = () => {
    logoutUser();
    navigate('/');
    dispatch(toggleDropdown());
  };

  const handleMyAccountClick = () => {
    navigate('/dashboard');
    dispatch(toggleDropdown());
  };

  const user = getDataFromLocalStorage();
  const userFirstName: string =
    user?.firstName?.charAt(0).toUpperCase() + user?.firstName?.slice(1);
  const userLastName: string =
    user?.lastName?.charAt(0).toUpperCase() + user?.lastName?.slice(1);
  const userRole: string =
    user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'Client';

  useEffect(() => {
    function handleClickedOutside(event: MouseEvent) {
      const profileIcon = document.getElementById('profileIcon');
      if (profileIcon && profileIcon.contains(event.target as Node)) {
        return;
      }

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node) &&
        isDropdownVisible
      ) {
        dispatch(toggleDropdown());
      }
    }

    if (isDropdownVisible) {
      window.addEventListener('mousedown', handleClickedOutside);
    }

    return () => {
      if (isDropdownVisible) {
        window.removeEventListener('mousedown', handleClickedOutside);
      }
    };
  }, [isDropdownVisible, dispatch]);

  return (
    <div className="w-full sticky top-15 z-50">
      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          ref={dropDownRef}
          className="absolute right-7 -top-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
        >
          <div className="p-4 border-b text-center">
            <h3 className="text-lg font-semibold">
              {userFirstName} {userLastName} ({userRole})
            </h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
          <button
            className="p-4 flex gap-2 items-center cursor-pointer"
            onClick={handleMyAccountClick}
          >
            <figure>
              <img src={accountSetting} alt="accountSetting" />
            </figure>
            <div>
              <h4 className="font-semibold flex">My Account</h4>
              <p className="text-gray-600 text-sm cursor-pointer transition">
                Edit account profile
              </p>
            </div>
          </button>
          <div className="p-4 w-full" onClick={handleLogoutClick}>
            <OutlinedButton buttonText="Log Out" styling="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
