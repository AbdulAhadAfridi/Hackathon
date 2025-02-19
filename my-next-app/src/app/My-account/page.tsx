import React from 'react';
import { PiGreaterThanBold } from 'react-icons/pi';
import Image from 'next/image';
import Feature from '../components/feature';

const MyAccount = () => {
  return (
    <>
    <section className="relative max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <Image
          src="/shopimg1.png"
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div>
            <Image
              src="/logo.png"
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6">
            My Account
          </h2>
          <p className="text-sm md:text-lg text-black flex items-center gap-x-2">
            <span className="font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span>My account</span>
          </p>
        </div>
      </section>
  {/* my Account */}
<div className="max-w-screen-2xl mx-auto w-full h-auto px-4 py-16 flex flex-col lg:flex-row justify-between bg-white">
  {/* Login Section */}
  <div className="w-full lg:w-[608px] h-auto lg:h-[630px] lg:ml-32 mb-8 lg:mb-0">
    <h2 className="text-[28px] md:text-[40px] font-bold mb-4 font-[Poppins]">Log In</h2>
    <form>
      <div className="mb-4 mt-6">
        <label
          htmlFor="login-username"
          className="block font-medium text-[#000000] text-[14px] md:text-[16px] mb-4"
        >
          Username or email address
        </label>
        <input
          type="text"
          id="login-username"
          className="mt-1 block border border-[#9F9F9F] w-full lg:w-[423px] h-[50px] md:h-[75px] rounded-[10px] shadow-md"
        />
      </div>
      <div className="mb-4 mt-8 ">
        <label
          htmlFor="login-password"
          className="block font-medium text-[#000000] text-[14px] md:text-[16px] mb-4"
        >
          Password
        </label>
        <input
          type="password"
          id="login-password"
          className="mt-1 block border border-[#9F9F9F] w-full lg:w-[423px] h-[50px] md:h-[75px] rounded-[10px] shadow-md"
        />
      </div>
      <div className="mb-4 flex items-center mt-10">
        <input
          type="checkbox"
          id="remember-me"
          className="w-[20px] h-[20px] md:w-[30px] md:h-[27px] text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block font-medium text-[14px] md:text-[16px] text-[#000000]"
        >
          Remember me
        </label>
      </div>
      <div className="flex items-center mt-16">
        <button
          type="submit"
          className="font-semibold w-[180px] md:w-[215px] h-[50px] md:h-[64px] text-[#000000] border border-[#000000] py-2 px-4 rounded-[15px] hover:bg-blue-600"
        >
          Log In
        </button>
        <div className="ml-4 md:ml-6">
          <a
            href="#"
            className="text-[#000000] font-medium text-[14px] md:text-[16px] hover:underline hover:text-blue-600"
          >
            Lost Your Password?
          </a>
        </div>
      </div>
    </form>
  </div>

  {/* Register Section */}
  <div className="w-full lg:w-[608px] h-auto lg:h-[630px]">
    <h2 className="text-[28px] md:text-[40px] font-bold mb-4 font-[Poppins]">Register</h2>
    <form>
      <div className="mb-10">
        <label
          htmlFor="register-email"
          className="block font-medium text-[#000000] text-[14px] md:text-[16px] mb-4 mt-6"
        >
          Email address
        </label>
        <input
          type="email"
          id="register-email"
          className="mt-1 block border border-[#9F9F9F] w-full lg:w-[423px] h-[50px] md:h-[75px] rounded-[10px] shadow-md"
        />
      </div>
      <p className="text-[11px] md:text-[18px] text-[#000000] w-[453px] h-[48px] mb-8">
        A link to set a new password will be sent to your email address.
      </p>
      <p className="text-[11px] md:text-[18px] text-[#000000] w-[380px] h-[96px] ">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
        <a href="#" className="text-black font-bold hover:underline">
          privacy policy
        </a>
        
      </p>
      <div className="mt-16">
        <button
          type="submit"
          className="font-semibold w-[180px] md:w-[215px] h-[50px] md:h-[64px] text-[#000000] border border-[#000000] py-2 px-4 rounded-[15px] hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>

    <Feature/>
        </>
  );
};

export default MyAccount;
