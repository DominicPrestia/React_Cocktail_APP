import React from "react";

const DrinkHeader = ({ title, image }) => {
  return (
    <div className="center">
      <h2>{title}</h2>
      <img className="img-hero" src={image} alt={title} />
    </div>
  );
};

export default DrinkHeader;
