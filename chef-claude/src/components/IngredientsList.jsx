export default function IngredientsList(props) {

    const ingredientListElements= props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
         <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient_list" aria-live="polite">
                    {ingredientListElements}
                </ul>

               { props.ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for recipe?</h3>
                        <p>Generate your recipe from your ingredients!</p>
                    </div>
                    <button onClick={props.toggleRecipe}>Get a Recipe</button>
                </div> }
            </section> 
    )
}