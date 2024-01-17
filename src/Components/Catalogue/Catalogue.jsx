import { data } from "./data";
import { useState } from "react";
import CatalogueItem from "./CatalogueItem";
import FilterButtons from "./FilterButtons";

function Catalogue() {
  const [FilteredResults, setFilteredResults] = useState(data);
  const [clickCategory, setClickCategory] = useState("all");

  function handleClick(clickCategory) {
    const filterTemp = [];
    data.forEach((item) => {
      item.searchTern.forEach((term) => {
        if (term === clickCategory) {
          filterTemp.push(item);
        }
      });
    });
    setFilteredResults(filterTemp);
    setClickCategory(clickCategory);
  }
  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-xl mb-5 font-semibold text-amber-800 capitalize">
          Filter By {clickCategory}
        </h2>
        <FilterButtons
          FilterButtons={data}
          handleClick={handleClick}
          className={clickCategory}
        />
      </div>

      <div className="columns-3 gap-8 mt-8">
        <CatalogueItem cardItems={FilteredResults} />
      </div>
    </>
  );
}

export default Catalogue;
