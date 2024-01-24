import { useState } from "react";

function AddToCart({ cardId, addToCart, btnLabel }) {
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => addToCart(cardId)}
        className="bg-slate-400 hover:bg-sky-500 text-white px-2 py-1 rounded"
      >
        {btnLabel}
      </button>
    </div>
  );
}

export default AddToCart;
