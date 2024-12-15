import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import Header2 from "../components/header2";
import Image from "next/image";
import { AiFillDelete,} from "react-icons/ai";

const Cart = () => {
  return (
    <>
    <Header2 />
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
    <h2 className=" sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6">Cart</h2>

    {/* Breadcrumb */}
    <p className="text-black text-sm flex items-center gap-x-2 mb-20">
      <span className="text-black text-lg font-semibold">Home</span>
      <PiGreaterThanBold className="text-black font-bold text-lg" />
      <span className="text-lg">Cart</span>
    </p>
  </div>
</section>

<div className="max-w-screen-2xl mx-auto w-full h-[525] bg-white">
    <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Table */}
            <div className="lg:col-span-2">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#FFF9E5]">
                            <th className="py-3 px-4 font-medium text-[#000000]">Product</th>
                            <th className="py-3 px-4 text-left font-medium text-[#000000]">Price</th>
                            <th className="py-3 px-4 text-left font-medium text-[#000000]">Quantity</th>
                            <th className="py-3 px-4 text-left font-medium text-[#000000]">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4 px-4 flex items-center">
                                <div>
                                    <Image
                                        src="/arri.png"
                                        alt="Product"
                                        width={150}
                                        height={150}
                                        className="w-20 h-20 object-cover bg-[#FBEBB5] rounded-[10px]"
                                    />
                                </div>
                                <span className="text-[#9F9F9F] text-[16px] ml-4">Asgard sofa</span>
                            </td>
                            <td className="py-4 px-4 text-[#9F9F9F] text-[16px]">Rs. 250,000.00</td>
                            <td className="py-4 px-4">
                                <button
                                    type="button"
                                    className="ml-4 font-semibold w-[32px] h-[32px] text-[#000000] border-[1px] border-[#9F9F9F] rounded-[10px] hover:bg-black hover:text-white"
                                >
                                    1
                                </button>
                            </td>
                            <td className="py-4 px-4 text-[#000000] text-[16px] font-semibold">Rs. 250,000.00</td>
                            <AiFillDelete className="text-[#FBEBB5] text-[25px] mb-[30px] ml-[-35] " />
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Cart Totals */}
            <div className="lg:col-span-1 ml-8">
                <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-sm">
                    <h2 className="text-[32px] font-semibold mb-6">Cart Totals</h2>
                    <div className="flex justify-between items-center mb-4 mt-10">
                        <span className="text-[#000000] font-semibold text-[16px]">Subtotal</span>
                        <span className="text-[#9F9F9F] text-[16px]">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <span className="text-[16px] font-medium text-[#000000]">Total</span>
                        <span className="text-[20px] font-medium text-[#B88E2F]">Rs. 250,000.00</span>
                    </div>
                    <button
                        type="button"
                        className="ml-16 mt-16 w-[215px] h-[64px] text-[#000000] border-[1px] border-[#000000] py-2 px-4 rounded-[10px] hover:bg-black hover:text-white"
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </div>
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
  );
};

export default Cart;
