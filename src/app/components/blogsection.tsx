import React from "react";
import Image from "next/image";
import { LuCalendarMinus2 } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

const BlogSection = () => {
  return (
    <section className="bg-white py-16 mx-auto max-w-screen-2xl ">
      <div className="container mx-auto text-center max-w-screen-2xl">
        {/* Heading */}
        {/* Header */}
       {/* Header */}
       <h2 className="text-5xl font-semibold text-gray-800 mb-4 mt-2">Our Blogs</h2>
        <p className="text-[#9F9F9F] mb-10">
          Find a bright idea to suit your taste with our great selection
        </p>

     {/* Blog Cards */}
     <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8 mt-4">
          {/* Blog Card 1 */} 
          <div className="bg-white w-[393] h-[555] ml-40 md:ml-16">
            <Image
              src="/blogsec1.png" // Replace with actual image paths
              alt="Blog 1"
              width={1000}
              height={200}
              className="w-[393] h-[393] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 mr-2">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-[25px] font-semibold underline mr-8"
              >
                Read More
              </a>
              <div className="flex gap-8 mt-6 text-lg">
                <span className="flex items-center ml-16 gap-2 text-gray-500">
                  <MdAccessTime className="text-black size-[25px]" />5 min
                </span>
                <span className="flex items-center gap-3 text-gray-500">
                  <LuCalendarMinus2 className="text-black size-[25px]" />
                  12th Oct 2022
                </span>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white ml-40 md:ml-16">
            <Image
              src="/blogsec2.png"
              alt="Blog 2"
              width={393}
              height={393}
              className="w-[393] h-[393] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 md:mr-14 mr-44">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-[25px] font-semibold underline md:mr-14 mr-44"
              >
                Read More
              </a>
              <div className="flex gap-8 mt-6 text-lg">
                <span className="flex items-center ml-16 gap-2 text-gray-500">
                  <MdAccessTime className="text-black size-[25px]" />5 min
                </span>
                <span className="flex items-center gap-3 text-gray-500">
                  <LuCalendarMinus2 className="text-black size-[25px]" />
                  12th Oct 2022
                </span>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white ml-40 md:ml-16">
            <Image
              src="/blogsec3.png"
              alt="Blog 3"
              width={393}
              height={393}
              className="w-[393] h-[393] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 md:mr-14 mr-44">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-[25px] font-semibold underline md:mr-14 mr-44"
              >
                Read More
              </a>
              <div className="flex gap-8 mt-6 text-lg">
                <span className="flex items-center ml-16 gap-2 text-gray-500">
                  <MdAccessTime className="text-black size-[25px]" />5 min
                </span>
                <span className="flex items-center gap-3 text-gray-500">
                  <LuCalendarMinus2 className="text-black size-[25px]" />
                  12th Oct 2022
                </span>
              </div>
            </div>
          </div>
          </div>
       
        {/* Footer Link */}
        <div className="mt-8  ">
        <a href="/Blog  " className="text-black text-[20px] font-semibold underline  ">
                View All Post
              </a>
        </div>
        </div>

    </section>
     
 
  );
};

export default BlogSection;
