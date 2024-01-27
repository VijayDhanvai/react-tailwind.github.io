import { useState, createContext, useCallback } from "react";
import Toast from "../Components/Toast";

const CartContext = createContext({});
export default CartContext;

export function CartContextProvider({ children }) {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [toast, setToast] = useState({ visibility: false, toastTitle: "" });

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

  const hideToast = useCallback(() => {
    let temp = { visibility: false, toastTitle: "" };
    setToast(temp);
  }, []);

  const cart = [cartItemsList, cartCountHandle, updateCartQty];

  return (
    <CartContext.Provider value={cart}>
      {children}
      <Toast {...toast} hideToast={hideToast} />
    </CartContext.Provider>
  );
}
