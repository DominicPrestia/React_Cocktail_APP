import React, { useContext, useState } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";
import { useEffect } from "react";
import Menu from "./Menu";
import { getCocktailsByFirstLeter } from "./cocktails.service";
import { CocktailContext } from "../App";

const Search = () => {
  const [alphabet, setAlphabet] = useState("a");
  const [buttonText, setButtonText] = useState("A");
  const [drinks, setDrinks] = useContext(CocktailContext);
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
  const alphabetURL = axios.create({
    baseURL: `https://www.thecocktaildb.com/`,
  });

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

export default Search;
