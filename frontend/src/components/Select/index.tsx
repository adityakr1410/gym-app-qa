import React, { useState, useEffect, useRef } from 'react';
import dropdown from '../../assets/dropdown.svg';
import checkMark from '../../assets/checkMark.svg';

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <fieldset className="border rounded-md border-[#DADADA]">
        <legend className="block text-sm text-gray-500 mb-1 ml-1 px-1 font-light">
          {label}
        </legend>
        <div className="relative flex items-center h-12">
          {/* Selected Option Button - Added font-light class */}
          <button
            type="button"
            className="w-full p-2 pt-0 border-gray-200 rounded bg-white flex justify-between items-center font-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {value || 'Select an option'}
            {/* Added transform and transition classes for smooth rotation */}
            <img
              src={dropdown}
              alt="Dropdown"
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown List */}
          {isOpen && (
            <ul className="absolute left-0 top-full w-full font-light bg-white border border-gray-200 rounded shadow-lg mt-2 z-20">
              {options.map((option) => (
                <li
                  key={option}
                  className="p-2 cursor-pointer hover:bg-[#F6FFE5] transition flex justify-between items-center"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  <span>{option}</span>
                  {/* Show checkmark for the selected option */}
                  {option === value && (
                    <img src={checkMark} alt="Selected" className="w-4 h-4" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </fieldset>
    </div>
  );
};
