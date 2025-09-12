import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    function handleGetRecipe() {
        setRecipeShown(true);
    }

    function addIngredient(formData) {
            const ingredient= formData.get("ingredient");
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
            console.log(ingredients);

        }

    function toggleRecipe() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown);
    }

    return (
        <main>
            <form className="main_form" action={addIngredient}>
                <input 
                type="text"
                placeholder="e.g. Potato"
                aria-label="Add-ingredient"
                name= "ingredient"
                />
                <button type="submit">Add Ingredient</button>
            </form>
            
            { ingredients.length >0 && <IngredientsList 
            ingredients= {ingredients}
            toggleRecipe= {toggleRecipe}
            />}

            { recipeShown && <Recipe />}
        </main>
    )
}