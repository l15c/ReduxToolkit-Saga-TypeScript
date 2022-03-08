import * as React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRoute {
  redirectTo: string;

  [key: string]: any;
}

export function PrivateRoute({ children, redirectTo }: PrivateRoute) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
