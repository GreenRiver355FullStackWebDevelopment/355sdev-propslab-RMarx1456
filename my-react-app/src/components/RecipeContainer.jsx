import Recipe from "./Recipe.jsx"

function RecipeContainer(props) {
    return (
        <>
        {
            props.map((recipe) => (
                <Recipe prop={recipe} />
            ))
        }
        </>
    )
}

export default RecipeContainer;