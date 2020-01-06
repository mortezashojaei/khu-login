import React, { useState } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
const LeftSide = () => {
  const [tabsIndex, setTabsIndex] = useState(1);
  const [links, setLinks] = useState([1, 2, 3, 4, 5, 6]);
  const [news, setNews] = useState([1, 2]);

  return (
    <div className="login-more">
      <div className="sizefull flex-col-c ">
        <Tabs tabsIndex={tabsIndex} setTabsIndex={setTabsIndex} />
        <Cards items={tabsIndex ? links : news} />
      </div>
    </div>
  );
};

export default LeftSide;
