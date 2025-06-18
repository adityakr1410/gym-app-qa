import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { ToastProvider } from './hooks/useToast';
import { ToastContainer } from './components/Toast';
import AppLayout from './components/AppLayout';
import CoachList from './pages/CoachList';
import WorkoutList from './pages/WorkoutList';
import CoachDetailPage from './pages/CoachDetails';

import ProtectedRoute from './components/ProtectedRoute';
import Error404 from './pages/Error404';
import { getCurrentUserRole } from './lib/utils';

const AppRoutes: React.FC = () => {
  const role = getCurrentUserRole();

  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home userRole={role} />} />
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="workouts"
                element={<WorkoutList userRole={role} />}
              />
              <Route
                path="/coaches/:coach_name"
                element={<CoachDetailPage userRole={role} />}
              />
            </Route>
            <Route path="coaches" element={<CoachList userRole={role} />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ToastProvider>
  );
};

export default AppRoutes;
