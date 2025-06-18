// WorkoutPopup.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';

// Interfaces
export interface Coach {
  name: string;
  certification: string;
  avatar: string;
  rating: number;
  description: string;
}

export interface Workout {
  id: string;
  title: string;
  sportType: string;
  date: string;
  time: string;
  duration: string;
  coach: Coach;
  availableSlots: {
    time: string;
  }[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface WorkoutPopupProps {
  open: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin?: () => void;
  workout?: Workout;
  onConfirmBooking?: () => void;
}

const WorkoutPopup: React.FC<WorkoutPopupProps> = ({
  open,
  onClose,
  isLoggedIn,
  onLogin,
  workout,
  onConfirmBooking,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 0,
        },
      }}
    >
      <Box sx={{ position: 'relative', p: 3 }}>
        {/* Close button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        {isLoggedIn ? (
          // Confirm Booking Popup
          <>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Confirm your booking
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Please double-check your workout details.
            </Typography>

            {workout && (
              <Box sx={{ display: 'flex', mb: 3 }}>
                {/* Coach image and details on the left */}
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <Avatar
                    src={workout.coach.avatar}
                    alt={workout.coach.name}
                    sx={{ width: 64, height: 64, mr: 2 }}
                  >
                    {workout.coach.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{workout.coach.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {workout.coach.certification}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mr: 0.5 }}
                      >
                        {workout.coach.rating}
                      </Typography>
                      <StarIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                    </Box>
                  </Box>
                </Box>

                {/* Booking details on the right */}
                <Box sx={{ ml: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FitnessCenterIcon
                      sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Type: {workout.sportType}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon
                      sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Time: {workout.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Date: {workout.date}, {workout.time}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              onClick={onConfirmBooking}
              sx={{
                backgroundColor: '#aaff00',
                '&:hover': {
                  backgroundColor: '#9aee00',
                },
                color: '#000',
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 500,
                py: 1.5,
              }}
            >
              Confirm
            </Button>
          </>
        ) : (
          // Not logged in popup
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Log in to book workout
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              You must be logged in to book a workout. Please log in to access
              available slots and book your session.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  borderColor: '#e0e0e0',
                  color: 'text.primary',
                  borderRadius: '6px',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={onLogin}
                sx={{
                  backgroundColor: '#aaff00',
                  '&:hover': {
                    backgroundColor: '#9aee00',
                  },
                  color: '#000',
                  borderRadius: '6px',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Log In
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default WorkoutPopup;
