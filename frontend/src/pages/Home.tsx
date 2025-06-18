import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from '../components/SearchBar';
import HomeTitle from '@/components/HomeTitle';
import WorkoutManagementCard from '../components/WorkoutManagementCard';
import CommonGreenHeading from '@/components/CommonGreenHeading';
import { useNavigate } from 'react-router-dom';

interface SearchFilters {
  sportType: string;
  date: string;
  time: string;
  coach: string;
}

import { UserRoleProp } from '../types';

const Home: React.FC<UserRoleProp> = ({ userRole }) => {
  const navigate = useNavigate();
  if (userRole === 'coach') {
    navigate('/dashboard');
  }

  const [currentFilters, setCurrentFilters] = useState<SearchFilters>();

  const handleSearch = (filters: SearchFilters) => {
    setCurrentFilters(filters);
  };

  return (
    <>
      <CommonGreenHeading headingText="Welcome!" />
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 2 },
        }}
      >
        <Box sx={{ py: 0, px: 0 }}>
          <HomeTitle />
          <SearchBar onSearch={handleSearch} />
          {currentFilters && <WorkoutManagementCard filters={currentFilters} />}
        </Box>
      </Container>
    </>
  );
};

export default Home;
