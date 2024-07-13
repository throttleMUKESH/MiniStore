import React from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import ProductForm from '../components/dashboard/ProductForm';
import { Link } from 'react-router-dom';
import Admin from "../components/dashboard/Admin"

const AddProductPage = () => {
  return (
    <div>
     
      <ProductForm />
      <hr  className='bold bg-slate-900 mt-14 mb-14'/>
      <Admin/>
    </div>
  );
};

export default AddProductPage;
