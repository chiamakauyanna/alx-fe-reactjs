import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm).toLowerCase();

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h3>{recipe.title}</h3>
                        </Link>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;
