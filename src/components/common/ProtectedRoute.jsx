import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import useAuthStore from '../../store/authStore';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  // 1. Not Authenticated: Redirect to Login, but remember where they were trying to go
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Role Check: If roles are specified, ensure the user has one of them
  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    // User is logged in but doesn't have permission for this portal
    return <Navigate to="/" replace />;
  }

  // 3. Authorized: Render Child Routes
  return <Outlet />;
};

export default ProtectedRoute;
