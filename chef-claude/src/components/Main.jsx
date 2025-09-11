import { useState } from "react";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    function addIngredient(formData) {
            const ingredient= formData.get("ingredient");
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
            console.log(ingredients);

        }

    const ingredientListElements= ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            
            { ingredients.length >0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient_list" aria-live="polite">
                    {ingredientListElements}
                </ul>

                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for recipe?</h3>
                        <p>Generate your recipe from your ingredients!</p>
                    </div>
                    <button>Get a Recipe</button>
                </div>
            </section> }
        </main>
    )
}