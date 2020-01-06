import React from "react";

const Tabs = ({ tabsIndex, setTabsIndex }) => {
  return (
    <div className="tabs">
      <div className="tab-2">
        <label for="tab2-1">
          <button
            onClick={() => {
              setTabsIndex(0);
            }}
          >
            اخبار
          </button>
        </label>

        <input
          id="tab2-1"
          name="tabs-two"
          type="radio"
          checked={tabsIndex == 0}
        />
      </div>
      <div className="tab-2">
        <label for="tab2-2">
          <button
            onClick={() => {
              setTabsIndex(1);
            }}
          >
            لینک های مهم
          </button>
        </label>
        <input
          id="tab2-2"
          name="tabs-two"
          type="radio"
          checked={tabsIndex == 1}
        />
      </div>
    </div>
  );
};

export default Tabs;
