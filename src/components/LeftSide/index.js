import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import { getMainPageData } from "../../services/apiService";

const LeftSide = () => {
  const [tabsIndex, setTabsIndex] = useState(1);
  const [section_one, setSectionOne] = useState("");
  const [section_two, setSectionTwo] = useState("");

  useEffect(() => {
    getMainPageData()
      .then(response => {
        setSectionOne(response.data.section_one);
        setSectionTwo(response.data.section_two);
      })
      .catch(error => {
        alert("خطایی در دریافت مطالب رخ داده است");
      });
  }, []);
  return (
    <div className="login-more">
      <div className="sizefull flex-col-c ">
        <Tabs
          titleOne={section_one.title || ""}
          titleTwo={section_two.title || ""}
          tabsIndex={tabsIndex}
          setTabsIndex={setTabsIndex}
        />
        <Cards
          items={tabsIndex ? section_one.data || [] : section_two.data || []}
        />
      </div>
    </div>
  );
};

export default LeftSide;
