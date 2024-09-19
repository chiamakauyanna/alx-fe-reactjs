import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = `${username} in:login ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    throw new Error('User not found');
  }
};

export default fetchUserData;