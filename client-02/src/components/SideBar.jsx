import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { IoMdArrowDropdown } from 'react-icons/io';
import PageBox from './PageBox';
  

const SideBar = () => {
  return (
   
      <DropdownMenu >
    <DropdownMenuTrigger><RxHamburgerMenu /></DropdownMenuTrigger>
    <DropdownMenuContent className="md:hidden sm:w-[50%] bg-[#EDF1F3]">
      <DropdownMenuLabel>MiniStore.</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>HOME</DropdownMenuItem>
      <DropdownMenuItem>SERVICES</DropdownMenuItem>
      <DropdownMenuItem>PRODUCTS</DropdownMenuItem>
      <DropdownMenuItem>WATCHES</DropdownMenuItem>
      <DropdownMenuItem>SALE</DropdownMenuItem>
      <DropdownMenuItem><div><PageBox className="md:hidden block"/></div></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
 
  
  )
}

export default SideBar