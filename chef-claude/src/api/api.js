export async function getRecipeLoremIpsum(ingredients) {
    try {
        const response= await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt");
        const data= await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return "Error fetching recipe. Please try again later.";
    }
}