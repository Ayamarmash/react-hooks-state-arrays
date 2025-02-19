import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selector, setSelector] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }
  function handleLiClick(foodId){
    const editedFoodList = foods.map((food)=>{
      if(food.id === foodId) {
        food.heatLevel = food.heatLevel + 1
        return food
      }
      else return food
    })
    setFoods(editedFoodList)
  }
  function handleFilterChange(event) {
    setSelector(event.target.value);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (selector === "All") {
      return true;
    } else {
      return food.cuisine === selector;
    }
  });
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
<select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
