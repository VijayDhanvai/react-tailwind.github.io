import Accordion from "../Components/Accordion/Accordion";
import { useEffect } from "react";
function AccordionPage() {
  useEffect(() => {
    document.title = "Simple React Accordion, Components and useState";
  }, []);
  return (
    <>
      <h2 className="my-4 text-3xl text-sky-700 font-semibold">
        Simple React Accordion
      </h2>
      <Accordion />
    </>
  );
}

export default AccordionPage;
