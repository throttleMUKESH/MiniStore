import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/get-products');
        setProducts(response.data);
        toast.success('Products fetched successfully');
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/product/${id}`);
      setProducts(products.filter(product => product._id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error deleting product');
    }
  };

  return (
    <>
    <div className="max-w-4xl relative mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className='absoulte ml-[-80%] cursor-pointer '><Link to={"/dashboard"} className='border-b-2 border-gray-600 hover:border-b-0 font-semibold'>Go To Dashboard</Link></h2>
      <Toaster />
      <h2 className="text-3xl font-semibold mb-4 text-center">Admin Panel</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={product.img} alt={product.title} className="w-32 h-32 object-cover mb-2 rounded" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
              </div>
              <Button variant="outline" onClick={() => handleDelete(product._id)} className="mt-2 w-1/2 rounded-md bg-red-600 hover:bg-red-500">
                Delete
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
    </>
  );
};

export default Admin;
