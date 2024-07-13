import React, { useEffect, useState } from "react";
import useCartStore from "../store/useCartStore";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, fetchProducts } = useCartStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [fetchProducts]);

  // Filter products based on the search term
  const filteredProducts = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered products:', filteredProducts); // Debug log

  // Function to handle search term change
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex justify-start mb-4">
        <Link to="/" className="uppercase underline hover:no-underline mt-6 ml-4">
          Go to Home
        </Link>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, idx) => (
          <ProductCard key={product._id + idx} product={product} />
        ))}
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProductList;
