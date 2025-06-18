import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { X } from 'lucide-react';
import { SolidButton } from '../Button';
import dumbbellIcon from '../../assets/dumbbell.svg';
import timeIcon from '../../assets/Time.svg';
import calendarIcon from '../../assets/Calendar.svg';

interface CoachInfo {
  name: string;
  title: string;
  avatarUrl: string;
  workoutType: string;
  workoutTime: string;
  workoutDate: string;
}

interface ConfirmBookingDialogProps {
  trigger: React.ReactNode;
  coach: CoachInfo;
  onConfirmFeedback?: (comments: string) => void;
  onCancel?: () => void;
}

export const FeedbackPopup = ({
  trigger,
  coach,
  onConfirmFeedback,
  onCancel,
}: ConfirmBookingDialogProps) => {
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    if (onConfirmFeedback) {
      onConfirmFeedback(comments);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Close button at top right */}
        <AlertDialogCancel
          asChild
          onClick={onCancel}
          className="absolute right-4 top-4 border-none hover:bg-transparent cursor-pointer"
        >
          <button
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </AlertDialogCancel>

        <AlertDialogHeader>
          <AlertDialogTitle>Workout feedback</AlertDialogTitle>
          <AlertDialogDescription className="font-light text-[#4B5563]">
            Please rate the Client's performance below
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Client Details */}
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Client Info */}
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <img
                src={coach.avatarUrl}
                alt={`Client ${coach.name}`}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-semibold">{coach.name}</span>
                <span className="text-sm font-light text-[#4B5563]">
                  {coach.title}
                </span>
              </div>
            </div>

            {/* Workout Details */}
            <div className="mt-2 text-sm text-muted-foreground flex flex-wrap gap-5 sm:gap-1 sm:flex-col -ml-2 justify-center">
              <div className="flex gap-1 items-center">
                <img src={dumbbellIcon} alt="Workout Type" />
                <span className="font-semibold">
                  Type:{' '}
                  <span className="font-light text-[#4B5563]">
                    {coach.workoutType}
                  </span>
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <img src={timeIcon} alt="Workout Time" />
                <span className="font-semibold">
                  Time:{' '}
                  <span className="font-light text-[#4B5563]">
                    {coach.workoutTime}
                  </span>
                </span>
              </div>
              <div className="flex gap-1 ">
                <img src={calendarIcon} alt="Workout Date" />
                <span className="font-semibold">
                  Date:{' '}
                  <span className="font-light text-[#4B5563]">
                    {coach.workoutDate}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Textarea */}
        <div className="mb-4 sm:mb-6">
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Add your comments"
            className="w-full min-h-24 sm:min-h-32 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
            aria-label="Feedback comments"
          />
        </div>

        {/* Footer Buttons */}
        <AlertDialogFooter className="w-full">
          <AlertDialogAction asChild>
            <SolidButton
              buttonText="Submit Feedback"
              onClick={handleSubmit}
              styling="rounded-lg w-full"
            />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// example usage
{
  /* <FeedbackPopup
      trigger={<button>Open Feedback</button>}
      coach={{
        name: 'Johnson Do',
        title: 'Client',
        avatarUrl: im,
        workoutType: 'Yoga',
        workoutTime: '1h',
        workoutDate: 'July 9th, 12:30',
      }}
      onConfirmFeedback={(comments: string) => {
        console.log('Feedback comments:', comments);
        // Process the comments as needed
      }}
      onCancel={() => console.log('Feedback cancelled')}
    /> */
}
