import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="profile-details">Profile Details</Link>
        <Link to="profile-settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
};

export default Profile;
