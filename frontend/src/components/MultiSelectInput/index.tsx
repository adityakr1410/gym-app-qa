import React, { useState } from 'react';
import { X } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  valuesArray: string[];
  setSpecialization: React.Dispatch<React.SetStateAction<string[]>>;
  removeSpecialization: (arg: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  type?: string;
  name: string;
  error?: boolean;
}

export const MultiSelectInput: React.FC<InputProps> = ({
  label,
  valuesArray = [],
  setSpecialization,
  removeSpecialization,
  placeholder,
  helperText,
  errorText,
  type = 'text',
  name,
  error = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.trim() && e.key === 'Enter') {
      e.preventDefault();
      setSpecialization((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };
  const handleCrossClick = (itemToRemove: string) => {
    removeSpecialization(itemToRemove);
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
        <div className="px-1 pt-1.5 pb-3">
          <div className="w-full flex gap-1 flex-wrap px-2">
            {valuesArray.map((val) => (
              <div className="py-1 px-1.5 bg-gray-200 rounded-sm flex items-center gap-1">
                <span className="font-light text-sm text-gray-600">{val}</span>
                <button
                  onClick={() => handleCrossClick(val)}
                  className="cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <input
              id="special-input"
              type={type}
              className="flex-auto h-7 px-2 ring-0 border-0 outline-0 font-light placeholder:font-light placeholder:text-gray-400"
              placeholder={placeholder}
              name={name}
              value={inputValue}
              onChange={handleValueChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              {...props}
            />
          </div>
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
