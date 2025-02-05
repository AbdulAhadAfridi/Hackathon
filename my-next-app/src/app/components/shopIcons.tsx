"use client";

import { List } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";

interface ShopIconsProps {
  totalProducts: number;
  visibleProductsCount: number;
  onShowChange: (count: number) => void;
  onSortChange: (sortOption: string) => void;
}

const Shopicons: React.FC<ShopIconsProps> = ({
  totalProducts,
  visibleProductsCount,
  onShowChange,
  onSortChange,
}) => {
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("Default");

  const handleShowChange = (count: number) => {
    setShowCount(count);
    onShowChange(count);
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
    onSortChange(sortOption);
  };

  return (
    <div className="flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto bg-[#FAF4F4] px-4 py-4">
      {/* Left Section */}
      <div className="flex flex-wrap items-center space-x-2 md:space-x-4">
        {/* <FaSlidersH size={20} className="sm:text-xl" />
        <p className="text-black text-sm sm:text-lg cursor-pointer">Filter</p> */}
        <BsFillGridFill className="text-gray-600 text-xl sm:text-2xl cursor-pointer" />
        <List size={20} className="sm:text-xl" />
        <Image
          src="/log3.png"
          alt="Icon"
          width={3}
          height={0.5}
          className="hidden md:block"
        />
        <p className="text-black text-xs sm:text-sm lg:text-lg">
          Showing 1-{visibleProductsCount} of {totalProducts} results
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center space-x-6 sm:space-x-12 mt-4 lg:mt-0">
        {/* Show Dropdown */}
        <div className="flex items-center space-x-4">
          <p className="text-black text-sm sm:text-lg">Show</p>
          <select
            className="px-2 sm:px-4 py-1 sm:py-2 bg-white text-xs sm:text-lg rounded-md cursor-pointer"
            value={showCount}
            onChange={(e) => handleShowChange(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>

        {/* Sort by Dropdown */}
        <div className="flex items-center space-x-4">
          <p className="text-black text-sm sm:text-lg">Sort by</p>
          <select
            className="px-3 sm:px-6 py-1 sm:py-2 bg-white text-xs sm:text-lg rounded-md cursor-pointer"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shopicons;
