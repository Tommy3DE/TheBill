import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      logout();
    }
  }, [isLoggedIn, logout]);


  return isLoggedIn ? element : <Navigate to="/login" replace state={{ from: location }} />;
};