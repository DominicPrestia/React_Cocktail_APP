import React, { useContext } from "react";
import DrinkCard from "./DrinkCard";
import { CocktailContext } from "../App";

const Menu = ({ drink }) => {
  const [drinks, setDrinks] = useContext(CocktailContext);
  //this component has been setup so it can pass the entire
  //list of drinks down to a drinkcard component so the
  //user can interact with each card individually
  return (
    <>
      <h1>Menu</h1>

      <div className="menu-view">
        {drinks?.map((drink) => (
          <DrinkCard drink={drink} />
        ))}
      </div>
    </>
  );
};

export default Menu;
