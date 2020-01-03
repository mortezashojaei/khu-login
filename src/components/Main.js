import React from "react";
import RightSide from "./RightSide/index";
import LeftSide from "./LeftSide/index";

const Main = () => {
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <RightSide />
          <LeftSide />
        </div>
      </div>
    </div>
  );
};

export default Main;
