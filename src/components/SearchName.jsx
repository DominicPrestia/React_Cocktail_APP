import React, { useContext, useState } from "react";
import { useEffect } from "react";
import SearchResults from "./SearchResults";
import { getCocktailsByName } from "./cocktails.service";
import { CocktailContext } from "../App";

const SearchName = () => {
  const [drinks, setDrinks, selectedDrink, setSelectedDrink] =
    useContext(CocktailContext);
  const [searchName, setSearchName] = useState();
  const handleOnSubmit = async (e) => {
    const data = await getCocktailsByName(searchName);
    setDrinks(data);
  };

  useEffect(() => {
    setSelectedDrink(null);
  }, []);

  return (
    <>
      <h1>Search by Name</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          id="nameSearchInput"
          onChange={(e) => setSearchName(e.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </form>
      <SearchResults />
    </>
  );
};

export default SearchName;
