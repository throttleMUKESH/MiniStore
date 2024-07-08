import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" mt-11 flex flex-col  mx-auto">
      <div className="upper-footer w-full justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="first w-full mb-3">
          <h1 className="title text-3xl font-medium">MiniStore.</h1>
          <h3 className="opacity-75">
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </h3>
          <div className="social-media-icons flex mt-4 justify-evenly">
            <FaFacebook />
            <AiOutlineInstagram />
            <FaXTwitter />
            <GrLinkedin />
          </div>
        </div>
        <div className="second w-full mb-3">
          <h1 className="title text-xl mb-3">QUICK LINKS</h1>
          <div className="links flex flex-col text-[14px]">
            <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/blog">BLOGS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="third w-full mb-3">
          <h1 className="title text-xl mb-3">HELP & INFO HELP</h1>
          <div className="links flex flex-col text-[14px]">
            <Link to="/contact">TRACK YOUR ORDER</Link>
            <Link to="/contact">RETURNS POLICIES</Link>
            <Link to="/contact">SHIPPING + DELIVERY</Link>
            <Link to="/contact">CONTACT US</Link>
            <Link to="/contact">FAQS</Link>
          </div>
        </div>
        <div className="fourth w-full">
          <h1 className="title text-xl mb-3">CONTACT US</h1>
          <div>
            <h5 className="opacity-50 leading-tight mb-3">
              Do you have any queries or suggestions?{" "}
              <span className="opacity-100 tracking-tighter">
                chaudharymukesh370@gmail.com
              </span>
            </h5>
            <h5 className="opacity-50 leading-tight">
              If you need support? Just give us a call.{" "}
              <span className="opacity-100 tracking-tighter">9827711000</span>
            </h5>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="lower-footer w-full  justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <div className="weShip flex gap-1 items-center">
          <h3>We ship with: </h3>
          <img src="/dhl.png" alt="DHL" width={35} height={35} />
          <img
            src="/shippingcard.png"
            alt="Shipping Card"
            width={35}
            height={35}
          />
        </div>
        <div className="payment flex items-center gap-5">
          <h3>Payment options: </h3>
          <img src="/visa.jpg" alt="Visa" width={35} height={35} />
          <img src="/mastercard.jpg" alt="MasterCard" width={35} height={35} />
          <img src="/paypal.jpg" alt="PayPal" width={35} height={35} />
        </div>
        <div className="copyright mt-5">
          <h2>© 2024 MiniStore.</h2>
          <h2>Designed by TemplateJungles</h2>
          <h2>Distributed by ThemeWagon</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
