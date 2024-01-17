import { useState } from "react";

function AddToCart({ cartQty, decQty, increaseQty }) {
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => decQty(cartQty)}
        className="bg-blue-500 text-white px-2 py-1 rounded-l"
      >
        -
      </button>
      <input
        type="text"
        className="w-10 px-2 py-1 text-center border"
        value={cartQty}
        readOnly
      />
      <button
        onClick={() => increaseQty(cartQty)}
        className="bg-blue-500 text-white px-2 py-1 rounded-r"
      >
        +
      </button>
    </div>
  );
}

export default AddToCart;
