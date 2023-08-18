import React, { createContext } from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./components/DrinkCard";
import "./styles/index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SearchAlpha from "./components/SearchAlpha";
import PageNotFound from "./components/PageNotFound";
import Menu from "./components/Menu";
import videoBG from "./videos/bar_banner_vid.mp4";
import axios from "axios";

export const CocktailContext = createContext();

function App() {
  const [drinks, setDrinks] = useState();
  const [storedDrinks, setStoredDrinks] = useState();

  //I don't know how to handle a null value that is returned to a promise.
  //When iterating through url requests. I've left out U and X because I believe
  //they are returning null and causing this error:
  //drink is not iterable (cannot read property null)
  //TypeError: drink is not iterable (cannot read property null)
  //at http://localhost:3000/main.97366a59d4783f16d0d1.hot-update.js:72:23

  const replaceListAll = () => {
    setDrinks(storedDrinks);
  };

  return (
    <CocktailContext.Provider
      value={[drinks, setDrinks, storedDrinks, setStoredDrinks]}
    >
      <div className="app-class">
        <video className="background" src={videoBG} autoPlay loop muted></video>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link onClick={replaceListAll} to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/searchAlpha">Search Alphabetically</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchAlpha />} />
          <Route path="/menu" element={<Menu drink={drinks} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
