import React from "react";

const Card = ({ link, title }) => {
  return (
    <a className="card-link" href={link} target="blank">
      <div className="card dis-flex">
        <p className="card-text m-t-10 ">
          <div className="circle"></div>
          {title}
        </p>
        <div className="more_in_link">بیشتر...</div>
      </div>
    </a>
  );
};

export default Card;
