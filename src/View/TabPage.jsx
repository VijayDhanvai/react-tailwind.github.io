import Tab from "../Components/Tab/Tab";
import { useEffect } from "react";
function TabPage() {
  useEffect(() => {
    document.title = "Simple React Tab, Components and useState";
  }, []);
  return (
    <>
      <h2 className="my-4 text-3xl text-sky-700 font-semibold">
        Simple React Tab
      </h2>
      <Tab />
    </>
  );
}

export default TabPage;
