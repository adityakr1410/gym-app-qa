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

interface LoginToBookDialogProps {
  trigger: React.ReactNode;
  onCancel?: () => void;
  onLogin?: () => void;
}

export const LoginLogoutPopUp = ({
  trigger,
  onCancel,
  onLogin,
}: LoginToBookDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer">
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Close button wrapped with AlertDialogCancel */}
        <AlertDialogCancel
          asChild
          onClick={onCancel}
          className="border-none hover:bg-transparent cursor-pointer "
        >
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </AlertDialogCancel>
        <AlertDialogHeader className="space-y-3 pb-3">
          <AlertDialogTitle>Log in to book workout</AlertDialogTitle>
          <AlertDialogDescription className="font-light text-[#4B5563]">
            You must be logged in to book a workout. Please log in to access
            available slots and book your session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <OutlinedButton buttonText="Cancel" onClick={onCancel} />
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <SolidButton
              buttonText="Log In"
              onClick={onLogin}
              styling="rounded-lg"
            />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// example usage
// import { SolidButton } from "../components/Button/ButtonExports";
// import { ConfirmBookingPopup } from "@/components/popUp/popUpExports";
{
  /* <LoginLogoutPopUp
        trigger={<SolidButton buttonText="Book Workout" />}
        onCancel={() => console.log("Closed login dialog")}
        onLogin={() => console.log("Redirecting to login...")}
      /> */
}
