import React from 'react';
// import products from '@/constants/data';
// import Card from '@/components/ProductCard';
import Navbar from '@/components/NavBar';
// import { Search } from 'lucide-react';
// import SearchBar from '@/components/SearchBar';
import ProductList from '@/components/ProductList';
import Footer from '@/components/footer/Footer';

const ShopPage = () => {
  return (
   <div>
     <Navbar/>

      <ProductList/>
  
    <Footer/>
   </div>
  );
};

export default ShopPage;
