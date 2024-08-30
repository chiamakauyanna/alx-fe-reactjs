import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  
  return (
    <div>
      <h2>User Profile: {userId}</h2>
      {/* Fetch and display user data based on userId */}
    </div>
  );
};

export default UserProfile;
