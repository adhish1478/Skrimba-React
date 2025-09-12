import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeLoremIpsum } from "../api/api";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");

    function handleGetRecipe() {
        setRecipeShown(true);
    }

    function addIngredient(formData) {
            const ingredient= formData.get("ingredient");
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
            console.log(ingredients);

        }

    async function toggleRecipe() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown);

        const result= await getRecipeLoremIpsum(ingredients);
        setRecipe(result);
        console.log(result);

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

            { recipeShown && <Recipe 
            recipe= {recipe}
            />}
        </main>
    )
}