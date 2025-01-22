import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { MdAccessTimeFilled, MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import Feature from "../components/feature";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <>
    <section className="relative max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <Image
          src="/shopimg1.png" // Replace with your image path
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />

        {/* Slightly Left-Aligned Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div>
            <Image
              src="/logo.png" // Replace with your icon image path
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Contact</h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">Contact</span>
          </p>
        </div>
      </section>
<div className="max-w-screen-2xl mx-auto bg-white flex flex-col lg:flex-row items-center w-full h-auto lg:h-[1144px]">
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-[28px] md:text-[36px] font-semibold text-center mb-6">Get In Touch With Us</h1>
    <p className="text-center text-[#9F9F9F] text-[14px] md:text-[16px]">
      For More Information About Our Product & Services. Please Feel Free To Drop Us
    </p>
    <p className="text-center text-[#9F9F9F] text-[14px] md:text-[16px] mb-12">
      An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-screen-lg">
      {/* Contact Information */}
      <div className="w-full lg:w-[393px] h-auto lg:h-[537px]">
        {/* Location */}
        <div className="flex items-center gap-x-4 mt-8 md:mt-24">
          <MdLocationOn className="text-[30px]" />
          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Address</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">236 5th SE Avenue, New</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">York NY10000, United</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">States</p>

        {/* Phone */}
        <div className="flex items-center gap-x-4 mt-6 md:mt-10">
        <FaPhone className="text-[30px]" />

          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Phone</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Mobile: +(84) 546-6789</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Hotline: +(84) 456-6789</p>

        {/* Working Time */}
        <div className="flex items-center gap-x-4 mt-6 md:mt-10">
          <MdAccessTimeFilled className="text-[30px]" />
          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Working Time</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Monday-Friday: 9:00 -</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">22:00</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Saturday-Sunday: 9:00 -</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">21:00</p>
      </div>

                 <ContactForm/>
          </div>
        </div>
      </div>
      <Feature/>
    </>
  );
};

export default Contact;
