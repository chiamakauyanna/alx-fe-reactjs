import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = { id: Date.now(), title, description };
        addRecipe(newRecipe);
        setTitle("");
        setDescription("");
        navigate(`/recipe/${newRecipe.id}`); // Navigate to the new recipe's detail page
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
