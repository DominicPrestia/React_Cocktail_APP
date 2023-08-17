import React from "react";
import { useState, useEffect } from "react";
import DrinkCard from "./components/DrinkCard";
import './styles/index.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PageNotFound from "./components/PageNotFound";
import Menu from "./components/Menu";
import videoBG from './videos/bar_banner_vid.mp4'
import axios from "axios";


function App() {

  const [drink, setDrink] = useState()
  const [storedDrinks,setStoredDrinks] = useState()

  //I don't know how to handle a null value that is returned to a promise. 
  //When iterating through url requests. I've left out U and X because I believe
  //they are returning null and causing this error: 
    //drink is not iterable (cannot read property null)
    //TypeError: drink is not iterable (cannot read property null)
    //at http://localhost:3000/main.97366a59d4783f16d0d1.hot-update.js:72:23
  const [letter, setLetter] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'])


  const getDrink = async () => {

    try {

      const promises = []
      const drinklist = []

      for (const e of letter) {

        promises.push(fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`))

      }

      //This is handling the promise array and processing the promises received.
      //At the end I am setDrink to the destructured array drinklist
      Promise.all(promises).then((values) => {
        var responses = values.map((e) => { return e.json(); });
        Promise.all(responses).then((jsonresponses) => {
          let drinks = jsonresponses.map((e) => { return e.drinks });
          for (const drink of drinks) {
            drinklist.push(...drink)
          }
          setDrink(drinklist)
          setStoredDrinks(drinklist)
        })
      })

    }
    catch (error) {
      console.error(error)
    }
  }

  const replaceListAll = () =>{
    setDrink(storedDrinks)
  }

  useEffect(() => {
    getDrink()
  }, [])

  return (
    <>
      <div className="app-class">
        <video className="background" src={videoBG} autoPlay loop muted></video>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link onClick={replaceListAll} to='/menu'>Menu</Link></li>
            <li><Link to='/search'>Search Alphabetically</Link></li>
          </ul>
        </nav>

      

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search drink={drink} setLetter={setLetter} setDrink={setDrink} />} />
          <Route path='/menu' element={<Menu drink={drink}/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </div>
    </>
  )
}

export default App;
