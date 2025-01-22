import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const TopPicksSection = async () => {
  const products = await client.fetch(`
    *[_type == "product" && isFeaturedProduct == true && stockLevel > 0][0...4] {
      id,
      name,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }
  `);
  interface Prod {
    
    id: number;
    name: string;
    price: number;
    imagePath: string;
    category: string;
    date: string;
    description: string;
    stockLevel: number;
    isFeaturedProduct: boolean;
  }
  return (
    <section className="bg-white py-16 mx-auto max-w-screen-2xl ">
      <div className="container mx-auto text-center max-w-screen-2xl">
        {/* Title Section */}
        <h2 className="text-3xl  font-semibold medium-[36] text-black mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-12">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

       {/*  All Products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-gray-50 p-8">
  {products.map((product: Prod) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // Change "USD" to your desired currency code (e.g., "EUR", "GBP").
    }).format(product.price);

    return (
      <Link href={`/Shop/${product.id}`} key={product.id}>
        <div className="group relative mx-auto transform hover:scale-[1.05] duration-500 hover:cursor-pointer rounded-lg shadow-lg bg-white p-6">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src={product.imagePath}
              alt={product.name}
              width={287}
              height={287}
              className="w-full h-80 object-cover transform group-hover:scale-105 duration-500"
            />
          </div>
          {/* Product Name */}
          <h3 className="text-lg text-gray-800 font-medium mt-4 group-hover:text-blue-600">
            {product.name}
          </h3>
          {/* Product Price */}
          <p className="text-xl text-gray-900 font-bold mt-2 group-hover:text-green-500">
            {formattedPrice}
          </p>
          {/* Overlay Effect */}
        </div>
      </Link>
    );
  })}
</div>

        {/* View More Button */}
        <div className="mt-12">
          <a href="/Shop">
          <button className="text-black font-medium  text-left underline">
            View More
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopPicksSection;
