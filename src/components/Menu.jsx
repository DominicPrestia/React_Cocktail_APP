import React, { useContext } from "react";
import DrinkCard from "./DrinkCard";
import { CocktailContext } from "../App";
import DrinkRecipe from "./DrinkRecipe/DrinkRecipe";

const Menu = () => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);
  //this component has been setup so it can pass the entire
  //list of drinks down to a drinkcard component so the
  //user can interact with each card individually

  return (
    <>
      {!selectedDrink && (
        <div>
          <h1>Menu</h1>

          <div className="menu-view">
            {drinks?.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      )}
      {selectedDrink && <DrinkRecipe />}
    </>
  );
};

export default Menu;
