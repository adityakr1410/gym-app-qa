// src/components/WorkoutCard.tsx
import React from 'react';
import { Workout } from '../../types';
import { FaCalendarAlt } from 'react-icons/fa';
import { OutlinedButton } from '../Button';
import { CancelWorkoutPopUp, FeedbackPopup } from '../popUp';
import kristin from '../../assets/Coaches/Kristin.svg';

interface WorkoutCardProps {
  workout: Workout;
  onResume?: () => void;
  onCancelWorkout?: () => void;
  onConfirmFeedback?: (comments: string) => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  onResume,
  onCancelWorkout,
  onConfirmFeedback,
}) => {
  const getBadgeClass = (status: string): string => {
    switch (status) {
      case 'Scheduled':
        return 'bg-[#4EB7FC] text-white';
      case 'Waiting for feedback':
        return 'bg-[#6C6F80] text-white';
      case 'Finished':
        return 'bg-[#FDD63B] text-[#323A3A]';
      case 'Canceled':
        return 'bg-[#FF4242] text-white';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg [box-shadow:0_4px_12px_rgba(0,0,0,0.15)] p-6">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{workout.title}</h3>
        <span
          className={`px-3 py-1 text-sm rounded-full ${getBadgeClass(
            workout.status
          )}`}
        >
          {workout.status}
        </span>
      </div>
      {/* Description */}
      <p className="text-gray-600 mt-4">{workout.description}</p>
      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center text-gray-500 text-sm">
          <FaCalendarAlt className="mr-2" />
          <span>{workout.dateTime}</span>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        {workout.buttonLabel === 'Cancel Workout' &&
        workout.status !== 'Canceled' ? (
          <CancelWorkoutPopUp
            trigger={<OutlinedButton buttonText={workout.buttonLabel} />}
            onResume={onResume}
            onCancelWorkout={onCancelWorkout}
          />
        ) : workout.buttonLabel === 'Leave Feedback' &&
          workout.status !== 'Finished' ? (
          <FeedbackPopup
            trigger={<OutlinedButton buttonText={workout.buttonLabel} />}
            coach={{
              name: 'Johnson Do',
              title: 'Client',
              avatarUrl: kristin,
              workoutType: 'Yoga',
              workoutTime: '1h',
              workoutDate: 'July 9th, 12:30',
            }}
            onConfirmFeedback={onConfirmFeedback}
            onCancel={() => console.log('Feedback cancelled')}
          />
        ) : null}
      </div>
    </div>
  );
};

export default WorkoutCard;
