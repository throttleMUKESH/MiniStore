import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBar";
import Service from "@/components/service/Service";
import React from "react";
import BannerCarousel from "@/components/BannerCarousel";
import PhoneCarousel from "@/components/PhoneCarousel";
import WatchCarousel from "@/components/WatchCarousel";
import ShopOurInsta from "@/components/ShopOurInsta";
import TextCarousel from "@/components/TextWithStar/TextCarousel";
import Blog from "../components/blog/HomeBlog";

const HomePage = () => {
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
        <PhoneCarousel />
      </motion.div>
      <motion.div variants={pageVariants}>
        <WatchCarousel />
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
    </motion.div>
  );
};

export default HomePage;
