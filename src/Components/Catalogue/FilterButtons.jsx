import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FilterButtons({ FilterButtons, handleClick, className }) {
  const refContainer = useRef();

  let btnClass =
    " text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 capitalize";
  let btnClassActive = `${className}  text-white border border-purple-700 bg-purple-800 ring-4 outline-none ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 capitalize`;
  const filteredResults = [];
  FilterButtons.forEach((item) => {
    item.searchTern.forEach((term) => {
      !filteredResults.includes(term) && filteredResults.push(term);
    });
  });

  filteredResults.sort();

  useEffect(() => {
    // Animate  Button on click
    gsap.to(".text-center", {
      scale: 1,
      duration: 0.2,
    });
    gsap.to(` .${className}`, {
      scale: 1.1,
      duration: 0.2,
    });
  }, [filteredResults]);

  useGSAP(
    () => {
      // Animate Button on mount
      gsap.from(".border", { opacity: 0, y: -20, stagger: 0.1, duration: 0.5 });
    },
    { scope: refContainer }
  );

  return (
    <>
      <div ref={refContainer}>
        {filteredResults.map((btn) => (
          <button
            key={btn}
            type="button"
            onClick={() => handleClick(btn)}
            className={className == btn ? btnClassActive : btnClass}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}
export default FilterButtons;
