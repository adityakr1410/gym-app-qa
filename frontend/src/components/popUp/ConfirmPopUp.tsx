import React from 'react';
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
import starIcon from '../../assets/star.svg';
import timeIcon from '../../assets/Time.svg';
import calendarIcon from '../../assets/Calendar.svg';

interface CoachInfo {
  name: string;
  title: string;
  rating: number;
  avatarUrl: string;
  workoutType: string;
  workoutTime: string;
  workoutDate: string;
}

interface ConfirmBookingDialogProps {
  trigger: React.ReactNode;
  coach: CoachInfo;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ConfirmBookingPopup = ({
  trigger,
  coach,
  onConfirm,
  onCancel,
}: ConfirmBookingDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Close button at top right inside AlertDialogCancel */}
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
          <AlertDialogTitle>Confirm your booking</AlertDialogTitle>
          <AlertDialogDescription className="font-light text-[#4B5563]">
            Please double-check your workout details.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Coach Details */}
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Coach Info */}
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <img
                src={coach.avatarUrl}
                alt={`Coach ${coach.name}`}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-semibold">{coach.name}</span>
                <span className="text-sm font-light text-[#4B5563]">
                  {coach.title}
                </span>
                <span className="text-sm text-muted-foreground flex gap-1">
                  <p>{coach.rating}</p>
                  <img src={starIcon} alt="Star rating" />
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
              <div className="flex gap-1">
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

        {/* Footer Buttons */}
        <AlertDialogFooter className="w-full">
          <AlertDialogAction asChild>
            <SolidButton
              buttonText="Confirm"
              onClick={onConfirm}
              styling="rounded-lg w-full "
            />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// example usage
// import { SolidButton } from "../components/Button/ButtonExports";
// import billIcon from "../assets/bill.jpg";
// import { ConfirmBookingPopup } from "@/components/popUp/popUpExports";
{
  /* <ConfirmBookingPopup
        trigger={<SolidButton buttonText="Book Kristin" />}
        coach={{
          name: "Kristin Watson",
          title: "Certified personal yoga trainer",
          rating: 4.9,
          avatarUrl: billIcon,
          workoutType: "Yoga",
          workoutTime: "1h",
          workoutDate: "July 9, 10:00 AM",
        }}
        onCancel={() => console.log("Booking canceled.")}
        onConfirm={() => console.log("Booking confirmed!")}
      /> */
}
