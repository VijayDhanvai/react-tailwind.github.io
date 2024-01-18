import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, createContext } from "react";

import CartContext from "../Context";
function Layout() {
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const cartCountHandle = (updateCart) => {
    const temp = cartItems;

    if (!temp.includes(updateCart)) {
      temp.push(updateCart);
    }
    setCartItems(temp);
    console.log(cartItems);
    setCartLength(cartItems.length);
  };

  let cart = [cartLength, cartCountHandle];
  return (
    <div>
      <CartContext.Provider value={cart}>
        <Navbar />
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

        <div className="lg:container mx-auto mt-16 px-4">
          <Outlet />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default Layout;
