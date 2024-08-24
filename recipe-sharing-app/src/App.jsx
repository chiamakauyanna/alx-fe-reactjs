import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import AddRecipeForm from './components/AddRecipeForm';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
      <RecipeList />

    </div>
  );
}

export default App;
