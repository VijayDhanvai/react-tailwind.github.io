import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../Context";

function Navbar() {
  const cartCount = useContext(cartContext);

  let activeMenuClass = ({ isActive }) =>
    isActive ? "text-blue-600 px-2  underline" : "px-2";

  return (
    <nav className=" flex items-center drop-shadow-md  top-0 justify-between fixed bg-white w-full">
      <NavLink
        className="px-3 py-2 bg-sky-500 text-white  text-xl  font-title"
        to="/"
      >
        React & Tailwind Ultimate Kit
      </NavLink>

      <div className="">
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

        <NavLink className={activeMenuClass} to="">
          Cart {cartCount}
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
