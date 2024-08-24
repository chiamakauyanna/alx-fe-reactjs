import React from "react";
import useRecipeStore from "./recipeStore"; // Adjust the import path as needed

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm) || ''; // Ensure it's always a string
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term in the store
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search for a recipe..."
    />
  );
};

export default SearchBar;
