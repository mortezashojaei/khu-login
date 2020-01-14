import React from "react";

const Card = ({ link, title }) => {
  return (
    <a className="card-link" href={link} target="blank">
      <div className="dis-flex">
      <p className="card m-t-10 ">
        <div className="circle"></div>
        بنلم سمبندذ مقپیر
      </p>
      <div className="more_in_link">بیشتر...</div>
      </div>
    </a>
  );
};

export default Card;
