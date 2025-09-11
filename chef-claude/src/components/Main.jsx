import { useState } from "react";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(formData) {
            const ingredient= formData.get("ingredient");
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
            console.log(ingredients);

        }

    const ingredientListElements= ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <main>
            <form className="main_form" action={handleSubmit}>
                <input 
                type="text"
                placeholder="e.g. Potato"
                aria-label="Add-ingredient"
                name= "ingredient"
                />
                <button type="submit">Add Ingredient</button>
            </form>
            <ul>
                {ingredientListElements}
            </ul>
        </main>
    )
}