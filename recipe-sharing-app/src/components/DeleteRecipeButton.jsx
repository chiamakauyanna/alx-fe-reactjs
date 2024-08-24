// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../components/recipeStore";  // Make sure this path is correct

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/recipes"); // Navigate to the recipes list page after deletion
    };

    return (
        <button onClick={handleDelete}>Delete Recipe</button>
    );
};

export default DeleteRecipeButton;
