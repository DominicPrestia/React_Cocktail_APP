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
        <h1 className="home">
          Welcome to the <br /> <span className="lounge">Lounge</span>
        </h1>
        <p className="hm">Explore our diverse cocktail selection</p>
      </div>
    </>
  );
};

export default Home;
