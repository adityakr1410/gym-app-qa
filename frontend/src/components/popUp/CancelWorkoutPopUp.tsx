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
import { OutlinedButton, SolidButton } from '../Button';

interface CancelWorkoutDialogProps {
  trigger: React.ReactNode;
  onResume?: () => void;
  onCancelWorkout?: () => void;
}

export const CancelWorkoutPopUp = ({
  trigger,
  onResume,
  onCancelWorkout,
}: CancelWorkoutDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Close button at top right as AlertDialogCancel */}
        <AlertDialogCancel
          asChild
          onClick={onResume}
          className="border-none hover:bg-transparent cursor-pointer"
        >
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </AlertDialogCancel>
        <AlertDialogHeader className="space-y-3 pb-3">
          <AlertDialogTitle>Cancel Workout</AlertDialogTitle>
          <AlertDialogDescription className="font-light text-[#4B5563]">
            You’re about to mark this workout as canceled. Are you sure you want
            to cancel this session? Any progress or data from this workout will
            not be saved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <OutlinedButton buttonText="Resume Workout" onClick={onResume} />
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <SolidButton
              buttonText="Cancel Workout"
              onClick={onCancelWorkout}
            />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// example usage
// import { SolidButton } from "../components/Button/ButtonExports";
// import { CancelWorkoutPopUp } from "@/components/popUp/popUpExports";
// <CancelWorkoutPopUp
//         trigger={<SolidButton buttonText="Cancel Workout" />}
//         onResume={() => console.log("Resumed workout")}
//         onCancelWorkout={() => console.log("Workout canceled")}
//       />
