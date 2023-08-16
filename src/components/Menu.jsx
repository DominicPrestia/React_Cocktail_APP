import React from 'react'
import DrinkCard from './DrinkCard'

const Menu = ({drink}) => {
  return (
    <>
        <div className="menu-view">
              {drink.drinks?.map(drink =>
                <DrinkCard
                  drinks={drink}
                />)}
        </div>
    </>
  )
}

export default Menu