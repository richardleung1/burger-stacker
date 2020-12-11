function Ingredients(props) {
    const ingredientAvailable = props.ingredients.map((ingredient, index) => {
        return <li key={index}><button style={{ background: ingredient.color }} value={index} onClick={props.onClick}>Add {ingredient.name}</button></li>
    });
    const ingredientsSelected = props.selectedIngredients.map((ingredient, index) => {
        return <li key={index} style={{ background: ingredient.color }}>{ingredient.name}</li>
    })
    return (
        <div>
            <h2>Ingredients: </h2>
            <ul>
                {ingredientAvailable}
            </ul>
            <h2>Burger: </h2>
            <ul>
                {ingredientsSelected.reverse()}
            </ul>
            <button onClick={props.clear}>Clear Selection</button>
        </div>
    )
}

export default Ingredients;