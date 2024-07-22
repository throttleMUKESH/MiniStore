import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa";
import { IoCart } from "react-icons/io5"; // Ensure correct import path
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PageBox from "./PageBox";
import SideBar from "./SideBar";

const Navbar = ({
  scrollToSection,
  scrollToSection2,
  scrollToSection3,
  scrollToSection4,
  scrollToSection5,
}) => {
  const cartItems = useCartStore((state) => state.cart);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    try {
      // Call the logout API
      const response = await fetch("http://localhost:6000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need to include an authorization token if required
          // 'Authorization': `Bearer ${token}`
        },
        // Optionally, include credentials: 'include' if cookies are used
        // credentials: 'include',
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      // Perform any additional logout logic (e.g., clearing local storage, etc.)
      console.log("Logout successful");

      // Optionally redirect or perform other actions after logout
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error state or show an error message
    }
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
            <h4 className="cursor-pointer" onClick={scrollToSection}>
              HOME
            </h4>
            <h4 className="cursor-pointer" onClick={scrollToSection2}>
              SERVICE
            </h4>
            <h4 className="cursor-pointer" onClick={scrollToSection3}>
              PRODUCTS
            </h4>
            <h4 className="cursor-pointer" onClick={scrollToSection4}>
              WATCHES
            </h4>

            <h4 className="cursor-pointer" onClick={scrollToSection5}>
              BLOG
            </h4>
            <h4 className="flex cursor-pointer">
              <h4>
                {" "}
                <PageBox />{" "}
              </h4>
            </h4>
          </div>
          <div className="icons flex gap-1 md:gap-2 lg:gap-4 items-center">
            <Link to={"/shop"}>
              <IoMdSearch size={17} className="cursor-pointer" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CgProfile size={17} className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to={"/dashboard"}>Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {" "}
                  <SignedOut>
                    <SignInButton />
                    <DropdownMenuItem>
                  <Link to={"/dashboard"}>Admin</Link>
                </DropdownMenuItem>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to={"/cart"} className="cursor-pointer">
              <div className="flex relative r">
                <IoCart size={17} className="cursor-pointer" />
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
