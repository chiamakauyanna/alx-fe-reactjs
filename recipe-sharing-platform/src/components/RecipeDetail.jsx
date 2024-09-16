import React, { useEffect, useState } from 'react';
import RecipeDetails from '../data.json'; // Assume this contains an array of recipes
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(RecipeDetails);
  }, []);

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-6">Our Delicious Recipes</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-gray-200 shadow rounded-lg p-6">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-green-800">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
            <Link 
              to={`/recipe/${recipe.id}`} 
              className="text-red-500 hover:underline hover:text-red-600 text-sm"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
