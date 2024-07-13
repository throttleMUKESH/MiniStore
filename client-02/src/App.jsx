import { useState, useEffect } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";


//test

import BlogPage from "./pages/BlogPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import AddProductPage from "./pages/DashBoard";



function App() {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/api/get-products');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<AddProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/blog" element={<AllBlogsPage />} />
      
        <Route path="/blog/:id" element={<BlogPage/>} />
  
      </Routes>
    </Router>
    // <div>
    //   <h1>Products</h1>
    //   <ul>
    //     {products.map(product => (
    //       <li key={product.id}>
    //         {product.title} - {product.price}

    //       </li>
    //     ))}
    //   </ul>
    //   {error && <p>Error: {error}</p>}
    // </div>

   
  );
}

export default App;





