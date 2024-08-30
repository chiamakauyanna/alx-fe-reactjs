import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import UserLogin from './auth/UserLogin';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/protectedRoute';


const isLoggedIn = true; // Simulate authentication status

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/userlogin',
    element: <UserLogin />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Profile />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'profile-details',
        element: <ProfileDetails />,
      },
      {
        path: 'profile-settings',
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: '/user/:userId',
    element: <UserProfile />,
  },
]);

const App = () => {
  return (
    <RouterProvider router = { router } />
  );
};
 
export default App;