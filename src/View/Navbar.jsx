import CartImg from "../assets/img/cart.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../Context";

function Navbar() {
  const [cartItemsList] = useContext(cartContext);

  let activeMenuClass = ({ isActive }) =>
    isActive ? "text-blue-600 px-2  underline" : "px-2";

  return (
    <nav className=" flex items-center drop-shadow-md  top-0 justify-between fixed bg-white w-full">
      <NavLink
        className="px-3 py-3 bg-sky-500 text-white  text-xl  font-title"
        to="/"
      >
        React & Tailwind Ultimate Kit
      </NavLink>

      <div className="  text-right">
        <NavLink className={activeMenuClass} to="/">
          Home
        </NavLink>

        <NavLink className={activeMenuClass} to="/tab">
          Tab
        </NavLink>

        <NavLink className={activeMenuClass} to="/accordiaon">
          Accordiaon
        </NavLink>
        <NavLink className={activeMenuClass} to="/catalogue">
          Catalogue
        </NavLink>
        <NavLink className={activeMenuClass} to="/blog">
          Blog
        </NavLink>

        <NavLink
          className={`${activeMenuClass} inline-block  mx-2  text-sky-500 hover:text-white border border-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center capitalize`}
          to="/cart"
        >
          <img
            src={CartImg}
            alt=""
            className="w-6 mr-1 align-middle inline-block"
          />
          Cart - {cartItemsList.length}
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
