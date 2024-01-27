import { useState, createContext, useCallback, useReducer } from "react";
import Toast from "../Components/Toast";

const CartContext = createContext({});
export default CartContext;

const ToastInit = { visibility: false, toastTitle: "" };
const toastReducer = (state, action) => {
  switch (action) {
    case "Added":
      return {
        visibility: true,
        toastTitle: "Item added to cart successfully.",
      };
    case "Removed":
      return {
        visibility: true,
        toastTitle: "Item removed from cart successfully.",
      };
    case "Hide":
      return {
        visibility: false,
        toastTitle: "",
      };
  }
};

export function CartContextProvider({ children }) {
  const [cartItemsList, setCartItemsList] = useState([]);
  //   const [cartItemsList, setCartItemsList] = useReducer(CartItemsListReducer,[]);

  const [cartLength, setCartLength] = useState(0);
  const [toast, toastDispatch] = useReducer(toastReducer, ToastInit);

  let temp = cartItemsList;
  const cartCountHandle = (updateCart) => {
    updateCart.quantity = 1;
    if (temp.length == 0) {
      temp.push(updateCart);
      toastDispatch("Added");
    } else if (!temp.some((item) => item.id === updateCart.id)) {
      temp.push(updateCart);
      toastDispatch("Added");
    } else {
      temp = temp.filter(function (obj) {
        return obj.id !== updateCart.id;
      });
      toastDispatch("Removed");
    }

    setCartItemsList(temp);
    setCartLength(temp.length);
    setTimeout(() => {
      toastDispatch("Hide");
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
    toastDispatch("Hide");
  }, []);

  const cart = [cartItemsList, cartCountHandle, updateCartQty];

  return (
    <CartContext.Provider value={cart}>
      {children}
      <Toast {...toast} hideToast={hideToast} />
    </CartContext.Provider>
  );
}
