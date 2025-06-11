import Recipe from "./Recipe.jsx"

function RecipeContainer({ recipes }) {
    return (
        <>
        {
            recipes.map((recipe) => (
                <Recipe prop={recipe} />
            ))
        }
        </>
    )
}

export default RecipeContainer;