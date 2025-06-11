function Recipe({ prop }) {
    return (
        <>
            <h3>{prop.name}</h3>
            {/*Mapping the list items because I'm not willing to individually write out each list item.*/}
            <ul>
                {prop.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
            </ul>
            <ol>
                {prop.instructions.map((instruction) => (<li>{instruction}</li>))}
            </ol>

            {
                //Not sure if this will work, but since optionalGlaze holds the exact same structure as a recipe, I'm trying to cut down on the amount of code by recursively calling Recipe to display the similarly structured data.
                prop.hasOwnProperty('optionalGlaze') ? <Recipe prop={prop.optionalGlaze} /> : null
            }
        </>
    )
}

export default Recipe;