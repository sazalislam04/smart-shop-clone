import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./Root/Root";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }

  return (
    <div className="pt-10 ">
      <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-100 dark:text-gray-800">
        <h2 className="text-xl font-semibold text-center ">
          {cart.length ? "Review Cart Item" : "Your cart is EMPTY!"}
        </h2>

        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>

        <div className="space-y-1 text-center">
          <p className="text-xl">
            Total amount:
            <span className="font-semibold"> {total} $</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-400 hover:dark:bg-violet-400 transition duration-300 hover:dark:text-gray-100"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
          </Link>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-100 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Place</span>Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
