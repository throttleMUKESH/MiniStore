import React, { useState } from 'react';
import useCartStore from '../store/useCartStore';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = useCartStore((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-full h-full relative'>
      <div className="flex justify-start mb-4">
        <Link to="/" className="uppercase underline hover:no-underline mt-6 ml-4">
          Go to Home
        </Link>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
