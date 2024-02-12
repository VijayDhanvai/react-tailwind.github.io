import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartImage from "../assets/img/cart.png";
import CartContext from "../Store/Shopping-Cart-Context";
import gsap from "gsap";

function CartDetail() {
  const [cartItemsList, cartCountHandle, updateCartQty] =
    useContext(CartContext);

  let grandTotal = 0;

  cartItemsList.map(
    (item) => (grandTotal = grandTotal + item.price * item.quantity)
  );

  const handleQtyChange = (event, cart) => {
    cartItemsList.map((item) => {
      item.id == cart.id && (item.quantity = event.target.value);
      item.id == cart.id && updateCartQty(item);
    });
  };

  useEffect(() => {
    document.title = "Cart Detail Page";
    gsap.fromTo(
      ".cart-list",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, []);
  return (
    <>
      <div className="flex  mt-10 justify-between align-middle">
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
        <div className="bg-slate-100 w-8/12 max-h-screen   overflow-auto  p-6 rounded-lg border ">
          {!cartItemsList.length ? (
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
          ) : (
            cartItemsList.map((item) => (
              <div
                key={item.id}
                className="cart-list border-b border-gray-200 pb-4 mb-4"
              >
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
                      min="1"
                      max="10"
                      className="w-16 border border-gray-300 rounded py-1 px-2  "
                      defaultValue={item.quantity}
                      onChange={() => handleQtyChange(event, item)}
                    />
                    <button
                      onClick={() => cartCountHandle(item)}
                      className="ml-4  text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                    <p className="text-slate-700 mt-3 w-full text-sm font-semibold  text-right">
                      Total: ₹{(item.price * item.quantity).toFixed(2)} = (
                      {item.price} * {item.quantity})
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-white  w-4/12 ml-5 p-6 rounded-lg shadow-lg border  ">
          <p className="text-slate-700 text-xl font-semibold  border-b-2 mb-3 pb-1">
            <img
              src={CartImage}
              alt=""
              className="inline-block w-6 -mt-1 mr-2 align-middle"
            />
            Your Total
          </p>
          {cartItemsList &&
            cartItemsList.map((item) => (
              <div key={item.id} className="border-b mt-1 last:border-b-0">
                <h2 className="text-md text-gray-600  flex justify-between p-2">
                  {item.name} ({item.quantity}):
                  <span className="text-gray-900 font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </h2>
              </div>
            ))}

          <div className="text-md text-gray-600 font-semibold border-t-0 border flex justify-between p-2 bg-amber-100">
            Grand Total :
            <span className="text-gray-900 ">₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetail;
