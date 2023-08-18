import React, { useContext } from "react";
import RecipePopUp from "./RecipePopUp";
import { useState } from "react";
import { CocktailContext } from "../App";
import '../styles/DrinkCard.css'

const DrinkCard = ({ drink }) => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);
  const onDrinkCardClick = () => {
    setSelectedDrink(drink);
  };

  return (
    <>
      <div onClick={onDrinkCardClick} className={`${drink.id}-card`}>
        <div className="drink-card">
          <h3>{drink.name}</h3>
          <div className="img-container">
            <img className="img-drink" src={drink.imageSrc} alt="drink image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinkCard;
