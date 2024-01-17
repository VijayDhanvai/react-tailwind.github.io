import AccordionTitle from "./AccordionTitle.jsx";
import AccordionBody from "./AccordionBody.jsx";
import { useState } from "react";
import { AccData } from "./acc-data.js";
function Accordion() {
  const [ActiveAccordion, setActiveAccordion] = useState(0);
  const index = 0;

  function handleClick(clickedIndex) {
    setActiveAccordion(clickedIndex);
  }
  return (
    <>
      {AccData.map((item, index) => (
        <div key={item.question}>
          <AccordionTitle
            className={
              ActiveAccordion == index
                ? "bg-sky-500  text-white"
                : "text-slate-600"
            }
            handleClick={handleClick}
            clickedIndex={index}
          >
            {item.question}

            <span className="text-2xl w-6 text-center">
              {ActiveAccordion == index ? "-" : "+"}
            </span>
          </AccordionTitle>
          {ActiveAccordion == index && (
            <AccordionBody AccDetail={item.answer} />
          )}
        </div>
      ))}
    </>
  );
}
export default Accordion;
