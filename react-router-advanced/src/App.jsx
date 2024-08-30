import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserLogin from './auth/UserLogin';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; 
import UserProfile from './components/BlogPost';
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
        <Route path='/blog/:id' element={<BlogPost />} />
      </Routes>
    </Router>
  );

};
 
export default App;