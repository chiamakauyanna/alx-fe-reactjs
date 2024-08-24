import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import AddRecipeForm from './components/AddRecipeForm';
import RecommendationsList from './components/RecommendationsList';
import DeleteRecipeButton from './components/DeleteRecipeButton'; // Assuming you have this component

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipes" element={<RecipeList />} />
          {/* Example route for DeleteRecipeButton */}
          <Route path="/delete/:id" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
