function TabButton(props) {
  //  console.log(props);
  const { handleClick, children, className } = props;

  return (
    <button
      className={` ${className}   hover:bg-sky-700 rounded-md px-4 py-2 border-2   border-blue-50  ease-in duration-300 text-white `}
      onClick={() => handleClick(children.toString().toLowerCase())}
    >
      {children}
    </button>
  );
}
export default TabButton;
