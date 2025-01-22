import Image from 'next/image'
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'

const filterandSearch = () => {
  return (
    <>
    <div className="flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto bg-[#FAF4F4] px-4 py-4">
    {/* Left Section */}
    <div className="flex flex-wrap items-center gap-4 xl:ml-10">
      <Image
        src="/log1.png"
        alt="Filter Icon"
        className="w-8 sm:w-10"
        width={40}
        height={40}
      />
      <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
        Filter
      </p>
      <BsFillGridFill className="text-gray-600 text-xl sm:text-2xl" />
      <Image
        src="/log2.png"
        alt="Icon 2"
        className="w-5 sm:w-6"
        width={24}
        height={24}
      />
      <Image
        src="/log3.png"
        alt="Icon 3"
        className="w-1 sm:w-1 h-6 sm:h-8"
        width={24}
        height={24}
      />
      <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
        Showing 1-16 of 32 results
      </p>
    </div>

    {/* Right Section */}
    <div className="flex flex-wrap items-center gap-6 mt-4 lg:mt-0 mr-4 sm:mr-10">
      <div className="flex items-center gap-4">
        <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
          Show
        </p>
        <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-[#9F9F9F] text-xs sm:text-sm md:text-lg lg:text-lg rounded-md">
          16
        </button>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
          Sort by
        </p>
        <button className="px-4 sm:px-6 py-1 sm:py-2 bg-white text-[#9F9F9F] text-xs sm:text-sm md:text-lg lg:text-lg rounded-md">
          Default
        </button>
      </div>
    </div>
  </div>
  </>
  )
}

export default filterandSearch
