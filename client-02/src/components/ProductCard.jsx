import React, { useState } from 'react';
import useCartStore from '../store/useCartStore';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [hovered, setHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div
      className='mainDiv w-full h-96 sm:w-72 my-6 shadow-md gap-2 relative overflow-hidden rounded-lg'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative'>
        <img src={product.img} alt={product.title} className='h-80 w-full object-cover' />
        {hovered && (
          <button
            onClick={() => handleAddToCart(product)}
            className='absolute w-2/3 font-medium left-0 right-0 mx-auto text-white px-4 py-2 hover:bg-sky-400 bg-red-500 rounded'
            style={{ bottom: '10px' }}
          >
            ADD TO CART
          </button>
        )}
      </div>
      <div className='p-4 flex justify-between items-center text-black'>
        <span className='text-lg font-normal uppercase'>{product.title}</span>
        <span className='text-lg'>${product.price}</span>
      </div>
      {addedToCart && (
        <div className='p-4 flex justify-center'>
          <Link to='/cart' className='bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded'>
            Go to Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
