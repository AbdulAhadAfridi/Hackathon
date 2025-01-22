 import React from 'react'
 
 const Feature = () => {
   return (
    <>
     {/* Features Section */}
 <div className="bg-[#FAF4F4] py-10  mx-auto max-w-screen-2xl w-[1550] h-[500] lg:h-[400] xl:h-[300] ">
 <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 mt-14  ml-0 md:ml-48  lg:ml-4 xl:ml-40">
   {/* Feature 1 */}
   <div className="text-left  xl:ml-8">
     <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0">
       Free Delivery
     </h3>
     <p className=" text-[#9F9F9F] text-sm lg:text-lg">
       For all oders over $50, consectetur adipim scing elit.{" "}
     </p>
   </div>
   {/* Feature 2 */}
   <div className="text-left lg:ml-[-120px] xl:ml-4 ">
     <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0 ">
       90 Days Return
     </h3>
     <p className=" text-[#9F9F9F] text-sm lg:text-lg ">
       If goods have problems, consectetur adipiscing elit.
     </p>
   </div>
   {/* Feature 3 */}
   <div className="text-left  lg:mt-4 xl:mt-0 ">
     <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold  sm:ml-28 lg:ml-0">
       Secure Payment
     </h3>

     <p className=" text-[#9F9F9F] text-sm lg:text-lg flex xl:flex-col ">
       100% secure payment, consectetur
       <p className="ml-2 xl:ml-0">adipiscing elit.</p>
     </p>
   </div>
 </div>
</div>
</>
   )
 }
 
 export default Feature
 