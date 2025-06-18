import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button/LoginButton';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';

interface User {
  email: string;
  password: string;
  firstName: string; // Added firstName field
  lastName: string;
  role?: string;
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // State for email and password input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Clear previous error messages

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      showToast(
        'error',
        'Login Failed',
        'Please enter both email and password.'
      );
      return;
    }

    // Retrieve users from localStorage
    const usersJSON = localStorage.getItem('users');
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];

    // Check if the user's credentials match any user in localStorage
    const matchingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      // Show success toast with user's first name
      showToast(
        'success',
        'Login Successful',
        `Welcome back, ${matchingUser.firstName}!`
      );

      console.log('Login successful! Redirecting to dashboard...');

      // Store login state if needed
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: matchingUser.email,
          firstName: matchingUser.firstName,
          lastName: matchingUser.lastName,
          role: matchingUser.role || 'client',
        })
      );

      // Delay navigation slightly to allow the user to see the toast
      setTimeout(() => {
        navigate('/dashboard'); // Navigate to dashboard
      }, 1500);
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
      showToast(
        'error',
        'Login Failed',
        'Invalid email or password. Please try again.'
      );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Login Form Side */}
      <div className="flex flex-1 flex-col justify-center p-10">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wide font-light">
              WELCOME BACK
            </h2>
            <h1 className="text-2xl font-medium mt-1">
              Log In to Your Account
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="e.g. username@domain.com"
              error={!!errorMessage}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle={true}
              helperText="Enter your password"
              error={!!errorMessage}
            />

            {/* Display error message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <div className="mt-6 mb-4">
              <Button type="submit" fullWidth>
                Log In
              </Button>
            </div>

            <div className="text-center text-sm">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-black uppercase underline"
              >
                CREATE NEW ACCOUNT
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
