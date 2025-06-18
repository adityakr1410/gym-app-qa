import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  navigateTo?: string;
  isValid?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}) => {
  const baseClasses = 'py-3 rounded font-medium';
  const variantClasses = {
    primary: 'bg-lime-400 text-black hover:bg-lime-500 cursor-pointer',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      id="login-button"
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
