import React from 'react'
import DrinkCard from './DrinkCard'

const Menu = ({ drink }) => {
  //this component has been setup so it can pass the entire
  //list of drinks down to a drinkcard component so the
  //user can interact with each card individually
  return (
    <>
      <h1>Menu</h1>
      
      <div className="menu-view">
        {drink?.map(drinks =>
          <DrinkCard
            drinks={drinks}
          />)}
      </div>
    </>
  )
}

export default Menu