import React from "react";

const IngredientsList = ({ ingredients }) => {
  if (!ingredients || ingredients.length === 0) {
    return <div className="ingredients">No ingredients available.</div>;
  }
  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.measure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
