import React from "react";
import useCartStore from "../store/useCartStore";
import Checkout from "./Checkout";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2 p-2 bg-gray-200 rounded"
              >
                <span>
                  {item.title} - ${item.price}
                </span>
                <img src={item.img}
                width={40}
                height={40}
                 />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button className={`px-4 py-2 bg-sky-400 rounded-xl text-white `}>
            <Link to="/checkout" className="text-xl font-medium">Checkout</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
