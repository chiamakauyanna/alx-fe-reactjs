import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  const searchUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${query}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.REACT_APP_GITHUB_API_KEY}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error('User not found', error);
      setUser(null);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub User"
      />
      <button onClick={searchUser}>Search</button>

      {user && (
        <div>
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
