import React from 'react';
import useCartStore from '../store/useCartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
