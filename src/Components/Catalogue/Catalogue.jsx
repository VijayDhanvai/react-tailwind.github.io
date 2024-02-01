import { data } from "./data";
import { useMemo, useState } from "react";
import CatalogueItem from "./CatalogueItem";
import FilterButtons from "./FilterButtons";
import Pagination from "../Pagination";
import usePagination from "../../Hooks/usePagination";

function Catalogue() {
  const [FilteredResults, setFilteredResults] = useState(data);
  const [clickCategory, setClickCategory] = useState("all");

  const [currentPage, pageSizeSelected, onPageChange] = usePagination(3); // 3 Is page size value here

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
    onPageChange(1);
  }
  const currentProductList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSizeSelected;
    const lastPageIndex = firstPageIndex + pageSizeSelected;

    return FilteredResults.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, FilteredResults]);

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
          totalCount={FilteredResults?.length}
          currentPage={currentPage}
          pageSize={pageSizeSelected}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default Catalogue;
