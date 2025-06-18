import React from 'react';
import { Layout } from '../components/LoginSignupLayout';
import { HeroImage } from '../components/HeroImage';
import { LoginForm } from '../components/Login';

const Login: React.FC = () => {
  // Combine layout with hero image and login form
  return (
    <Layout heroImage={<HeroImage />}>
      <LoginForm />
    </Layout>
  );
};

export default Login;
