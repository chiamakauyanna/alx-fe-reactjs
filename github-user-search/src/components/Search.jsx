import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-center mt-4'>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search GitHub User"
            className='py-1 rounded-l-lg px-2'
          />
          <button  type="submit" className='bg-blue-500 px-3 py-1 rounded-r-lg text-white'>Search</button>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.name} width="100" />
            <h2>{userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
            </div>
          )}
     </div>
  );
}

export default Search;
