"use client";

import { Product } from "@/types/product";
import { addToWishlist, removeFromWishlist } from "@/app/actions/action";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

interface ProductDetailProps {
  product: Product;
}

export default function WishlistButton({ product }: ProductDetailProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsInWishlist(wishlist.some((item: Product) => item._id === product._id));
  }, [product._id]);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product._id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${product.name} removed from wishlist!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addToWishlist(product);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${product.name} added to wishlist!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="product-detail">
      {/* Wishlist Icon */}
      <button
        onClick={handleWishlistToggle}
        className="text-4xl text-red-500 "
      >
        {isInWishlist ? "♥" : "♡"} {/* Filled or outlined heart */}
        {/* Filled or outlined heart */}
      </button>
      {/* Rest of product detail */}
    </div>
  );
}
