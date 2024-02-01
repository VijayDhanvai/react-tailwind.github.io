import React, { useState } from "react";

function usePagination(PageSize = 9) {
  //Default Page Size 9
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSizeSelected, setPageSizeSelected] = useState(PageSize);

  const onPageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  const onPageSizeChange = (event) => {
    console.log(event.target.value);
    setPageSizeSelected(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return [currentPage, pageSizeSelected, onPageChange, onPageSizeChange];
}

export default usePagination;
