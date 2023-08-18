import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Menu from "./Menu";
import { getCocktailsByFirstLeter } from "./cocktails.service";
import { CocktailContext } from "../App";

const SearchAlpha = () => {
  const [alphabet, setAlphabet] = useState("a");
  const [buttonText, setButtonText] = useState("A");
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);
  const [letters, setLetters] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
  ]);

  useEffect(() => {
    setSelectedDrink(null);
  }, []);

  const handleAlphaSearch = (e) => {
    setAlphabet(e);
  };

  useEffect(() => {
    const fetchDrinks = async () => {
      const data = await getCocktailsByFirstLeter(alphabet);
      setDrinks(data);
    };
    fetchDrinks();
  }, [alphabet]);

  return (
    <>
      <h1>Alphabet Search</h1>
      <div className="button-master">
        {letters.map((letter) => {
          return (
            <button
              key={`alpha-search-${letter}`}
              type="button"
              onClick={(e) => handleAlphaSearch(e.target.innerHTML)}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <h1>Drinks Starting with: {alphabet}</h1>
      <Menu />
    </>
  );
};

export default SearchAlpha;
