import React from "react";

const Tabs = ({ tabsIndex, setTabsIndex ,titleOne,titleTwo}) => {
  return (
    <div className="tabs">
      <div className="tab-2">
        <label htmlFor="tab2-1">
          <button
            onClick={() => {
              setTabsIndex(0);
            }}
          >
            {titleTwo}
          </button>
        </label>

        <input
          id="tab2-1"
          name="tabs-two"
          type="radio"
          checked={tabsIndex === 0}
        />
      </div>
      <div className="tab-2">
        <label htmlFor="tab2-2">
          <button
            onClick={() => {
              setTabsIndex(1);
            }}
          >
            {titleOne}
          </button>
        </label>
        <input
          id="tab2-2"
          name="tabs-two"
          type="radio"
          checked={tabsIndex === 1}
        />
      </div>
    </div>
  );
};

export default Tabs;
