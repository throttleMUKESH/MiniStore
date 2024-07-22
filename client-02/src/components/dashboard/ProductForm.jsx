import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '../ui/button';
import toast from 'react-hot-toast'; // Import toast from react-hot-toast

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    category: '',
    img: '',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: name === 'img' ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('img', formData.img);

    try {
      const response = await axios.post('http://localhost:3001/api/product', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Product added successfully:', response.data);

      // Show toast notification
      toast.success('Product added successfully');

      // Clear the form fields after successful submission
      setFormData({
        title: '',
        price: 0,
        category: '',
        img: '',
      });

      // Navigate to /admin route
      navigate('/admin');

    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error state or show an error message
      toast.error('Error adding product');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Image:</label>
          <input
            type="file"
            name="img"
            onChange={handleChange}
            required
            className="mt-2 block w-full text-gray-700 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="lg:w-1/3 bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
