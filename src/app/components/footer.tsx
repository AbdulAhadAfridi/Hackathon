export default function Footer() {
  return (
    <section className="bg-white max-w-screen-2xl mx-auto">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-2 ml-10">
        {/* Address Section */}
        <div className="mt-48 md:ml-6">
          <p className="text-[#9F9F9F] font-semibold leading-relaxed text-[16px]">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        
        <div className="mt-14 text-[20px] md:ml-24">
          <h3 className="text-[#D9D9D9] font-bold mb-10">Links</h3>
          <ul className="space-y-12 font-semibold">
            <li>
              <a href="/" className="hover:underline md:text-[16px] xl:text-[18px]">
                Home
              </a>
            </li>
            <li>
              <a href="/Shop" className="hover:underline md:text-[16px] xl:text-[18px]">
                Shop
              </a>
            </li>
            <li>
              <a href="/About" className="hover:underline md:text-[16px] xl:text-[18px]">
                About
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline md:text-[16px] xl:text-[18px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="mt-14 text-[20px]">
          <h3 className="text-[#D9D9D9] font-bold mb-10">Help</h3>
          <ul className="space-y-12 font-semibold">
            <li>
              <a href="#" className="hover:underline md:text-[16px] xl:text-[18px]   ">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:text-[16px] xl:text-[18px]  ">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline md:text-[16px] xl:text-[18px]  ">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="mt-14 text-[20px] ml-[-45px]">
          <h3 className="text-[#D9D9D9] font-bold mb-6 ">Newsletter</h3>
          <div className="mt-14 text-[#D9D9D9] flex-0 2xl:flex gap-x-3 space-x-2 lg:space-x-0  ">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="md:text-[16px] xl:text-[18px]   border-b-2  xl:w-[300px]"
            />
            <button className="md:text-[16px] xl:text-[18px]  text-[#000000] border-b-2  md:w-[80px] font-semibold mt-8 xl:mt-6 2xl:mt-0 ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='w-full md:w-[1240.01px] text-center mx-auto border-b-2 my-10 text-[#D9D9D9] mt-[102.01px]'></div>
      <div className="border-gray-200 py-4 ml-36 flex items-center">
        <p className="text-black text-[18px] font-semibold">2022 Meubel House. All rights reserved</p>
      </div>
    </section>
  );
}
