import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <section className="bg-[#FAF4F4] mx-a py-12 mx-auto max-w-screen-2xl">
      <div className="container  grid grid-cols-1 md:grid-cols-2 gap-8 w-[1440] h-[1050] md:h-[600]">
        {/* Card 1 */}
        <div className=" w-[605] h-562] p-4 text-center ">
          {/* Product Image */}
          <div className="w-full h-64 flex justify-center items-center ">
            <Image
              src="/im1.png" // Ensure the image is in the public folder
              alt="Side Table"
              className="object-contain mt-[200px]"
              width={500}
              height={200}
            />
          </div>
          {/* Product Title */}
          <h2 className="text-4xl font-semibold text-left text-black mt-40 md:mt-28  ml-64 md:ml-20">Side Table</h2>
          {/* View More Link */}
          <p className="text-black font-medium  text-left underline ml-72 md:ml-20 mt-6">
            View More
          </p>
        </div>

        {/* Card 2 */}
        <div className="  p-4 text-center bg-[#FAF4F4] ">
          {/* Product Image */}
          <div className="w-full h-64 flex justify-center items-center ">
            <Image
              src="/im2.png" // Ensure the image is in the public folder
              alt="Side Table"
              className="object-contain mt-[200px] mr-32 md:mr-0"
              width={500}
              height={200}
            />
          </div>
         {/* Product Title */}
         <h2 className="text-4xl font-semibold text-left text-black mt-32 md:mt-28  ml-60 md:ml-20">Side Table</h2>
          {/* View More Link */}
          <p className="text-black font-medium  text-left underline ml-72 md:ml-20 mt-6 ">
            View More
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
