import React from "react";
import { BsCart3 } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { LuTag } from "react-icons/lu";
import { GrInsecure } from "react-icons/gr";

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className=" p-4 block md:flex gap-2">
            <BsCart3 className="text-2xl md:text-3xl text-sky-500"/>
            <div>
              <h1 className="font-normal text-2xl">FREE DELIVERY</h1>
              <p className="text-base opacity-45 font-medium">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className=" p-4 block md:flex gap-2">
            <PiMedal className="md:text-3xl text-2xl text-sky-500"/>
            <div>
              <h1 className="font-normal text-2xl">QUALITY GUARANTEE</h1>
              <p className="text-base opacity-45 font-medium">Dolor sit amet orem ipsu mcons ectetur adipi elit..</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className=" p-4 block md:flex gap-2">
            <LuTag className="md:text-3xl text-2xl text-sky-500"/>
            <div>
              <h1 className="font-normal text-2xl">DAILY OFFERS</h1>
              <p className="text-base opacity-45 font-medium">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className=" p-4 block md:flex gap-2">
            <GrInsecure className="md:text-3xl text-2xl text-sky-500"/>
            <div>
              <h1 className="font-normal text-2xl">100% SECURE PAYMENT</h1>
              <p className="text-base opacity-45 font-medium">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Service;
