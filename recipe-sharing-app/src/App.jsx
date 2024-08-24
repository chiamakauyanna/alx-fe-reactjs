import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
      <RecipeList />
    </div>
  );
}

export default App;
