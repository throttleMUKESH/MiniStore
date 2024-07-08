import React from 'react';
import useCartStore from '../store/useCartStore';

const Checkout = () => {
  const cartItems = useCartStore((state) => state.cart);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2 p-2 bg-gray-200 rounded">
                <span>{item.title} - ${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
            <button
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('Checkout complete')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
