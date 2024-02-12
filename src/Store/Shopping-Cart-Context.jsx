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

const cartInitialValue = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

export function CartContextProvider({ children }) {
  const [cartItemsList, setCartItemsList] = useState(cartInitialValue);

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

    saveCartData(temp);
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
    saveCartData(temp1);
  };

  const saveCartData = (cartData) => {
    setCartItemsList(cartData);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
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
