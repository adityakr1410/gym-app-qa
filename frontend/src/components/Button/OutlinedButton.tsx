import React from 'react';
import { ButtonProps } from '../../types';

export const OutlinedButton: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  disabled = false,
  styling = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-3 text-sm rounded-lg bg-white hover:bg-amber-100 text-[#323A3A] cursor-pointer border-[1px] border-[#323232] ${styling}`}
    >
      {buttonText}
    </button>
  );
};
