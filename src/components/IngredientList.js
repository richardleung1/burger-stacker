import { useState } from "react";

import Ingredients from './Ingredients';

function IngredientList(props) {
    const [availableIngredients, setAvailableIngredients] = useState(props.ingredients);
    const [selectedIngredients, setSelectedIngredients] = useState([])

    const selectIngredient = (e) => {
        const index = e.target.value
        const food = selectedIngredients
        food.push(availableIngredients.splice(index, 1)[0])
        
        const notSelected = (item) => {
            for (let i = 0; i < food.length; i++) {
                const element = food[i];
                if (element.name === item.name) {
                    return false;
                }
            }
            return true;
        }

        const newList = props.ingredients.filter(notSelected)
        
        setAvailableIngredients(newList)
        setSelectedIngredients(food)
    }

    const clearSelection = () => {
        setAvailableIngredients(props.ingredients)
        setSelectedIngredients([])
    }

    return(
        <div>
            <Ingredients ingredients={availableIngredients} selectedIngredients={selectedIngredients} onClick={selectIngredient} clear={clearSelection}/>
        </div>
    )
}
export default IngredientList;