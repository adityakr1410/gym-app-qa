import React from 'react';
import { ButtonProps } from '../../types';

export const SolidButton: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  disabled = false,
  styling = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-3 text-sm rounded-lg text-[#323A3A] bg-[#9EF300] cursor-pointer ${styling}`}
    >
      {buttonText}
    </button>
  );
};
