import { getDataFromLocalStorage } from '@/lib/utils';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  if (!getDataFromLocalStorage()) {
    // Redirect to login page
    return <Navigate to="/login" />;
  } else {
    // Render the protected component
    return <Outlet />;
  }
};

export default ProtectedRoute;
