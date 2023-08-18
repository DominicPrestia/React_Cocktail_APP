import React, { createContext } from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./components/DrinkCard";
import "./styles/index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SearchAlpha from "./components/SearchAlpha";
import SearchName from "./components/SearchName";
import PageNotFound from "./components/PageNotFound";
import SearchResults from "./components/SearchResults";
import videoBG from "./videos/bar_banner_vid.mp4";
import axios from "axios";
import Menu from "./components/Menu";

export const CocktailContext = createContext();

function App() {
  const [drinks, setDrinks] = useState();
  const [selectedDrink, setSelectedDrink] = useState();
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
  return (
    <CocktailContext.Provider
      value={[drinks, setDrinks, selectedDrink, setSelectedDrink, letters]}
    >
      <div className="app-class">
        <video className="background" src={videoBG} autoPlay loop muted></video>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/searchAlpha">Search Alphabetically</Link>
            </li>
            {/* <li>
              <Link to="/searchName">Name Search</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchAlpha" element={<SearchAlpha />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/searchName" element={<SearchName />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
