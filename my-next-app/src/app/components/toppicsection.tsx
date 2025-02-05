import React, { Suspense } from "react";
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
      category,
      slug
    }
  `);

  interface Prod {
    id: number;
    name: string;
    price: number;
    imagePath: string;
    category: string;
    description: string;
    stockLevel: number;
    isFeaturedProduct: boolean;
    slug: { current: string };
  }

  return (
    <Suspense>
      <section className="bg-white py-16 mx-auto max-w-screen-2xl">
        <div className="container mx-auto text-center max-w-screen-2xl">
          <h2 className="text-3xl font-semibold text-black mb-4">Top Picks For You</h2>
          <p className="text-gray-600 mb-12">
            Find a bright idea to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-50 p-8">
            {products.map((product: Prod) => {
              const formattedPrice = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price);

              return (
                <Link href={`/Shop/${product.slug.current}`} key={product.id}>
                  <div className="group relative mx-auto transform hover:scale-105 duration-500 cursor-pointer rounded-lg shadow-lg bg-white p-6">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        width={287}
                        height={287}
                        className="w-full h-80 object-cover transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <h3 className="text-lg text-gray-800 font-medium mt-4 group-hover:text-blue-600">
                      {product.name}
                    </h3>
                    <p className="text-xl text-gray-900 font-bold mt-2 group-hover:text-green-500">
                      {formattedPrice}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <Link href="/Shop">
              <button className="text-black font-medium underline">View More</button>
            </Link>
          </div>

        </div>
      </section>
    </Suspense>
  );
};

export default TopPicksSection;
