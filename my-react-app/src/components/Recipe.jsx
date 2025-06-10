function Recipe(prop) {
    return (
        <>
            <h3>{prop.name}</h3>
            //Mapping the list items because I'm not willing to individually write out each list item.
            <ul>
                {prop.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
            </ul>
            <ol>
                {prop.instructions.map((instruction) => (<li>{instruction}</li>))}
            </ol>
        </>
    )
}

export default Recipe;