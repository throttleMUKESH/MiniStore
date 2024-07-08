import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const PageBox = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        PAGES
        <IoMdArrowDropdown className="ml-1 mt-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="  bg-[#EDF1F3]">
        <DropdownMenuItem>ABOUT</DropdownMenuItem>
        <DropdownMenuItem>BLOG</DropdownMenuItem>
        <DropdownMenuItem><Link to={"/shop"}>SHOP</Link></DropdownMenuItem>
        <DropdownMenuItem><Link to={"/cart"}>CART</Link></DropdownMenuItem>
        <DropdownMenuItem><Link to={"/checkout"}>CHECKOUT</Link></DropdownMenuItem>
        <DropdownMenuItem>SINGLE POST</DropdownMenuItem>
        <DropdownMenuItem>SINGLE PRODUCT</DropdownMenuItem>
        <DropdownMenuItem>CONTACT</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PageBox;
