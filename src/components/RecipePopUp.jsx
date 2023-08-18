import React from "react";

const RecipePopUp = ({ drink, setRecipePopUp }) => {
  const i = 1;

  //This componenet lists out all the incgredients for each drink individually
  return (
    <>
      <div className="popup">
        <div onClick={(e) => setRecipePopUp(false)}>
          <strong>X</strong>
        </div>
        <div className="ingredients-container">
          <div className="mix-container">
            <h4>Ingredients:</h4>
            <ul>
              {console.log(drink?.strIngredient1)}
              {drink?.strIngredient1 !== null ? (
                <li>{drink?.strIngredient1}</li>
              ) : null}
              {drink?.strIngredient2 !== null ? (
                <li>{drink?.strIngredient2}</li>
              ) : null}
              {drink?.strIngredient3 !== null ? (
                <li>{drink?.strIngredient3}</li>
              ) : null}
              {drink?.strIngredient4 !== null ? (
                <li>{drink?.strIngredient4}</li>
              ) : null}
              {drink?.strIngredient5 !== null ? (
                <li>{drink?.strIngredient5}</li>
              ) : null}
              {drink?.strIngredient6 !== null ? (
                <li>{drink?.strIngredient6}</li>
              ) : null}
              {drink?.strIngredient7 !== null ? (
                <li>{drink?.strIngredient7}</li>
              ) : null}
              {drink?.strIngredient8 !== null ? (
                <li>{drink?.strIngredient8}</li>
              ) : null}
              {drink?.strIngredient9 !== null ? (
                <li>{drink?.strIngredient9}</li>
              ) : null}
              {drink?.strIngredient10 !== null ? (
                <li>{drink?.strIngredient10}</li>
              ) : null}
              {drink?.strIngredient11 !== null ? (
                <li>{drink?.strIngredient11}</li>
              ) : null}
              {drink?.strIngredient12 !== null ? (
                <li>{drink?.strIngredient12}</li>
              ) : null}
              {drink?.strIngredient13 !== null ? (
                <li>{drink?.strIngredient13}</li>
              ) : null}
              {drink?.strIngredient14 !== null ? (
                <li>{drink?.strIngredient14}</li>
              ) : null}
              {drink?.strIngredient15 !== null ? (
                <li>{drink?.strIngredient15}</li>
              ) : null}
            </ul>
          </div>
          <div className="mix-container">
            <h4>Measures:</h4>
            <ul>
              {console.log(drink?.strIngredient1)}
              {drink?.strMeasure1 !== null ? (
                <li>{drink?.strMeasure1}</li>
              ) : null}
              {drink?.strMeasure2 !== null ? (
                <li>{drink?.strMeasure2}</li>
              ) : null}
              {drink?.strMeasure3 !== null ? (
                <li>{drink?.strMeasure3}</li>
              ) : null}
              {drink?.strMeasure4 !== null ? (
                <li>{drink?.strMeasure4}</li>
              ) : null}
              {drink?.strMeasure5 !== null ? (
                <li>{drink?.strMeasure5}</li>
              ) : null}
              {drink?.strMeasure6 !== null ? (
                <li>{drink?.strMeasure6}</li>
              ) : null}
              {drink?.strMeasure7 !== null ? (
                <li>{drink?.strMeasure7}</li>
              ) : null}
              {drink?.strMeasure8 !== null ? (
                <li>{drink?.strMeasure8}</li>
              ) : null}
              {drink?.strMeasure9 !== null ? (
                <li>{drink?.strMeasure9}</li>
              ) : null}
              {drink?.strMeasure10 !== null ? (
                <li>{drink?.strMeasure10}</li>
              ) : null}
              {drink?.strMeasure11 !== null ? (
                <li>{drink?.strMeasure11}</li>
              ) : null}
              {drink?.strMeasure12 !== null ? (
                <li>{drink?.strMeasure12}</li>
              ) : null}
              {drink?.strMeasure13 !== null ? (
                <li>{drink?.strMeasure13}</li>
              ) : null}
              {drink?.strMeasure14 !== null ? (
                <li>{drink?.strMeasure14}</li>
              ) : null}
              {drink?.strMeasure15 !== null ? (
                <li>{drink?.strMeasure15}</li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePopUp;
