import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

// Define a fetch function that can be used to fetch data from an API
async function fetchPosts(){
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
  return data
}
const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

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
                <li key={index}>{post.title}
                  <p style={{color: 'red'}}>{post.body}</p>
                </li>
                )
              })}
            </ul>

        </div>
    );
};

export default PostsComponent;