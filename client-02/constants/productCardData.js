import React, { useEffect, useState } from 'react';
import useCartStore from '../src/store/useCartStore';

const Card = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
useEffect(() => {
  
  const fetchProductsApi = async () => {
    try {
      const response = await fetch('https://api.example.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      console.log(response)
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  };
}, [fetchProductsApi])

  return (
    <div
      className='mainDiv w-full h-96 sm:w-72 my-6 shadow-md gap-2 relative overflow-hidden rounded-lg'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='relative'>
        <img src={product.img} alt={product.title} className='h-80 w-full object-cover' />
        {hovered && (
          <button onClick={() => addToCart(product)}
           className='absolute w-2/3 font-medium left-0 right-0 mx-auto text-white px-4 py-2 hover:bg-sky-400 bg-red-500 rounded' style={{ bottom: '10px' }}>
            ADD TO CART
          </button>
        )}
      </div>
      <div className='p-4 flex justify-between items-center text-black'>
        <span className='text-lg font-normal uppercase'>{product.title}</span>
        <span className='text-lg'>${product.price}</span>
      </div>
    </div>
  );
};

export default Card;
