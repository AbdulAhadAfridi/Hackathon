import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Feature from "../components/feature";
import CategoryFilters from "../components/categoryFilter";
import { client } from "@/sanity/lib/client";
import { PaginationComponent } from "../components/paginationComponent";
import { Slug } from "sanity";
// import SearchBar from "../components/searchbar";


const Shop = async () => {
  const products =
    await client.fetch(`*[_type == "product" && isFeaturedProduct == false]{
  id,
  name,
  imagePath,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,
  slug,

}`);

  interface Prod {
    slug: Slug;
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
    <>
      <section className="relative max-w-screen-2xl mx-auto mb-10">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">
            Shop
          </h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">Shop</span>
          </p>
        </div>
      </section>
       {/* <SearchBar/> */}
      
      <CategoryFilters/>
     
      {/*  All Products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-gray-50 p-8">
  {products.map((product: Prod) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // Change "USD" to your desired currency code (e.g., "EUR", "GBP").
    }).format(product.price);

    return (
      <Link href={`/Shop/${product.slug.current}`} key={product.id}>
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

     
      <PaginationComponent totalPages={10} currentPage={1} />
      <Feature/>
          </>
  );
};

export default Shop;
