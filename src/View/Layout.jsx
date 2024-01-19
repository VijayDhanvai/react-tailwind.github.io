import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, createContext } from "react";

import CartContext from "../Context";
function Layout() {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const cartCountHandle = (updateCart) => {
    let temp = cartItemsList;

    if (temp.length == 0) temp.push(updateCart);
    else {
      if (!temp.some((item) => item.id === updateCart.id)) {
        temp.push(updateCart);
      } else {
        temp = temp.filter(function (obj) {
          return obj.id !== updateCart.id;
        });
      }
    }
    setCartItemsList(temp);
    setCartLength(temp.length);
  };

  let cart = [cartItemsList, cartCountHandle];
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
