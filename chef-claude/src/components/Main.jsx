import { useState, useRef, useEffect } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeLoremIpsum } from "../api/api";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("");

    const recipeSection = useRef(null);

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

    useEffect(() => {
        if (recipe!== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    })

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
            ref = {recipeSection}
            recipe= {recipe}
            />}
        </main>
    )
}