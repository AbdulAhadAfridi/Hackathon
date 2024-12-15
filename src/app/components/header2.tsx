import React from "react";
import { AiOutlineExclamation, AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white w-full h-auto mx-auto max-w-screen-2xl">
      <div className="flex  md:flex-row items-center justify-between px-4 sm:px-8 md:px-[50px] lg:px-[140px] py-4 lg:py-[33px]">
        {/* Hamburger Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-white text-black">
            <SheetHeader className="text-3xl font-bold">
              Abdul Ahad
              <ul>
                <li className="py-16 flex flex-col text-xl font-semibold mt-4 gap-y-8">
                <Link href="/" className="hover:text-yellow-700">Home</Link>
                  <Link href="/Shop" className="hover:text-yellow-700">Shop</Link>
                  <Link href="/My-account" className="hover:text-yellow-700">My Account</Link>
                  <Link href="/Checkout" className="hover:text-yellow-700">Checkout</Link>
                  <Link href="/Cart" className="hover:text-yellow-700">Cart</Link>
                  <Link href="/Blog" className="hover:text-yellow-700">Blog</Link>
                  <Link href="/About" className="hover:text-yellow-700">About</Link>
                  <Link href="/Contact" className="hover:text-yellow-700">Contact</Link>
                  <Link href="/Singleproduct" className="hover:text-yellow-700">Single product </Link>

                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 xl:space-x-20 text-[18px] lg:text-[22px] font-semibold ml-36">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/Shop" className="hover:text-black">Shop</Link>
          <Link href="/About" className="hover:text-black">About</Link>
          <Link href="/Contact" className="hover:text-black">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-[30px] mt-4 lg:mt-0">
          <div className="flex gap-2">
            <Link href="/My-account">
              <FaRegUser size={25} className="cursor-pointer hover:text-black  " />
            </Link>
            <AiOutlineExclamation size={25} className="cursor-pointer hover:text-black ml-[-16] " />
          </div>
          <GoSearch size={30} className="cursor-pointer hover:text-black" />
          <IoIosHeartEmpty size={30} className="cursor-pointer hover:text-black" />
          {/* Shopping Cart Icon with Sidebar */}
          <Sheet>
            <SheetTrigger>
              <AiOutlineShoppingCart size={30} className="cursor-pointer hover:text-black" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[417px] h-full bg-white">
              <SheetHeader>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-[24px] font-bold text-black">Shopping Cart</h2>
                </div>
              </SheetHeader>

              {/* Cart Items */}
              <div className="p-4">
                <div className="flex items-center mb-4 mt-4">
                  {/* Product Thumbnail */}
                  <div className="w-16 h-16 bg-[#FBEBB5] rounded-[10px] flex items-center justify-center">
                    <Image
                      src="/sofa.png"
                      alt="Product Thumbnail"
                      width={150}
                      height={150}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="ml-4 flex-1">
                    <h3 className="text-gray-800 font-medium">Asgaard Sofa</h3>
                    <p className="text-black text-sm">
                      1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                    </p>
                  </div>
                  {/* Remove Button */}
                  <button className="text-white bg-[#9F9F9F] text-sm rounded-full w-6 h-6">X</button>
                </div>
                <div className="border-t border-[#D9D9D9] mt-10"></div>
              </div>

              {/* Subtotal */}
              <div className="p-4 mt-20 md:mt-80 mr-8">
                <div className="flex justify-between">
                  <span className="text-black font-medium">Subtotal</span>
                  <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-[#D9D9D9] mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/Cart"
                    className="border border-black rounded-full py-2 text-sm text-black text-center hover:bg-black hover:text-white"
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/Checkout"
                    className="border border-black rounded-full py-2 text-sm text-black text-center hover:bg-black hover:text-white"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
