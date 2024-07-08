import React, { useState } from "react";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";

import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import SideBar from "./SideBar";
import PageBox from "./PageBox";
import { Link } from "react-router-dom";

import useCartStore from "../store/useCartStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cart);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-16 mt-2 flex items-center bg-[#F8F9FA]">
      <div className="container w-full mx-auto flex justify-between items-center px-4 md:px-8 lg:px-14">
        <div className="left">
          <h1 className="text-3xl font-semibold tracking-wide opacity-70">
            MiniStore.
          </h1>
        </div>
        <div className="right hidden md:flex justify-end gap-5 md:gap-2 lg:gap-14 items-center w-full">
          <div className="nav-links flex flex-wrap gap-1 md:gap-3 lg:gap-8 items-center font-normal opacity-50">
            <h4 className="cursor-pointer">HOME</h4>
            <h4 className="cursor-pointer">SERVICE</h4>
            <h4 className="cursor-pointer">PRODUCTS</h4>
            <h4 className="cursor-pointer">WATCHES</h4>
            <h4 className="cursor-pointer">SALE</h4>
            <h4 className="cursor-pointer">BLOG</h4>
            <h4 className="flex cursor-pointer">
              <h4>
                {" "}
                <PageBox />
              </h4>
            </h4>
          </div>
          <div className="icons flex gap-1 md:gap-2 lg:gap-4 items-center">
            <Link to={"/shop"}>
              <IoMdSearch size={17} className="cursor-pointer" />
            </Link>

            {
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CgProfile size={17} className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            }

            <Link to={"/cart"} className="cursor-pointer">
              <div className="flex relative r">
                <FaCartShopping size={17} className="cursor-pointer" />
                <span className="flex items-center justify-center text-red-500 h-4 w-4 mx-2 my-[-11px] rounded-full border-[1px] border-zinc-500 absolute font-bold">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:hidden cursor-pointer">
          <SideBar className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
