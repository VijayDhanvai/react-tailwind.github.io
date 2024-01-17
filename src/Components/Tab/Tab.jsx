import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { TabDetail } from "./data.js";
function Tab() {
  let tabTitle = "components";
  const [TabData, setTabData] = useState(tabTitle);

  function handleClick(tabTitle) {
    setTabData(tabTitle);
  }
  return (
    <>
      {Object.entries(TabDetail).map(([key, val], i) => (
        <TabButton
          className={TabData == key ? "bg-sky-700" : "bg-sky-500"}
          handleClick={handleClick}
          key={key}
        >
          {val.title}
        </TabButton>
      ))}
      <div className="shadow-xl p-3 border border-sky-50 rounded-lg rounded-t-none ">
        <h2 className="text-sky-700 text-xl font-semibold my-3">
          {TabDetail[TabData].title}
        </h2>
        <p className="text-slate-500">{TabDetail[TabData].description}</p>
        <div className="text-slate-800 rounded-lg bg-slate-100 mt-3 p-5 pt-0">
          <pre>
            <code>{TabDetail[TabData].code}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
export default Tab;
