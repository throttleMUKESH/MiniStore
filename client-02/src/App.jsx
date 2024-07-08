import { useState } from "react";

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



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/blog" element={<AllBlogsPage />} />
      
        <Route path="/blog/:id" element={<BlogPage/>} />
  
      </Routes>
    </Router>


   
  );
}

export default App;





