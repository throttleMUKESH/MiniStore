import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cart);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Shopping Cart</Link>
      </h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
