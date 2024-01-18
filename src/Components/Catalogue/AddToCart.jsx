import { useState } from "react";

function AddToCart({ cardId, addToCart }) {
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => addToCart(cardId)}
        className="bg-slate-400 text-white px-2 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;