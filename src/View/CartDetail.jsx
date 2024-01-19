import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";

function CartDetail() {
  const [cartItemsList, cartCountHandle] = useContext(CartContext);
  console.log(cartItemsList);

  useEffect(() => {
    document.title = "Cart Detail Page";
  }, []);
  return (
    <>
      <div className="flex  mt-20 justify-between align-middle">
        <h1 className="text-slate-700 text-xl font-semibold    ">
          Products added to Cart - {cartItemsList.length}
        </h1>
        <div>
          Add more products
          <Link
            to="/catalogue"
            className="inline-block  mx-2  text-sky-500 hover:text-white border border-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center capitalize"
          >
            Catalogue
          </Link>
        </div>
      </div>
      <div className="flex mt-4  justify-between">
        <div className="bg-slate-100 w-8/12  overflow-auto  p-6 rounded-lg border ">
          {cartItemsList &&
            cartItemsList.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end flex-wrap">
                    <input
                      type="number"
                      className="w-16 border border-gray-300 rounded py-1 px-2  "
                      defaultValue={item.quantity}
                    />
                    <button
                      onClick={() => cartCountHandle(item)}
                      className="ml-4  text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                    <p className="text-slate-700 mt-3 w-full text-sm font-semibold  text-right">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          {!cartItemsList.length && (
            <div>
              No Item added to cart, please add Products from
              <Link
                to="/catalogue"
                className="inline-block  mx-2  text-sky-500 hover:text-white border border-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-3 py-1 text-center capitalize"
              >
                Catalogue
              </Link>
              Page.
            </div>
          )}
        </div>

        <div className="bg-white  w-4/12 ml-5 p-6 rounded-lg shadow-lg border  ">
          <p className="text-slate-700 text-xl font-semibold ">Total</p>
        </div>
      </div>
    </>
  );
}

export default CartDetail;
