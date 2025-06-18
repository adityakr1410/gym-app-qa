// src/components/Toast/ToastContainer.tsx
import { useToast } from '@/hooks/useToast';
import { X } from 'lucide-react';
import successIcon from '../../assets/Success.svg';
import errorIcon from '../../assets/Error.svg';
import clsx from 'clsx';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed z-50 space-y-3 px-4 sm:px-0 sm:left-1/2 sm:-translate-x-1/2 sm:top-8 bottom-6 sm:bottom-auto right-0 left-0 mx-auto">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            'relative flex items-start gap-3 rounded-xl border px-4 pr-12 py-3 shadow-lg transition-all w-fit mx-auto',
            {
              'bg-[#F3F8E8] border-[#67A300]': toast.type === 'success',
              'bg-[#FEECEC] border-[#D03D0E]': toast.type === 'error',
            }
          )}
        >
          <div className="pt-1">
            {toast.type === 'success' ? (
              <img src={successIcon} alt="Success Icon" />
            ) : (
              //   <CheckCircle className="h-5 w-5 text-green-600" />
              <img src={errorIcon} alt="Error Icon" />
              //   <AlertCircle className="h-5 w-5 text-red-600" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold">{toast.title}</p>
            <p className="text-sm mt-0.5 font-light">{toast.message}</p>
          </div>
          <button
            className="absolute top-3 right-3 text-gray-700 hover:opacity-70 transition cursor-pointer"
            onClick={() => removeToast(toast.id)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

// example usage
// import { useToast } from "@/hooks/useToast";
// import { SolidButton } from "@/components/Button/SolidButton";
// const { showToast } = useToast();

// <SolidButton
//         buttonText="Show Success"
//         onClick={() =>
//           showToast(
//             "success",
//             "Success",
//             "The new workout has been scheduled successfully."
//           )
//         }
//       />
//       <SolidButton
//         buttonText="Show Error"
//         onClick={() =>
//           showToast(
//             "error",
//             "Error",
//             "We’re experiencing technical difficulties. Please try logging in again later."
//           )
//         }
//       />
