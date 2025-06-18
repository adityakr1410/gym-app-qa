// src/components/WorkoutList.tsx
import React, { useState } from 'react';
import WorkoutCard from '../components/WorkoutCard/WorkoutCard';
import { Workouts as initialWorkouts } from '../mocks/Workouts';
import { Workout } from '../types/Workout';
import { useToast } from '@/hooks/useToast';

import { UserRoleProp } from '../types';
import { useNavigate } from 'react-router-dom';

const WorkoutList: React.FC<UserRoleProp> = ({ userRole }) => {
  const navigate = useNavigate();
  if (userRole === 'admin') {
    navigate('/dashboard');
  }

  const { showToast } = useToast();
  // Manage the workouts array in state
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);

  // When a workout is canceled, update its status in the state to "Canceled"
  const handleCancelWorkout = (workoutId: string) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((w) =>
        w.id === workoutId ? { ...w, status: 'Canceled' } : w
      )
    );
    showToast('success', 'Success', 'Workout canceled successfully');
  };

  // When feedback is confirmed, you can update the workout with feedback details
  const onConfirmFeedback = (workoutId: string, comments: string) => {
    // For example, mark workout as finished or attach feedback
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((w) =>
        w.id === workoutId ? { ...w, status: 'Finished' } : w
      )
    );
    console.log('Feedback comments:', comments);
    showToast('success', 'Success', 'Feedback submitted successfully');
  };

  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workouts.map((workout: Workout, index: number) => (
          <WorkoutCard
            key={index}
            workout={workout}
            onCancelWorkout={() => handleCancelWorkout(workout.id)}
            onResume={() => console.log('Resumed workout')}
            onConfirmFeedback={(comments: string) =>
              onConfirmFeedback(workout.id, comments)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
