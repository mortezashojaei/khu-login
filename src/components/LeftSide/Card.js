import React from "react";

const Card = ({ link, title }) => {
  return (
    <a className="card-link" href={link} target="blank">
      <p className="card m-t-10 flex">
        <div className="circle"></div>
        {title}
        <span className="arrow">&#8668;</span>
      </p>
    </a>
  );
};

export default Card;
