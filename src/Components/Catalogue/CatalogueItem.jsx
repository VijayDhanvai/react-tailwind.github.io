import { useState, useContext } from "react";
import CartContext from "../../Context";
import AddToCart from "./AddToCart";

function CatalogueItem({ cardItems }) {
  const [cartItemsList, cartCountHandle] = useContext(CartContext);

  const addToCart = (cardIdClicked) => {
    cartCountHandle(cardIdClicked);
  };
  const checkAddedToCart = (id) => {
    if (
      cartItemsList.length != 0 &&
      cartItemsList.some((item) => item.id === id)
    ) {
      return "Remove from Cart";
    } else {
      return "Add to Cart";
    }
  };
  return (
    <>
      {cardItems.map((cardItem, index) => (
        <div key={cardItem.name} className="break-inside-avoid-column">
          <div className="mb-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg object-cover w-full  h-40"
              src={cardItem.image}
              alt=""
            />

            <div className="p-5 font-title">
              <div className="flex justify-between">
                <h5 className="mb-2  text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                  {cardItem.name}
                </h5>

                <AddToCart
                  addToCart={addToCart}
                  cardId={cardItem}
                  btnLabel={checkAddedToCart(cardItem.id)}
                ></AddToCart>
              </div>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {cardItem.info}
              </p>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-700 dark:text-white">
                ₹{cardItem.price}
              </span>
              <div className=" gap-1 flex items-center justify-between">
                {cardItem.searchTern.map((searchTern, index) => (
                  <div
                    key={index}
                    className="capitalize text-slate-500  bg-slate-100 text-sm  rounded-lg  px-2 py-0.5 text-center    "
                  >
                    #{searchTern}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CatalogueItem;
