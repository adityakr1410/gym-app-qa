import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTheme, useMediaQuery } from '@mui/material';
import FailedSearchImage from '../../assets/Illustration.svg';
// import SuccessNotification from '../SuccessNotification';
import { mockWorkouts } from '../../mocks/ManageCoaches';

// Import custom buttons
import { OutlinedButton, SolidButton } from '../Button';
// Import your popup components
import { ConfirmBookingPopup, LoginLogoutPopUp } from '@/components/popUp';

// Import your helper (adjust the import path as needed)
import { getDataFromLocalStorage } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/useToast';
import starIcon from '../../assets/star.svg';

const workoutData = mockWorkouts;

interface SearchFilters {
  sportType: string;
  date: string;
  time: string;
  coach: string;
}

interface WorkoutCardsProps {
  filters: SearchFilters;
}

// Helper function for checking if the user is logged in.
const isUserLoggedIn = (): boolean => {
  const userData = getDataFromLocalStorage();
  return !!userData;
};

const WorkoutManagementCard: React.FC<WorkoutCardsProps> = ({ filters }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Use a local state to track login status (initialized with isUserLoggedIn).
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());
  // const [successNotificationOpen, setSuccessNotificationOpen] = useState(false);

  // Update login status using a callback.
  const checkAuthStatus = useCallback(() => {
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  // Listen for changes to localStorage (from other tabs/components).
  useEffect(() => {
    console.log('Checking auth status...');
    window.addEventListener('storage', checkAuthStatus);
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, [checkAuthStatus]);

  // Example logout handler used elsewhere (e.g., in NavBar) should call checkAuthStatus.
  // For example, a logout function might do:
  // localStorage.removeItem('auth_token');
  // checkAuthStatus();

  // Called when a booking is confirmed from ConfirmBookingPopup.
  const handleConfirmBooking = (workoutTitle: string) => {
    console.log('Booking confirmed for:', workoutTitle);
    // Process the booking (for example, an API call) and then show a success notification.

    navigate('/workouts');

    showToast(
      'success',
      'Success',
      'The new workout has been scheduled successfully.'
    );
  };

  // Called when the user chooses to log in from LoginLogoutPopUp.
  const handleLogin = () => {
    navigate('/login'); // Redirect to login page.
  };

  // Filter workouts based on the provided search filters.
  const filteredWorkouts = workoutData.filter((workout) => {
    const { sportType, date, time, coach } = filters;

    // Only include filters that are not "All" or empty
    const matchSport =
      sportType === 'All' || !sportType || workout.sportType === sportType;
    const matchDate = date === 'All' || !date || workout.date === date;
    const matchTime = time === 'All' || !time || workout.time === time;
    const matchCoach =
      coach === 'All' || !coach || workout.coach.name === coach;

    // Only include workouts that match all provided filters
    return matchSport && matchDate && matchTime && matchCoach;
  });

  if (filteredWorkouts.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6, px: 2 }}>
        <Box sx={{ width: '100%', maxWidth: '120px', margin: '0 auto', mb: 2 }}>
          <img src={FailedSearchImage} alt="No workouts available" />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 500, color: '#333', mb: 1 }}>
          No workouts available
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            fontSize: '1rem',
          }}
        >
          It looks like there are no available slots. Please try refining your
          search.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 300, mb: 3, textTransform: 'uppercase' }}
      >
        Available Workouts
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {filteredWorkouts.map((workout) => {
          // Prepare coach info for the ConfirmBookingPopup.
          const coachInfo = {
            name: workout.coach.name,
            title: workout.coach.certification,
            rating: workout.coach.rating,
            avatarUrl: workout.coach.avatar,
            workoutType: workout.sportType,
            workoutTime: workout.duration,
            workoutDate: `${workout.date}, ${workout.time}`,
          };

          return (
            <Card
              key={workout.id}
              sx={{
                borderRadius: 2,
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                width: {
                  xs: '100%',
                  sm: isTablet ? 'calc(100% - 16px)' : 'calc(50% - 16px)',
                  md: 'calc(50% - 16px)',
                },
                mb: 3,
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    mb: 2,
                  }}
                >
                  {/* Coach Avatar */}
                  <Avatar
                    src={workout.coach.avatar}
                    alt={workout.coach.name}
                    sx={{
                      width: { xs: 60, sm: 80 },
                      height: { xs: 60, sm: 80 },
                      mr: { xs: 0, sm: 2 },
                      mb: { xs: 2, sm: 0 },
                      alignSelf: { xs: 'center', sm: 'flex-start' },
                    }}
                  />
                  {/* Coach Details */}
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: { xs: 'center', sm: 'left' },
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 500 }}
                    >
                      {workout.coach.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      {workout.coach.certification}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5, mt: 1 }}
                    >
                      <span className="flex gap-1 place-self-center min-[600px]:place-self-start">
                        {workout.coach.rating}
                        <img src={starIcon} alt="Star rating" />
                      </span>
                    </Typography>
                  </Box>
                  {/* Booking Details */}
                  <Box
                    sx={{
                      width: { xs: '100%', sm: '180px' },
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <Box sx={{ position: 'relative', mb: 1 }}>
                      <Typography
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: 12,
                          backgroundColor: 'white',
                          px: 0.5,
                          fontSize: '0.75rem',
                          color: 'text.secondary',
                        }}
                      >
                        Booking details
                      </Typography>
                      <Paper
                        variant="outlined"
                        sx={{ borderRadius: 1, borderColor: '#9EF300', p: 1.5 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5,
                          }}
                        >
                          <FitnessCenterIcon
                            sx={{
                              fontSize: 18,
                              mr: 1,
                              color: 'text.secondary',
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            Type: {workout.sportType}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5,
                          }}
                        >
                          <AccessTimeIcon
                            sx={{
                              fontSize: 18,
                              mr: 1,
                              color: 'text.secondary',
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            Time: {workout.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarTodayIcon
                            sx={{
                              fontSize: 18,
                              mr: 1,
                              color: 'text.secondary',
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            Date: {workout.date}, {workout.time}
                          </Typography>
                        </Box>
                      </Paper>
                    </Box>
                  </Box>
                </Box>

                {/* Coach Description */}
                <Typography
                  variant="body2"
                  sx={{ mb: 2, textAlign: { xs: 'center', sm: 'left' } }}
                >
                  {workout.coach.description}
                </Typography>

                {/* Additional Details */}
                <Typography
                  variant="body2"
                  sx={{ mb: 1, textAlign: { xs: 'center', sm: 'left' } }}
                >
                  Also available for this date:
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 3,
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  {workout.availableSlots.map((slot, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: 'rgba(154, 230, 32, 0.2)',
                        borderRadius: 1,
                        px: 2,
                        py: 1,
                      }}
                    >
                      <Typography variant="body2">{slot.time}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    width: '100%',
                  }}
                >
                  {/* Coach Profile Button using OutlinedButton (no action) */}
                  <OutlinedButton
                    buttonText="Coach Profile"
                    onClick={() => {
                      navigate(`/coaches/${workout.coach.name}`);
                    }}
                    styling="w-full md:w-[50%]"
                  />

                  {/* Book Workout Button wrapped with a popup based on login status */}
                  {isLoggedIn ? (
                    <ConfirmBookingPopup
                      trigger={
                        <SolidButton
                          buttonText="Book Workout"
                          onClick={() => {}}
                          styling="w-full md:w-[50%]"
                        />
                      }
                      coach={coachInfo}
                      onConfirm={() => handleConfirmBooking(workout.title)}
                      onCancel={() => {}}
                    />
                  ) : (
                    <LoginLogoutPopUp
                      trigger={
                        <SolidButton
                          buttonText="Book Workout"
                          onClick={() => {}}
                          styling="w-full md:w-[50%]"
                        />
                      }
                      onLogin={handleLogin}
                      onCancel={() => {}}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* <SuccessNotification
        open={successNotificationOpen}
        onClose={() => setSuccessNotificationOpen(false)}
      /> */}
    </Box>
  );
};

export default WorkoutManagementCard;
