import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { format, parse } from 'date-fns';
// Import your custom select components
import { Select } from '@/components/Select';
import { SelectDay } from '@/components/SelectDay';
// Import your custom SolidButton
import { SolidButton } from '@/components/Button';

export interface SearchFilters {
  sportType: string;
  date: string;
  time: string;
  coach: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    sportType: 'All',
    date: 'All',
    time: 'All',
    coach: 'All',
  });

  // Try parsing the date from the filters to use as the default date in the calendar.
  let defaultDate: Date;
  try {
    defaultDate = parse(filters.date, 'MMMM d', new Date());
  } catch (error) {
    defaultDate = new Date();
  }

  const handleChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = format(date, 'MMMM d');
    setFilters((prev) => ({
      ...prev,
      date: formattedDate,
    }));
  };

  const handleSubmit = () => {
    onSearch(filters);
  };

  // Generate time options from 8 AM to 3 PM (only whole hours)
  const generateTimeOptions = () => {
    const times: string[] = [];
    times.push('All'); // Add 'All' option at the beginning
    for (let hour = 8; hour <= 15; hour++) {
      const period = hour < 12 ? 'AM' : 'PM';
      const displayHour = hour <= 12 ? hour : hour - 12;
      times.push(`${displayHour}:00 ${period}`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();
  const sportOptions = ['All', 'Yoga', 'Pilates', 'HIIT', 'Strength'];
  const coachOptions = ['All', 'Kristin Watson', 'Sarah', 'Mike'];

  return (
    <Box sx={{ width: '100%', mt: 4, mb: 6 }}>
      <h6
        style={{
          fontWeight: 330,
          fontSize: '1.25rem',
          color: 'black',
          marginBottom: '1rem',
        }}
      >
        BOOK A WORKOUT
      </h6>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          // flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {/* Sport Type Selector */}
        <div className="w-full min-[1140px]:w-[250px] ">
          <Select
            label="Type of sport"
            options={sportOptions}
            value={filters.sportType}
            onChange={(value) => handleChange('sportType', value)}
          />
        </div>

        <div className="w-full min-[1140px]:w-[200px]">
          <SelectDay
            defaultDate={
              filters.date === 'All'
                ? 'All'
                : parse(filters.date, 'MMMM d', new Date())
            }
            onDateSelect={(date) => {
              const formatted = date === 'All' ? 'All' : format(date, 'MMMM d');
              setFilters((prev) => ({
                ...prev,
                date: formatted,
              }));
            }}
          />
        </div>

        <div className="w-full min-[1140px]:w-[200px]">
          <Select
            label="Time"
            options={timeOptions}
            value={filters.time}
            onChange={(value) => handleChange('time', value)}
          />
        </div>

        <div className="w-full min-[1140px]:w-[250px]">
          <Select
            label="Coach"
            options={coachOptions}
            value={filters.coach}
            onChange={(value) => handleChange('coach', value)}
          />
        </div>

        <SolidButton
          buttonText="Find Workout"
          onClick={handleSubmit}
          styling="min-w-[180px] w-full min-[1140px]:w-[22%] h-[64px] text-[16px] font-medium rounded-lg mb-1"
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
