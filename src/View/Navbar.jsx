import CartImg from "../assets/img/cart.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../Context";
import React from "react";

function Navbar() {
  // console.log("Navbar");
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
          <svg
            className="w-3 h-3 me-2.5 inline-block align-middle -mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
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

export default React.memo(Navbar);
