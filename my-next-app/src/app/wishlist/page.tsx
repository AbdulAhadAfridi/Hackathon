"use client";

import { useEffect, useState } from "react";
import { getWishlistItems, removeFromWishlist } from "@/app/actions/action";
import { Product } from "@/types/product";
import Swal from "sweetalert2";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    setWishlist(getWishlistItems());
  }, []);

  const handleRemove = (productId: string) => {
    removeFromWishlist(productId);
    setWishlist(getWishlistItems()); // Refresh wishlist
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product removed from wishlist!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (!wishlist.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
        <div className="p-4 bg-gray-100 rounded-full shadow-sm mb-6">
          <IoIosHeartEmpty size={24} className="cursor-pointer hover:text-black" />
        </div>
        <p className="text-gray-800 text-xl font-semibold">Your wishlist is empty</p>
        <p className="text-gray-500 text-sm mt-2">
          Start shopping now to add items to your wishlist!
        </p>
        <Link href="/Shop">
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative max-w-screen-2xl mx-auto mb-12">
        {/* Background Image */}
        <Image
          src="/shopimg1.png" // Replace with your image path
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />

        {/* Slightly Left-Aligned Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div>
            <Image
              src="/logo.png" // Replace with your icon image path
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Wishlist</h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <Link href="/Shop" className="text-black text-lg font-semibold">
              Shop
            </Link>
            <CgChevronRight className="text-black font-bold text-lg" />
            <span className="text-lg">Wishlist</span>
          </p>
        </div>
      </section>

      <div className="p-4 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product._id} className=" border  transform hover:scale-105 duration-500 cursor-pointer rounded-lg shadow-lg bg-white p-6">
              <Image
                src={product.imagePath}
                alt={product.name}
                className="w-full h-40 object-cover rounded transform group-hover:scale-105 duration-500"
                width={500}
                height={500}
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>

              {/* Price, Size, and Color */}
              <p className="text-md font-semibold mt-2 text-gray-800">Price: ${product.price}</p>
              <p className="text-md mt-1 text-gray-800">Size: {product.size}</p>
              <p className="text-md mt-1 text-gray-800">Color: {product.colors}</p>

              <button
                onClick={() => handleRemove(product._id)}
                className="mt-2 px-4 py-2 bg-[#FBEBB5] hover:bg-yellow-200 rounded-[10px] text-black  transform hover:scale-105 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



// <Link href={`/Shop/${product.slug.current}`} key={product.id}>
//                   <div className="group relative mx-auto transform hover:scale-105 duration-500 cursor-pointer rounded-lg shadow-lg bg-white p-6">
//                     <div className="overflow-hidden rounded-lg">
//                       <Image
//                         src={product.imagePath}
//                         alt={product.name}
//                         width={287}
//                         height={287}
//                         className="w-full h-80 object-cover transform group-hover:scale-105 duration-500"
//                       />
//                     </div>
//                     <h3 className="text-lg text-gray-800 font-medium mt-4 group-hover:text-blue-600">
//                       {product.name}
//                     </h3>
//                     <p className="text-xl text-gray-900 font-bold mt-2 group-hover:text-green-500">
//                       {formattedPrice}
//                     </p>
//                   </div>
//                 </Link>