import React from "react";

const RecipePopUp = ({ drinks, setRecipePopUp }) => {
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
              {console.log(drinks?.strIngredient1)}
              {drinks?.strIngredient1 !== null ? (
                <li>{drinks?.strIngredient1}</li>
              ) : null}
              {drinks?.strIngredient2 !== null ? (
                <li>{drinks?.strIngredient2}</li>
              ) : null}
              {drinks?.strIngredient3 !== null ? (
                <li>{drinks?.strIngredient3}</li>
              ) : null}
              {drinks?.strIngredient4 !== null ? (
                <li>{drinks?.strIngredient4}</li>
              ) : null}
              {drinks?.strIngredient5 !== null ? (
                <li>{drinks?.strIngredient5}</li>
              ) : null}
              {drinks?.strIngredient6 !== null ? (
                <li>{drinks?.strIngredient6}</li>
              ) : null}
              {drinks?.strIngredient7 !== null ? (
                <li>{drinks?.strIngredient7}</li>
              ) : null}
              {drinks?.strIngredient8 !== null ? (
                <li>{drinks?.strIngredient8}</li>
              ) : null}
              {drinks?.strIngredient9 !== null ? (
                <li>{drinks?.strIngredient9}</li>
              ) : null}
              {drinks?.strIngredient10 !== null ? (
                <li>{drinks?.strIngredient10}</li>
              ) : null}
              {drinks?.strIngredient11 !== null ? (
                <li>{drinks?.strIngredient11}</li>
              ) : null}
              {drinks?.strIngredient12 !== null ? (
                <li>{drinks?.strIngredient12}</li>
              ) : null}
              {drinks?.strIngredient13 !== null ? (
                <li>{drinks?.strIngredient13}</li>
              ) : null}
              {drinks?.strIngredient14 !== null ? (
                <li>{drinks?.strIngredient14}</li>
              ) : null}
              {drinks?.strIngredient15 !== null ? (
                <li>{drinks?.strIngredient15}</li>
              ) : null}
            </ul>
          </div>
          <div className="mix-container">
            <h4>Measures:</h4>
            <ul>
              {console.log(drinks?.strIngredient1)}
              {drinks?.strMeasure1 !== null ? (
                <li>{drinks?.strMeasure1}</li>
              ) : null}
              {drinks?.strMeasure2 !== null ? (
                <li>{drinks?.strMeasure2}</li>
              ) : null}
              {drinks?.strMeasure3 !== null ? (
                <li>{drinks?.strMeasure3}</li>
              ) : null}
              {drinks?.strMeasure4 !== null ? (
                <li>{drinks?.strMeasure4}</li>
              ) : null}
              {drinks?.strMeasure5 !== null ? (
                <li>{drinks?.strMeasure5}</li>
              ) : null}
              {drinks?.strMeasure6 !== null ? (
                <li>{drinks?.strMeasure6}</li>
              ) : null}
              {drinks?.strMeasure7 !== null ? (
                <li>{drinks?.strMeasure7}</li>
              ) : null}
              {drinks?.strMeasure8 !== null ? (
                <li>{drinks?.strMeasure8}</li>
              ) : null}
              {drinks?.strMeasure9 !== null ? (
                <li>{drinks?.strMeasure9}</li>
              ) : null}
              {drinks?.strMeasure10 !== null ? (
                <li>{drinks?.strMeasure10}</li>
              ) : null}
              {drinks?.strMeasure11 !== null ? (
                <li>{drinks?.strMeasure11}</li>
              ) : null}
              {drinks?.strMeasure12 !== null ? (
                <li>{drinks?.strMeasure12}</li>
              ) : null}
              {drinks?.strMeasure13 !== null ? (
                <li>{drinks?.strMeasure13}</li>
              ) : null}
              {drinks?.strMeasure14 !== null ? (
                <li>{drinks?.strMeasure14}</li>
              ) : null}
              {drinks?.strMeasure15 !== null ? (
                <li>{drinks?.strMeasure15}</li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePopUp;
