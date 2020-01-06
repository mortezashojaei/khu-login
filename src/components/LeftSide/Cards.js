import React from "react";
import Card from "./Card";

const Cards = ({ items }) => {
  return (
    <div className="cards-wrapper">
      {items.map(item => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Cards;
