"use client";

import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import Image from "next/image";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
            <Image src={item.imagePath} alt={item.name} style={{ width: "100px", height: "100px" }} />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
