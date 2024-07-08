import  {React, useState, useEffect, useRef } from 'react';
import ProductCard from '@/components/ProductCard';
import useCartStore from '../store/useCartStore';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const AllProduct = () => {
  const products = useCartStore((state) => state.products).filter(product => product.category === "phone");
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) { // Large screens
        setVisibleCards(4);
      } else if (width >= 768) { // Medium screens
        setVisibleCards(2);
      } else { // Small screens
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const totalWidth = carousel.scrollWidth - carousel.clientWidth;
        const currentScroll = carousel.scrollLeft;
        const newIndex = Math.round((currentScroll / totalWidth) * (products.length - visibleCards));
        setCurrentPage(Math.floor(newIndex / visibleCards));

        // Debugging logs
        console.log(`Current Scroll: ${currentScroll}`);
        console.log(`Total Width: ${totalWidth}`);
        console.log(`New Index: ${newIndex}`);
        console.log(`Current Page: ${Math.floor(newIndex / visibleCards)}`);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, [visibleCards, products.length]);

  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  const totalPages = Math.ceil(products.length / visibleCards);

  return (
    <div className="relative w-full h-full mb-36">
      <div className='flex justify-between'>
      <h1 className='text-4xl font-normal'>MOBILE PRODUCTS</h1>
      <Link href="/shop" className="relative uppercase underline hover:no-underline">
      Go to shop
    </Link>
      </div>
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent className="flex gap-2 md:gap-3 lg:gap-16">
          {products.map((product) => (
            <CarouselItem 
              key={product.id} 
              className="flex-none w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
            >
              <div className="p-1">
                <ProductCard product={product} className="bg-black" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentPage ? 'bg-black' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
