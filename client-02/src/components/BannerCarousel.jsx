import React, { useState } from 'react';
import banner01 from "/banner-image.png";
import banner02 from "/banner-image.png";
import { Link } from 'react-router-dom';

const slidesData = [
  {
    img: banner01,
    title: 'Nature Image',
    description: 'YOUR PRODUCTS ARE GREAT ',
    button: 'Shop Now'
  },
  {
    img: banner02,
    title: 'Architecture Image',
    description: "TECHNOLOGY HACK YOU WON'T GET",
    button: 'Shop Now'
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative mb-10">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="flex">
                <div className="w-1/2 md:z-10relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                    <button className="text-white text-lg bg-red-500 rounded-full px-4 py-2 hover:bg-red-600" onClick={() => console.log('Shop Now clicked')}>{slide.button}</button>
                  </div>
                  <div className="absolute mt-11  text-white">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center items-center">
                        {/* <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-black font-semibold">{slide.title}</h2> */}
                       
                      </div>
                    </div>
                     <p className=" absolute md:mt-12 w-full sm:ml-9 mt-3 lg:ml-28 md:ml-12  lg:text-5xl md:text-3xl sm:text-xl text-black font-semibold">{slide.description}</p>
                    <button className='absolute mt-8 sm:mt-40 lg:mt-96 md:mt-60 w-28 md:w-72 h-10 md:h-16 flex-shrink  rounded-md bg-black px-2 py-1'>
      <Link to={"/shop"} className='rounded-md text-xl text-white font-medium'>
        {slide.button}
      </Link>
    </button>
                  </div>
                 
                </div>
                <div className="w-1/2  md:z-0">
                  <img src={slide.img} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full shadow-md z-10" onClick={goToPreviousSlide}>&#10094;</button>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full shadow-md z-10" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

export default BannerCarousel;
