import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-gray-100 rounded-full shadow-md px-2 py-1">
        <button
          onClick={decreaseQuantity}
          className="text-xl font-semibold text-gray-500 hover:text-black"
        >
          -
        </button>
        <span className="mx-6 text-lg font-medium">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="text-xl font-semibold text-gray-500 hover:text-black"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
