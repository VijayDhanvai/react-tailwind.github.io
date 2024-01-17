function AccordionTitle(props) {
  const { handleClick, children, clickedIndex, className } = props;

  return (
    <a
      className={`${className} flex w-full items-center rounded-lg mt-5 justify-between cursor-pointer  border border-slate-200 px-3 py-2`}
      onClick={() => handleClick(clickedIndex)}
    >
      {children}
    </a>
  );
}
export default AccordionTitle;
