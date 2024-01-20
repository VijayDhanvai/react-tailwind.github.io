import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, createContext, useEffect } from "react";

import CartContext from "../Context";
import Toast from "../Components/Toast";
function Layout() {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [toast, setToast] = useState({ visibility: false, toastTitle: "" });
  const [cartLength, setCartLength] = useState(0);

  let temp = cartItemsList;
  const cartCountHandle = (updateCart) => {
    updateCart.quantity = 1;
    if (temp.length == 0) {
      temp.push(updateCart);
      toast.visibility = true;
      toast.toastTitle = "Item added to cart successfully.";
    } else {
      if (!temp.some((item) => item.id === updateCart.id)) {
        temp.push(updateCart);
        toast.visibility = true;
        toast.toastTitle = "Item added to cart successfully.";
      } else {
        temp = temp.filter(function (obj) {
          toast.visibility = true;
          toast.toastTitle = "Item removed from cart successfully.";
          return obj.id !== updateCart.id;
        });
      }
    }
    setToast(toast);
    setCartItemsList(temp);
    setCartLength(temp.length);
    setTimeout(() => {
      let temp = { visibility: false, toastTitle: "" };
      setToast(temp);
    }, 5000);
  };

  const updateCartQty = (updateQty) => {
    let temp1 = cartItemsList.map((item) => {
      item.id == updateQty.id && (item.quantity = updateQty.quantity);
      return item;
    });
    setCartItemsList(temp1);
  };

  const hideToast = () => {
    let temp = { visibility: false, toastTitle: "" };
    setToast(temp);
  };

  let cart = [cartItemsList, cartCountHandle, updateCartQty];
  return (
    <div>
      <CartContext.Provider value={cart}>
        <Navbar />
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

        <div className="lg:container mx-auto mt-16 px-4">
          <Toast
            visibility={toast.visibility}
            toastTitle={toast.toastTitle}
            hideToast={hideToast}
          />
          <Outlet />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default Layout;
