import React from 'react';
import { Layout } from '../components/LoginSignupLayout';
import { HeroImage } from '../components/HeroImage';
import { SignupForm } from '../components/SignupForm';
// import { ValidationProvider } from '../components/ValidationContext/ValidationContext';

const Signup: React.FC = () => {
  return (
    <Layout heroImage={<HeroImage />}>
      <SignupForm />
    </Layout>
  );
};

export default Signup;
