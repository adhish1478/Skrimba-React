export default function Main() {
    return (
        <main>
            <form className="main_form">
                <input 
                type="text"
                placeholder="e.g. Potato"
                aria-label="Add-ingredient"
                />
                <button type="submit">Add Ingredient</button>
            </form>
        </main>
    )
}