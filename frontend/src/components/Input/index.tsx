import React, { useState } from 'react';
import passwordOff from '../../assets/passwordOff.svg';
import passwordOn from '../../assets/passwordOn.svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  type?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  name: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  helperText,
  errorText,
  type = 'text',
  icon,
  showPasswordToggle = false,
  name,
  error = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <fieldset
        className={`border rounded-md ${error ? 'border-red-500' : 'border-[#DADADA]'} ${!helperText && !errorText ? 'mb-4' : 'mb-0'}`}
      >
        <legend
          className={`block text-sm ${error ? 'text-red-500' : 'text-gray-500'} mb-1 ml-1 px-1 font-light`}
        >
          {label}
        </legend>
        <div className="relative flex item-center h-12">
          <input
            type={inputType}
            className="w-full h-12 px-2 pb-3 ring-0 border-0 outline-0 font-light placeholder:font-light placeholder:text-gray-400"
            placeholder={placeholder}
            name={name}
            {...props}
          />
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-400 pb-3"
            >
              {showPassword ? (
                <img src={passwordOff} alt="Hide password" />
              ) : (
                <img src={passwordOn} alt="Show password" />
              )}
            </button>
          )}
          {!showPasswordToggle && icon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
        </div>
      </fieldset>
      {error && errorText ? (
        <p className="text-xs text-red-500 mt-0 mb-4">{errorText}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500 mt-0 mb-4 font-light">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
