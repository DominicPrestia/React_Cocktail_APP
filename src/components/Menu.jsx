import React, { useContext, useEffect } from "react";
import DrinkCard from "./DrinkCard";
import { CocktailContext } from "../App";
import DrinkRecipe from "./DrinkRecipe/DrinkRecipe";
import SearchResults from "./SearchResults";
import { getAllCocktails, sanitizeResults } from "./cocktails.service";
import { all } from "axios";

const Menu = () => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink, letters] =
    useContext(CocktailContext);

  const fetchAllDrinks = async () => {
    // const allDrinks = getAllCocktails(letters);
    // const drinkList = [];
    // Promise.all(allDrinks).then((res) => {
    //   const data = res.map((response) => {
    //     drinkList.push(...sanitizeResults(response.data.drinks));
    //   });
    //   setDrinks(drinkList);
    // });

    const promises = [];
    const drinklist = [];

    letters.map((letter) => {
      promises.push(
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        )
      );
    });

    //This is handling the promise array and processing the promises received.
    //At the end I am setDrink to the destructured array drinklist
    Promise.all(promises).then((values) => {
      var responses = values.map((e) => {
        return e.json();
      });
      Promise.all(responses).then((jsonresponses) => {
        let drinks = jsonresponses.map((e) => {
          return e.drinks;
        });
        for (const drink of drinks) {
          drinklist.push(...drink);
        }
        setDrinks(sanitizeResults(drinklist));
      });
    });
  };

  useEffect(() => {
    setDrinks([]);
    fetchAllDrinks();
  }, []);

  return (
    <div>
      <SearchResults />
    </div>
  );
};

export default Menu;
