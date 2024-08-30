import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserLogin from './auth/UserLogin';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/protectedRoute';


const App = () => {
  const isLoggedIn = false; // Simulate authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/profile" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Profile />
          </ProtectedRoute>
        }>
        </Route>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );

};
 
export default App;