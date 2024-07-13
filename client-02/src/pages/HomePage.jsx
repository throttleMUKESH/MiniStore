import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBar";
import Service from "@/components/service/Service";
import React, { useEffect, useState } from "react";
import BannerCarousel from "@/components/BannerCarousel";
import PhoneCarousel from "@/components/PhoneCarousel";
import WatchCarousel from "@/components/WatchCarousel";
import ShopOurInsta from "@/components/ShopOurInsta";
import TextCarousel from "@/components/TextWithStar/TextCarousel";
import Blog from "@/components/blog/HomeBlog";
import useCartStore from "@/store/useCartStore";

const HomePage = () => {
  const { products, fetchProducts } = useCartStore();
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

  const phoneProducts = products.filter(product => product.category === 'phone');
  const watchProducts = products.filter(product => product.category === 'watch');

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="overflow-hidden"
    >
      <Navbar />
      <motion.div variants={pageVariants}>
        <BannerCarousel />
      </motion.div>
      <motion.div variants={pageVariants}>
        <Service />
      </motion.div>
      <motion.div variants={pageVariants}>
        <PhoneCarousel products={phoneProducts} />
      </motion.div>
      <motion.div variants={pageVariants}>
        <WatchCarousel products={watchProducts} />
      </motion.div>
      <motion.div variants={pageVariants}>
        <Blog />
      </motion.div>
      <motion.div variants={pageVariants}>
        <TextCarousel />
      </motion.div>
      <motion.div variants={pageVariants}>
        <ShopOurInsta />
      </motion.div>
      <motion.div variants={pageVariants}>
        <Footer />
      </motion.div>
      {error && <p>Error: {error}</p>}
    </motion.div>
  );
};

export default HomePage;
``
