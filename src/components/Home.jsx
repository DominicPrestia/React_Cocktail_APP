import React, { useContext, useEffect } from "react";
import "../styles/Home.css";
import { CocktailContext } from "../App";

const Home = () => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);

  useEffect(() => {
    setSelectedDrink(null);
  }, []);
  return (
    <>
      <div className="welcome-message">
        <h1>Welcome to the Lounge</h1>
        <p>Please feel free to look through our wide variety of cocktails</p>
      </div>
    </>
  );
};

export default Home;
