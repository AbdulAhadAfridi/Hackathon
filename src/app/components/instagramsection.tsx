import React from "react";

const InstagramSection = () => {
  return (
    <section className="relative  max-w-screen-2xl mx-auto">
      {/* Background Image */}
      <img
        src="/instbg.png" // Replace with your image path
        alt="Background"
        className="w-[1540px] h-[450px] object-cover"
      />

      {/* Content (Center-Aligned) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Section Title */}
        <h2 className="text-6xl font-bold text-gray-800 mb-4">Our Instagram</h2>
        <p className="text-black text-[20px] mb-8">Follow our store on Instagram</p>

        {/* Call to Action */}
        <button className="px-20 py-4 text-black rounded-full shadow-md text-[22px] font-semibold bg-[#FAF4F4]">
          Follow Us
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
