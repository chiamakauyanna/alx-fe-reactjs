import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; 

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth(); // Get the auth state

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/userlogin" />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
