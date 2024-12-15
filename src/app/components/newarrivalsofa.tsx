import React from "react";
import Image from "next/image";

const Newarrival = () => {
  return (
    <section>
      <div className="bg-[#FFF9E5] mx-auto max-w-screen-2xl  md:h-[800] ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          {/* Sofa Image */}
          <div className="w-full  flex justify-center ">
            <Image
              src="/arri.png" // Replace this with the actual image path
              alt="Asgaard Sofa"
              width={983}
              height={799}
              className="object-contain w-full max-w-[900px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/4 text-center md:text-left px-4">
            <h4 className="text-black text-3xl font-semibold mb-2">
              New Arrivals
            </h4>
            <h1 className="text-5xl font-bold text-black mb-4">
              Asgaard Sofa
            </h1>
            <button className="mt-6 px-8 py-4 mb-10 md:mb-0 bg-[#FFF9E5] text-black outline-none border-2 border-black text-xl hover:bg-black hover:text-white transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newarrival;
