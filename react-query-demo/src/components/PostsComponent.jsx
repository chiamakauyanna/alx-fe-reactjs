import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

// Define a fetch function that can be used to fetch data from an API
async function fetchPosts(){
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
  return data
}
const PostsComponent = () => {
  // Use the useQuery hook with additional options for data fetching and caching
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', // Query key
    fetchPosts, // Fetch function
    {
      cacheTime: 1000 * 60 * 10, // Cache time (10 minutes)
      staleTime: 1000 * 60 * 5, // Stale time (5 minutes)
      refetchOnWindowFocus: false, // Do not refetch on window focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );
  
  // Handle loading state
    if (isLoading){
      return <div>Loading...</div>;
    } 
    // Handle error state
    if (isError){
      return <div>Error! {error.message}</div>;
    } 
    // Render the fetched data
    return (
        <div>
          <h1>Posts</h1>
           <button onClick={() => refetch()}>Refetch Data</button>
            <ul>
              {data.map((post, index) => {
                return (
                <li key={index}>
                  <h3>{post.title}</h3>
                  <p style={{color: 'red'}}>{post.body}</p>
                </li>
                )
              })}
            </ul>

        </div>
    );
};

export default PostsComponent;