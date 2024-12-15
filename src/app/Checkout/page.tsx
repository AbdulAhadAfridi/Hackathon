import React from 'react';
import { PiGreaterThanBold } from 'react-icons/pi';
import Header2 from '../components/header2';
import Image from 'next/image';

const Checkout = () => {
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
    <h2 className=" sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6">Checkout</h2>

    {/* Breadcrumb */}
    <p className="text-black text-sm flex items-center gap-x-2 mb-20">
      <span className="text-black text-lg font-semibold">Home</span>
      <PiGreaterThanBold className="text-black font-bold text-lg" />
      <span className="text-lg">Checkout</span>
    </p>
  </div>
</section>

<div className="max-w-screen-2xl mx-auto bg-white">
  <div className="container mx-auto p-4 md:p-8 lg:p-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details Section */}
      <div className='mt-6'>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[Poppins]">Billing details</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
            <div>
              <label htmlFor="first-name" className="block font-medium text-gray-900 text-lg mb-2">First Name</label>
              <input type="text" id="first-name" className="block w-[211px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
            </div>
            <div>
              <label htmlFor="last-name" className="block font-medium text-gray-900 text-lg mb-2">Last Name</label>
              <input type="text" id="last-name" className="block w-[211px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="company-name" className="block font-medium text-gray-900 text-lg mb-2">Company Name (Optional)</label>
            <input type="text" id="company-name" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block font-medium text-gray-900 text-lg mb-2">Country / Region</label>
            <select id="country" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2">
              <option>Sri Lanka</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="street-address" className="block font-medium text-gray-900 text-lg mb-2">Street address</label>
            <input type="text" id="street-address" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block font-medium text-gray-900 text-lg mb-2">Town / City</label>
            <input type="text" id="city" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="province" className="block font-medium text-gray-900 text-lg mb-2">Province</label>
            <select id="province" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2">
              <option>Western Province</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="zip-code" className="block font-medium text-gray-900 text-lg mb-2">ZIP code</label>
            <input type="text" id="zip-code" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="Phone" className="block font-medium text-gray-900 text-lg mb-2">Phone</label>
            <input type="text" id="Phone" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block font-medium text-gray-900 text-lg mb-2">Email address</label>
            <input type="text" id="Email" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" />
          </div>
          <div className="mb-4 mt-8">
            <input type="text" id="text" className="block w-[453px] h-[75] border border-gray-300 rounded-[10px] shadow-sm px-4 py-2" placeholder="Additional information" />
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className='w-full lg:w-[608px] mt-16'>
        <div className="flex justify-between items-center my-4 text-2xl font-semibold">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        <div className="flex justify-between items-center my-4">
          <span className='text-gray-600'>Asgaard sofa </span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center my-4">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center my-4">
          <span>Total</span>
          <span className='text-yellow-800 text-2xl font-semibold'>Rs. 250,000.00</span>
        </div>
        <hr className='my-10'/>
        <div>
          <div className="mb-6">
            <div>
              <div className="mb-2 text-lg">
                <input type="radio" id="bank-transfer" name="payment-method" defaultChecked className="mr-2" />
                <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                <p className="text-gray-600 mt-4">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="mb-4 mt-4">
                <input type="radio" id="cash-on-delivery" name="payment-method" className="mr-2" />
                <label htmlFor="cash-on-delivery" className="text-gray-600">Cash On Delivery</label>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-900 mb-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
            <a href="#" className="font-bold text-gray-900 hover:underline">privacy policy</a>.
          </p>
          <div className='text-center'>
            <button type="submit" className="font-semibold w-[318px] h-[64px] text-gray-900 border border-gray-900 py-2 px-4 rounded-[10px] mt-10 hover:bg-blue-600">
              Place order
            </button>
          </div>
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

export default Checkout;
