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

  const [drink, setDrink] = useState([])
  const [letter, setLetter] = useState(['a', 'b', 'c'])





  const getDrink = async () => {

    // const awaitJson = (response) => Promise.all(responses.map(response => {
    //   if(response.ok) return response.json();
    //   throw new Error(response.statusText);
    // }));

    try {


      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)

      const data = await response.json()
      // const data = await promises.json()
      console.log("What's my data", data)
      setDrink(data)
    }
    catch (error) {
      console.error(error)
    }
  }
      // for (const e of letter) {

      //   responses.push(await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`))
      //     console.log("My Promise: ", responses)

      // }

      // const response = Promise.resolve(promises)

      // console.log("New Response: ", response)

      // const data = await Promise.all(responses).then(awaitJson).then((data) => {
      //   fetch(`https://www.thecocktaildb.com/api.php`)
      //   .then(response => {
      //     if(response.ok) return response.json();
      //     throw new Error(response.statusText);
      //   })
      // })
        

        // const response = await Promise.all(
        //   letter.map(async letters => {
        //     const res = await fetch(
        //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letters}`
        //     )
        //     return res;
        //   })
        // )

        // response.then(value =>{console.log("Values in response: ", values)})



        // promises.push(response);
      // }

      // console.log("Promise is: ", promises)
      // Promise.all(promises).then((values) =>{
      //   console.log("Promise Values are: ",values);
      // })
      //   const response =  promises;




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
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
        </nav>

        <h1>Welcome to the Lounge</h1>
        <p>Please feel free to look through our wide variety of cocktails</p>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/menu' element={<Menu drink={drink} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        {/* <div className="menu-view">
          <Routes>
            <Route path='/menu' element={
              drink.drinks?.map(drink =>
                <DrinkCard
                  drinks={drink}
                />)}
            />
          </Routes>
        </div> */}

      </div>
    </>
  )
}

export default App;
