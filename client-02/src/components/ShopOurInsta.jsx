// ShopOurInsta.js

import React from 'react';
import inst01 from "/insta-item1.jpg";
import inst02 from "/insta-item2.jpg";
import inst03 from "/insta-item3.jpg";
import inst04 from "/insta-item4.jpg";
import inst05 from "/insta-item5.jpg";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from 'framer-motion';

const InstaPic = [
  { id: 1, img: inst01 },
  { id: 2, img: inst02 },
  { id: 3, img: inst03 },
  { id: 4, img: inst04 },
  { id: 5, img: inst05 }
];

const ShopOurInsta = () => {
  return (
    <div className='flex flex-col items-center mb-24'>
      <h1 className='text-3xl font-normal mb-8'>SHOP OUR INSTA</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {InstaPic.map((pic) => (
          <div key={pic.id} className='relative h-64 rounded-md overflow-hidden'>
            <img
              src={pic.img}
              alt={`Instagram post ${pic.id}`}
              className='w-full h-full object-cover'
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://templatesjungle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white text-4xl"
              >
                <IoLogoInstagram />
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopOurInsta;
