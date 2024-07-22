import React, { useEffect, useState, useRef } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBar";
import Service from "@/components/service/Service";
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

  // Define refs for sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

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

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar 
        scrollToSection={() => scrollToSection(section1Ref)}
        scrollToSection2={() => scrollToSection(section2Ref)}
        scrollToSection3={() => scrollToSection(section3Ref)}
        scrollToSection4={() => scrollToSection(section4Ref)}
        scrollToSection5={() => scrollToSection(section5Ref)}
      />
      <div ref={section1Ref}>
        <BannerCarousel />
      </div>
      <div ref={section2Ref}>
        <Service />
      </div>
      <div ref={section3Ref}>
        <PhoneCarousel products={phoneProducts} />
      </div>
      <div ref={section4Ref}>
        <WatchCarousel products={watchProducts} />
      </div>
      <div ref={section5Ref}>
        <Blog />
      </div>
      <TextCarousel />
      <ShopOurInsta />
      <Footer />
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default HomePage;
