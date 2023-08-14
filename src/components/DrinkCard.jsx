import React from 'react'
import RecipePopUp from './RecipePopUp'

const DrinkCard = ({ drink, setRecipePopUp, recipePopUp }) => {


  const handlePopUp = () => {
    setRecipePopUp(true)
  }




  return (
    <>
      <div className='test'>
        {console.log("DrinkCard: ", drink)}
        {drink?.map(drinks => {
          return (
            <>
            {console.log("In Map: ", drinks)}
              <div className='drink-card'>
                <h3>{drinks.strDrink}</h3>
                <svg onClick={handlePopUp} className='img-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
                 </svg>
                 {recipePopUp && 
                 <RecipePopUp
                  key={drinks.idDrink}
                  drinks={drinks}
                  setRecipePopUp={setRecipePopUp}
                 />}
                <div className='img-container'>
                  <img className='img-drink' src={drinks.strDrinkThumb} alt='drink image' />
                </div>
              </div>
            </>
          )
        }
        )}
      </div>
    </>
  )
}

export default DrinkCard