// SignupForm.tsx
import React, { useState } from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button/LoginButton';
import { Link, useNavigate } from 'react-router-dom';
import { signupSchema, SignupFormData } from '../../schema/SignupSchema';
import { useZodForm } from '../../hooks/useZodForm';
import { useToast } from '../../hooks/useToast';

// Import functions and types from Users.ts
import { addUser, isEmailTaken, isCoachEmail, User } from '../../mocks/Users';

const SignupFormContent: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // Use a single state object for all form fields
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    target: 'Lose weight',
    activity: 'Yoga',
  });

  const { errors, validate, clearError, formSubmitted, setFormSubmitted } =
    useZodForm(signupSchema);

  const [customError, setCustomError] = useState<string | null>(null);

  const handleInputChange = <K extends keyof SignupFormData>(
    field: K,
    value: SignupFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    clearError(field);
    setCustomError(null); // Clear any custom errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const isValid = validate(formData); // Validate the form data using Zod

    if (!isValid) return;

    // Check for duplicate email using `isEmailTaken`
    if (isEmailTaken(formData.email)) {
      setCustomError(
        'Email is already registered. Please try a different one.'
      );
      showToast(
        'error',
        'Registration Failed',
        'Email is already registered. Please try a different one.'
      );
      return;
    }

    try {
      // Determine if the email belongs to a coach
      const userRole = isCoachEmail(formData.email) ? 'coach' : 'client';

      // Add the new user with the appropriate role
      // Remove confirmPassword before saving the user
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...userDataToSave } = formData;
      const newUser: User = { ...userDataToSave, role: userRole };
      addUser(newUser);

      const usersJSON = localStorage.getItem('users');
      const existingUsers = usersJSON ? JSON.parse(usersJSON) : [];
      localStorage.setItem(
        'users',
        JSON.stringify([...existingUsers, newUser])
      );

      // Show success toast with role-specific message
      const successMessage =
        userRole === 'coach'
          ? 'Your coach account has been created successfully!'
          : 'Your account has been created successfully!';

      showToast('success', 'Registration Successful', successMessage);

      console.log(`User data saved to localStorage as ${userRole}:`, newUser);

      // Delay navigation slightly to allow the user to see the toast
      setTimeout(() => {
        navigate('/login');
      }, 1500);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle errors (e.g., email duplicate check failure)
      const errorMessage = error.message || 'An error occurred.';
      setCustomError(errorMessage);
      showToast('error', 'Registration Failed', errorMessage);
    }
  };

  return (
    <div className="h-full flex flex-col justify-evenly">
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-wide">
            LET'S GET YOU STARTED
          </h2>
          <h1 className="text-2xl font-medium mt-1">Create an Account</h1>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <Input
              name="firstName"
              label="First Name"
              placeholder="Enter your First Name"
              helperText="e.g. Jonson"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              error={formSubmitted && !!errors.firstName}
              errorText={errors.firstName}
            />
          </div>
          <div className="flex-1">
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Enter your Last Name"
              helperText="e.g. Doe"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              error={formSubmitted && !!errors.lastName}
              errorText={errors.lastName}
            />
          </div>
        </div>

        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          helperText="e.g. username@service.com"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={(formSubmitted && !!errors.email) || !!customError}
          errorText={errors.email || customError}
        />

        <Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          showPasswordToggle={true}
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          helperText="Must contain 8+ chars, 1 capital, 1 number, 1 special char"
          error={formSubmitted && !!errors.password}
          errorText={errors.password}
        />

        <Input
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          showPasswordToggle={true}
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          helperText="Re-enter your password to confirm"
          error={formSubmitted && !!errors.confirmPassword}
          errorText={errors.confirmPassword}
        />

        <Select
          label="Your target"
          options={[
            'Lose weight',
            'Gain weight',
            'Improve flexibility',
            'General fitness',
            'Build Muscle',
            'Rehabilitation/Recovery',
          ]}
          value={formData.target}
          onChange={(value) => handleInputChange('target', value)}
        />

        <Select
          label="Preferred Activity"
          options={[
            'Yoga',
            'Climbing',
            'Strength training',
            'Cross-fit',
            'Cardio Training',
            'Rehabilitation',
          ]}
          value={formData.activity}
          onChange={(value) => handleInputChange('activity', value)}
        />

        <div className="mt-6 font-medium">
          <Button type="button" fullWidth onClick={handleSubmit}>
            Create An Account
          </Button>
        </div>

        <div className="mt-4 text-center text-sm font-light">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-black uppercase underline"
          >
            LOGIN HERE
          </Link>
        </div>
      </form>
    </div>
  );
};

export const SignupForm: React.FC = () => {
  return <SignupFormContent />;
};

export default SignupForm;
