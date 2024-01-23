import React from "react";

export default function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          type="button"
          className={` ${
            currentPage === i ? "bg-gray-300 shadow-md" : "bg-gray-100"
          } min-h-[38px] min-w-[38px] flex justify-center items-center  text-gray-800 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none  `}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const onNext = () => {
    currentPage < Math.ceil(totalCount / pageSize) &&
      onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    currentPage > 1 && onPageChange(currentPage - 1);
  };

  return (
    <div className="   w-full block   mt-1">
      <div className="flex  w-full  mb-6 justify-center  gap-2">
        <nav className="flex items-center gap-x-1">
          <button
            type="button"
            onClick={onPrevious}
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span aria-hidden="true" className="sr-only">
              Previous
            </span>
          </button>
          <div className="flex items-center gap-x-1">{renderPageNumbers()}</div>
          <button
            type="button"
            onClick={onNext}
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span aria-hidden="true" className="sr-only">
              Next
            </span>
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
