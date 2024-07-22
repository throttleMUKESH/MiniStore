import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import ProductForm from '../components/dashboard/ProductForm';
import { Link } from 'react-router-dom';
import Admin from "../components/dashboard/Admin"
import { IoAddCircle } from "react-icons/io5";
import { Button } from '@/components/ui/button';

const AddProductPage = () => {
  return (
    <div className='flex justify-center items-center gap-8 p-4 bg-gray-100 rounded-lg shadow-lg'>
      <Link to="/addProduct" className="flex items-center text-gray-700 hover:text-sky-500 transition duration-200">
        <IoAddCircle size={25} />
        <span className="ml-2">Add Product</span>
      </Link>
      <Button className="bg-sky-500  hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
        <Link to="/admin" className="flex items-center">
          Admin Panel
        </Link>
      </Button>
    </div>
  );
};

export default AddProductPage;
