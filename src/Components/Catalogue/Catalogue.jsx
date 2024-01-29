import { data } from "./data";
import { useMemo, useState } from "react";
import CatalogueItem from "./CatalogueItem";
import FilterButtons from "./FilterButtons";
import Pagination from "../Pagination";

function Catalogue() {
  const [FilteredResults, setFilteredResults] = useState(data);
  const [clickCategory, setClickCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  let PageSize = 3;
  function handleClick(clickCategory) {
    const filterTemp = [];
    data.forEach((item) => {
      item.searchTern.forEach((term) => {
        if (term === clickCategory) {
          filterTemp.push(item);
        }
      });
    });
    setCurrentPage(1);
    setFilteredResults(filterTemp);
    setClickCategory(clickCategory);
  }
  const currentProductList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return FilteredResults.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, FilteredResults]);

  const onPageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
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
        <CatalogueItem cardItems={currentProductList} />
      </div>
      {FilteredResults && (
        <Pagination
          currentPage={currentPage}
          totalCount={FilteredResults?.length}
          pageSize={PageSize}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default Catalogue;
