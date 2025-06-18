import { Workout } from '../components/WorkoutPopup';
import jenny from '../assets/Coaches/Jenny.svg';
import kristin from '../assets/Coaches/Kristin.svg';
import mike from '../assets/Coaches/Wade.svg';
import sarah from '../assets/Coaches/Jacob.svg';
import david from '../assets/Coaches/Bessie.svg';

export const mockWorkouts: Workout[] = [
  {
    id: 'w1',
    title: 'Morning Flow Yoga',
    sportType: 'Yoga',
    date: 'July 9',
    time: '10:00 AM',
    duration: '1h',
    coach: {
      name: 'Kristin Watson',
      certification: 'Certified personal yoga trainer',
      avatar: kristin,
      rating: 4.96,
      description:
        'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    },
    availableSlots: [
      { time: '10:30 - 11:30 AM' },
      { time: '3:00 - 4:00 PM' },
      { time: '4:00 - 5:00 PM' },
    ],
    difficulty: 'Beginner',
  },
  {
    id: 'w',
    title: 'Morning Flow Yoga',
    sportType: 'Yoga',
    date: 'July 10',
    time: '10:00 AM',
    duration: '1h',
    coach: {
      name: 'Kristin Watson2',
      certification: 'Certified personal yoga trainer',
      avatar: kristin,
      rating: 4.96,
      description:
        'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    },
    availableSlots: [
      { time: '10:30 - 11:30 AM' },
      { time: '3:00 - 4:00 PM' },
      { time: '4:00 - 5:00 PM' },
    ],
    difficulty: 'Beginner',
  },
  {
    id: 'w2',
    title: 'Evening Yoga',
    sportType: 'Yoga',
    date: 'July 9',
    time: '10:00 AM',
    duration: '1h',
    coach: {
      name: 'Jenny Wilson',
      certification: 'Certified personal yoga trainer',
      avatar: jenny,
      rating: 5.0,
      description:
        'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    },
    availableSlots: [
      { time: '10:30 - 11:30 AM' },
      { time: '3:00 - 4:00 PM' },
      { time: '4:00 - 5:00 PM' },
    ],
    difficulty: 'Intermediate',
  },
  {
    id: 'w3',
    title: 'HIIT Training',
    sportType: 'Fitness',
    date: 'July 10',
    time: '2:00 PM',
    duration: '45m',
    coach: {
      name: 'Mike Johnson',
      certification: 'Certified fitness instructor',
      avatar: mike,
      rating: 4.8,
      description:
        'Specializing in high-intensity workouts that maximize calorie burn and improve cardiovascular health.',
    },
    availableSlots: [
      { time: '11:00 - 11:45 AM' },
      { time: '2:00 - 2:45 PM' },
      { time: '5:30 - 6:15 PM' },
    ],
    difficulty: 'Advanced',
  },
  {
    id: 'w4',
    title: 'Pilates Core',
    sportType: 'Pilates',
    date: 'July 11',
    time: '9:00 AM',
    duration: '1h',
    coach: {
      name: 'Sarah Miller',
      certification: 'Certified Pilates instructor',
      avatar: sarah,
      rating: 4.9,
      description:
        'Focused on building core strength, improving posture, and enhancing flexibility through precise movements.',
    },
    availableSlots: [
      { time: '9:00 - 10:00 AM' },
      { time: '1:00 - 2:00 PM' },
      { time: '6:00 - 7:00 PM' },
    ],
    difficulty: 'Intermediate',
  },
  {
    id: 'w5',
    title: 'Spin Class',
    sportType: 'Cardio',
    date: 'July 12',
    time: '6:00 AM',
    duration: '45m',
    coach: {
      name: 'David Thompson',
      certification: 'Certified spin instructor',
      avatar: david,
      rating: 4.75,
      description:
        'Energetic instructor who pushes clients to reach their cardio goals with upbeat music and motivation.',
    },
    availableSlots: [
      { time: '6:00 - 6:45 AM' },
      { time: '12:00 - 12:45 PM' },
      { time: '5:00 - 5:45 PM' },
    ],
    difficulty: 'Beginner',
  },
];

// You can add more specialized exports like filters or workouts by type
export const yogaWorkouts = mockWorkouts.filter(
  (workout) => workout.sportType === 'Yoga'
);
export const fitnessWorkouts = mockWorkouts.filter(
  (workout) => workout.sportType === 'Fitness'
);

// Helper function to get workouts by coach name
export const getWorkoutsByCoach = (coachName: string) => {
  return mockWorkouts.filter((workout) => workout.coach.name === coachName);
};

// Helper function to get workouts by date
export const getWorkoutsByDate = (date: string) => {
  return mockWorkouts.filter((workout) => workout.date === date);
};

// Helper function to get unique coaches from workouts
export const getAllCoaches = () => {
  const coaches = mockWorkouts.map((workout) => workout.coach);
  // Remove duplicates by using name as a key
  const uniqueCoaches = Array.from(
    new Map(coaches.map((coach) => [coach.name, coach])).values()
  );
  return uniqueCoaches;
};

// Helper function to get unique sport types
export const getAllSportTypes = () => {
  const sportTypes = mockWorkouts.map((workout) => workout.sportType);
  return [...new Set(sportTypes)];
};
