import React from "react";

const DrinkMethod = ({ method }) => {
  console.log(method);
  return (
    <div className="method container">
      <h4>Directions</h4>
      <p>{method}</p>;
    </div>
  );
};

export default DrinkMethod;
