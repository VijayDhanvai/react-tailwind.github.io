function FilterButtons(props) {
  const { FilterButtons, handleClick, className } = props;
  let btnClass =
    " text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 capitalize";
  let btnClassActive =
    "  text-white border border-purple-700 bg-purple-800 ring-4 outline-none ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 capitalize";
  const filteredResults = [];
  FilterButtons.forEach((item) => {
    item.searchTern.forEach((term) => {
      !filteredResults.includes(term) && filteredResults.push(term);
    });
  });

  filteredResults.sort();

  return (
    <>
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
    </>
  );
}
export default FilterButtons;
