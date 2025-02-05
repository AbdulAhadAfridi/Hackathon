




"use client";

import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import {  FaQuestion, FaRegUser } from "react-icons/fa";
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { getCartItems } from "@/app/actions/action";
import Notification from "./notificationComponent";
import SidebarWithSearch from "./SidebarWithSearch";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cartItems = getCartItems();
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.stockLevel, 0);
    setCartCount(totalQuantity);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNotificationIconClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white w-full mx-auto max-w-screen-2xl border-b">
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 lg:py-4">
        {/* Left Section - Logo and Menu */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] lg:hidden bg-white">
              <SheetHeader className="border-b pb-4 mb-4">
                <Image
                  src="/logoname.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-24 h-16"
                />
              </SheetHeader>
              <nav className="space-y-4 ">
                {['Home', 'Shop', 'Blogs', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item === 'Home' ? '' : item}`}
                    className="flex items-center py-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logoname.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-24 h-16 sm:w-28 sm:h-18"
            />
          </Link>
        </div>

        {/* Center Section - Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {['Home', 'Shop', 'Blogs', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item}`}
              className="text-base xl:text-lg font-medium hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/* Search - Hidden on small screens */}
          <div className="hidden sm:block">
            <SidebarWithSearch />
          </div>

          {/* Wishlist - Hidden on very small screens */}
          <Link href="/wishlist" className="">
            <IoIosHeartEmpty className="w-6 h-6 hover:text-primary transition-colors" />
          </Link>

          {/* Cart */}
          <Link href="/Cart" className="relative">
            <AiOutlineShoppingCart className="w-6 h-6 hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Notification - Hidden on small screens */}
          <button
            onClick={handleNotificationIconClick}
            className="hidden md:block hover:text-primary transition-colors"
          >
            <AiOutlineBell className="w-6 h-6" />
          </button>

          {/* Theme Toggle */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Help Center - Hidden on smaller screens */}
          <Link
            href="/Help-Center"
            className="hidden lg:flex items-center gap-1 text-sm hover:text-primary transition-colors"
          >
            <FaQuestion className="w-4 h-4" />
            <span>Help Center</span>
          </Link>

          {/* User Profile */}
          <Link href="/Login">
            <FaRegUser className="w-6 h-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-3 pb-3">
        <SidebarWithSearch />
      </div>

      {/* Notification Component */}
      {showNotification && (
        <Notification
          message="No New Notifications!"
          type="info"
          onClose={() => setShowNotification(false)}
          id=""
        />
      )}
    </header>
  );
};

export default Header;