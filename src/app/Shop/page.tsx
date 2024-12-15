import React from 'react'
import Header2 from '../components/header2'
import { PiGreaterThanBold } from 'react-icons/pi'
import { BsFillGridFill, } from 'react-icons/bs'
import Image from 'next/image'

const Shop = () => {
  return (
    <>
    <Header2/>
    

    <section className="relative max-w-screen-2xl mx-auto ">
  {/* Background Image */}
  <Image
    src="/shopimg1.png" // Replace with your image path
    alt="Background"
    width={1440}
    height={316}
    className="w-[1550px] h-[340px] "
  />

  {/* Slightly Left-Aligned Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center -translate-x-5">
    {/* Icon */}
    <div>
        <Image
        src="/logo.png" // Replace with your icon image path
        alt="Icon"
        width={0}
        height={0}
        className="w-16 h-16"
      />
    </div>

    {/* Section Title */}
    <h2 className=" sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6">Shop</h2>

    {/* Breadcrumb */}
    <p className="text-gray-600 text-sm flex items-center gap-x-2 mb-20">
      <span className="text-black text-lg font-semibold">Home</span>
      <PiGreaterThanBold className="text-black font-bold text-lg" />
      <span className="text-lg">Shop</span>
    </p>
  </div>
</section>


   {/* Product Page */}
<div className="flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto bg-[#FAF4F4] px-4 py-4">
  {/* Left Section */}
  <div className="flex flex-wrap items-center space-x-4  xl:ml-10">
    <Image
      src="/log1.png"
      alt="Filter Icon"
      className="w-10"
      width={0}
      height={0}
    />
    <p className="text-black text-lg">
      Filter
    </p>
    <BsFillGridFill className="text-gray-600 text-2xl" />
    <Image
      src="/log2.png"
      alt="Icon 2"
      className="w-6"
      width={0}
      height={0}
    />
    <Image
      src="/log3.png"
      alt="Icon 3"
      className=""
      width={0}
        height={0}
    />
    <p className="text-black text-lg">
      Showing 1-16 of 32 results
    </p>
  </div>

  {/* Right Section */}
  <div className="flex flex-wrap items-center space-x-12 mt-4 lg:mt-0 mr-10">
    <div className="flex items-center space-x-6">
      <p className="text-black text-lg">Show</p>
      <button className="px-4 py-2 bg-white text-[#9F9F9F] text-lg  rounded-md">
        16
      </button>
    </div>
    <div className="flex items-center space-x-6">
      <p className="text-black text-lg">Sort by</p>
      <button className="px-6 py-2 bg-white text-[#9F9F9F] text-lg  rounded-md">
        Default
      </button>
    </div>
  </div>
</div>

            





         {/* Product Grid 1 */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-white">
          {/* Product 1 */}
          <div className="mx-auto">
            <Image
              src="/pro1.png" 
              alt="Trenton modular sofa_3"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Trenton modular sofa_3</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/pro2.png" 
              alt="Granite dining table with dining chair"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Granite dining table with dining chair</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/pro3.png" 
              alt="Outdoor bar table and stool"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Outdoor bar table and stool</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/pro4.png" 
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Plain console with teak mirror</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>
        </div>

        {/* Product Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-white">
          {/* Product 1 */}
          <div className="mx-auto">
            <Image
              src="/shoppic1.png" 
              alt="Trenton modular sofa_3"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Grain coffee table</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 15,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/shoppic2.png" 
              alt="Granite dining table with dining chair"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Kent coffee table</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 225,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/shoppic3.png" 
              alt="Outdoor bar table and stool"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Round coffee table_color 2</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 251,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/shoppic4.png" 
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Reclaimed teak coffee table</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,200.00</p>
          </div>
        </div>
        {/* Product Grid 3 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-white">
          {/* Product 1 */}
          <div className="mx-auto">
            <Image
              src="/shppic1.png" 
              alt="Trenton modular sofa_3"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Plain console_</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 258,200.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/shppic2.png" 
              alt="Granite dining table with dining chair"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Reclaimed teak Sideboard</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 20,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/shppic3.png" 
              alt="Outdoor bar table and stool"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">SJP_0825 </h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 200,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/shppic4.png" 
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Bella chair and table</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 100,000.00</p>
          </div>
        </div>
        {/* Product Grid 4 */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-white">
          {/* Product 1 */}
          <div className="mx-auto">
            <Image
              src="/shpic1.png" 
              alt="Trenton modular sofa_3"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Granite square side table</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 258,800.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/shpic2.png" 
              alt="Granite dining table with dining chair"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Asgaard sofa</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 250,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/shpic3.png" 
              alt="Outdoor bar table and stool"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Maya sofa three seater</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 115,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <Image
              src="/shpic4.png" 
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Outdoor sofa set</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 244,000.00</p>
          </div>
     {/* Pagination Section */}
<div className="flex justify-center md:items-center flex-wrap space-x-4 mt-20 mb-20 w-full m md:ml-80 lg:ml-[450px]  xl:ml-[600px]">
  <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FBEBB5] text-gray-800 font-medium">
    1
  </button>
  <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    2
  </button>
  <button className=" md:mt-4  lg:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    3
  </button>
  <button className=" md:mt-4 xl:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    Next
  </button>
</div>

       </div>

      {/* Features Section */}
      <div className="bg-[#FAF4F4] py-10  mx-auto max-w-screen-2xl w-[1550] h-[500] lg:h-[400] xl:h-[300] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 mt-14 md:ml-48  lg:ml-4 xl:ml-40">
          {/* Feature 1 */}
          <div className="text-left  xl:ml-8">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0">Free Delivery</h3>
            <p className=" text-[#9F9F9F] text-xl">  
            For all oders over $50, consectetur adipim scing elit.            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-left lg:ml-[-120px] xl:ml-4 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0 ">90 Days Return</h3>
            <p className=" text-[#9F9F9F] text-xl">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-left  lg:mt-4 xl:mt-0 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold  sm:ml-28 lg:ml-0">Secure Payment</h3>
          
            <p className=" text-[#9F9F9F] text-xl flex xl:flex-col ">
              100% secure payment, consectetur
              <p className='ml-2 xl:ml-0'>adipiscing elit.</p>
            
            </p>
          </div>
        </div>
      </div>
    
    </> 
  )
}

export default Shop




