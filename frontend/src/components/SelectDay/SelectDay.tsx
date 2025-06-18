import dropdown from '../../assets/dropdown.svg';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import React, { useEffect, useState, useRef } from 'react';
import { Calendar } from '../Calendar';

type Props = {
  onDateSelect?: (date: Date | 'All') => void;
  defaultDate?: Date | 'All';
};

export const SelectDay: React.FC<Props> = ({ onDateSelect, defaultDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | 'All'>();
  const [month, setMonth] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultDate === 'All') {
      setSelectedDate('All');
    } else if (defaultDate instanceof Date) {
      setSelectedDate(defaultDate);
      setMonth(defaultDate);
    } else {
      const today = new Date();
      setSelectedDate(today);
      setMonth(today);
    }
  }, [defaultDate]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      onDateSelect?.(date);
      setIsOpen(false);
    }
  };

  const displayDate =
    selectedDate && selectedDate !== 'All'
      ? format(selectedDate, 'MMMM d')
      : 'All';

  return (
    <div className="relative inline-block w-full" ref={containerRef}>
      <div className="mb-4 relative">
        <fieldset className="border rounded-md border-[#DADADA]">
          <legend className="block text-sm text-gray-500 mb-1 ml-1 px-1 font-light">
            Date
          </legend>
          <div className="relative flex items-center h-12">
            <button
              type="button"
              className="w-full p-2 pt-0 border-gray-200 rounded bg-white flex justify-between items-center font-light"
              id="date-dropdown-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {displayDate}
              <img
                src={dropdown}
                alt="Dropdown"
                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </fieldset>
      </div>

      {isOpen && (
        <div
          id="calendar-dropdown"
          className="absolute z-50 mt-2 min-w-xs w-full lg:w-sm rounded-lg border border-[#DADADA] bg-white shadow-lg"
        >
          {/* Optional: "All" option to clear the date filter */}
          <button
            onClick={() => {
              setSelectedDate('All');
              onDateSelect?.('All');
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
          >
            All Dates
          </button>
          <Calendar
            selectedDate={selectedDate === 'All' ? undefined : selectedDate}
            onDateChange={handleDateChange}
            month={month}
            showOutsideDays={true}
            onMonthChange={setMonth}
          />
        </div>
      )}
    </div>
  );
};
