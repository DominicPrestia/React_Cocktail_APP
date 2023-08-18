import React, { useContext } from "react";
import IngredientsList from "./IngredientsList";
import { CocktailContext } from "../../App";
import DrinkMethod from "./DrinkMethod";
import DrinkHeader from "./DrinkHeader";
import { Link } from "react-router-dom";

const DrinkRecipe = () => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);

  return (
    <div>
      <div className="card" key={selectedDrink.id}>
        <DrinkHeader
          title={selectedDrink.name}
          image={selectedDrink.imageSrc}
        />
        <IngredientsList ingredients={selectedDrink.ingredients} />
        <DrinkMethod method={selectedDrink.instructions} />
        <h4
          onClick={() => {
            setSelectedDrink(null);
          }}
        >
          Return
        </h4>
      </div>
    </div>
  );
};

export default DrinkRecipe;
