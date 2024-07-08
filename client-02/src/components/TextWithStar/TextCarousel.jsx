import React, { useState } from "react";
import doubleInvertedComma from "/doble-inverted-comma.jfif";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      text: "“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”",
      author: "JENNIE ROSE",
    },
    {
      id: 2,
      text: '“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”',
      author: "EMMA CHAMBERLIN",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center w-7/8 p-8">
        <div className="w-24 mx-auto flex justify-center text-center py-4">
          <img
            src={doubleInvertedComma}
            alt="double inverted comma"
            className="mx-auto opacity-30"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
        <div className="relative w-full flex justify-center py-8">
          <div className="flex flex-col w-5/6  justify-center p-6  ">
            <div className="text-center">
              <h1 className="text-3xl font-light opacity-90 tracking-wide  mb-4">{slides[currentSlide].text}</h1>
              <div className="flex justify-center mb-4">
                <FaStar className="text-sky-500" />
                <FaStar className="text-sky-500" />
                <FaStar className="text-sky-500" />
                <FaRegStarHalfStroke className="text-sky-500" />
                <FaRegStar />
              </div>
              <span className="text-gray-700">{slides[currentSlide].author}</span>
            </div>
          </div>
          <button
            className="absolute left-1  md:top-4/5 transform -translate-y-1/2 opacity-70 text-zinc-500 p-2 rounded"
            onClick={handlePrev}
          >
            <MdOutlineKeyboardArrowLeft size={70}/>
          </button>
          <button
            className="absolute right-1  md:top-4/5 transform -translate-y-1/2 opacity-70 text-zinc-500 p-2 rounded"
            onClick={handleNext}
          >
            <MdOutlineKeyboardArrowRight size={70}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
