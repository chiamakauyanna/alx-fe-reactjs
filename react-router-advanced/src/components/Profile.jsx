import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile-details">Profile Details</Link>
          </li>
          <li>
            <Link to="profile-settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="profile-details" element={<ProfileDetails />} />
          <Route path="profile-settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
