import React, { useState } from 'react'
import DrinkCard from './DrinkCard'
import axios from 'axios'
import { useEffect } from 'react'
import Menu from './Menu'

const Search = ({ drink, setLetter, setDrink }) => {

  const [alphabet, setAlphabet] = useState('a')
  const [buttonText, setButtonText] = useState('A')

  const alphabetURL = axios.create({
    baseURL: `https://www.thecocktaildb.com/`
  })


  function getData() {

    
    alphabetURL.get(`api/json/v1/1/search.php?f=${alphabet}`)
      .then(res => {
      setDrink()
       setDrink(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })



  }


  const handleAlphaSearch = (e) => {
    setAlphabet(e)
  }


  useEffect(()=>{
    getData();
  },[alphabet])


  return (
    <>
    
      <h1>Alphabet Search</h1>
      <div className='button-master'>
        <button type='button' onClick={e => handleAlphaSearch(e.target.innerHTML)}>A</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>B</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>C</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>D</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>E</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>F</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>G</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>H</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>I</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>J</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>K</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>L</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>M</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>N</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>O</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>P</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>Q</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>R</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>S</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>T</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>V</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>W</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>Y</button>
        <button onClick={e => handleAlphaSearch(e.target.innerHTML)}>Z</button>

      </div>

      <h1>Drinks Starting with: {alphabet}</h1>
      <Menu drink={drink?.drinks} />

    </>
  )
}

export default Search