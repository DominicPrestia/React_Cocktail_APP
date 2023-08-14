import React from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./components/DrinkCard";
import RecipePopUp from "./components/RecipePopUp";
import './styles/index.css'
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";


function App() {

  const [drink, setDrink] = useState([])
  const [recipePopUp,setRecipePopUp] = useState(false)

  const getDrink = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      const data = await response.json()
      setDrink(data)
    }
    catch (error) {
      console.log("I LOGGING ERROR")
      console.error(error)
    }
  }

  useEffect(() => {
    getDrink()
  }, [])

  console.log(recipePopUp)
  return (
    <>
      <div className="app-class">
        <h1>Hello Drink App</h1>

        {/* {drink.drinks?.map(drinks => 
        {return(
          <>
            <h1>{drinks.strDrink}</h1>
            <img src={drinks.strDrinkThumb} height="200px" alt="drink thumbnail"/>
          </>
          )
        })} */}
        <DrinkCard drink={drink.drinks} setRecipePopUp={setRecipePopUp} recipePopUp={recipePopUp} />
        
      </div>
    </>
  );
}

export default App;
