import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { FaStar, FaFacebookF, FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Header2 from '../components/header2';
import { PiGreaterThanBold } from 'react-icons/pi';
import Image from 'next/image';
import { SlSocialTwitter } from 'react-icons/sl';
import
 { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";


export default function SingleProductPage() {
  return (
    <>
    <Header2/>
    
    <div className="max-w-screen-2xl mx-auto w-[1550px] h-[100] bg-white flex space-x-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500  flex">
        <a href="#" className="text-[##9F9F9F] flex items-center gap-8 ml-[85px] text-[16px] ">Home <PiGreaterThanBold className='text-black'/></a> 
        <a href="#" className="text-[##9F9F9F] flex items-center gap-8 ml-[25px] text-[16px]">Shop <PiGreaterThanBold className='text-black'/></a> 
        </nav>
        <div className='flex items-center gap-8'>
        <Image
        src="/log3.png" 
        alt="Icon"
        width={481}
        height={391}
        className=" w-1 h-9 text-[#9F9F9F]"/>
        <span className="text-black text-[16px] ">Asgaard sofa</span>

      </div>
      </div>
      <div>
{/* Product Content */}
<div className="max-w-screen-2xl mx-auto w-full xl:w-[1540px] xl:h-[820px] bg-white flex flex-wrap lg:flex-nowrap">

  {/* Thumbnail Images */}
  <div className="gap-4 mt-10 sm:mt-12 lg:mt-20 ml-6 sm:ml-12 lg:ml-24 space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[500px] overflow-visible flex lg:block justify-center">
    <Image
      src="/pro1.png"
      alt="Thumbnail 1 - Asgaard sofa"
      width={83}
      height={55}
      className="w-20 h-20 mt-8 xl:mt-0 bg-[#FFF9E5] rounded-[10px]"
    />
    <Image
      src="/pro2.png"
      alt="Thumbnail 2 - Asgaard sofa"
      width={83}
      height={55}
      className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
    />
    <Image
      src="/pro3.png"
      alt="Thumbnail 3 - Asgaard sofa"
      width={83}
      height={55}
      className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
    />
    <Image
      src="/pro4.png"
      alt="Thumbnail 4 - Asgaard sofa"
      width={83}
      height={55}
      className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
    />
  </div>

  {/* Main Product Image */}
  <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[475px] lg:h-[600px] bg-[#FFF9E5] mt-10 sm:mt-12 lg:mt-20 rounded-[10px] flex justify-center items-center">
    <div className="w-[90%] sm:w-[70%] md:w-[600px] lg:w-[600px] h-auto mt-8 sm:mt-16 md:mt-24 lg:mt-24 ml-0 sm:ml-[-10px] md:ml-[-20px] lg:ml-[-40px]">
      <Image
        src="/sofa.png"
        alt="Asgaard sofa"
        width={540}
        height={400}
        className="w-[90%] md:w-[540px] h-auto bg-transparent"
      />
    </div>
  </div>

  {/* Product Details */}
  <div className="w-full lg:w-auto mt-10 sm:mt-20 px-4 lg:mr-[400px] ml-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-black">
      Asgaard sofa
    </h1>
    <p className="text-lg sm:text-xl text-[#9F9F9F] mt-6    ">Rs. 250,000.00</p>

    {/* Rating and Review */}
    <div className="flex items-center mt-2">
      <div className="flex text-[#FFDA5B] space-x-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-sm sm:text-base text-gray-500 ml-2 flex items-center">
        <Image
          src="/log3.png"
          alt="Icon"
          width={20}
          height={20}
          className="w-0.5 h-8 text-[#9F9F9F] items-center mr-2"
        />
        (5 Customer Reviews)
      </p>
    </div>

    {/* Product Description */}
    <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
    </p>

    {/* Size Options */}
    <div className="mt-6">
      <h3 className="text-[#9F9F9F] font-medium mb-2">Size</h3>
      <div className="flex space-x-3 mt-4">
        <button className="px-4 py-2 bg-[#FBEBB5] rounded-xl text-sm sm:text-md font-semibold">L</button>
        <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">XL</button>
        <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">XS</button>
      </div>
    </div>

    {/* Color Options */}
    <div className="mt-8">
      <h3 className="text-[#816DFA] font-medium mb-2">Color</h3>
      <div className="flex space-x-3 mt-4">
        <button
          className="w-8 h-8 rounded-full bg-[#816DFA]"
          aria-label="Select Blue Color"
        ></button>
        <button
          className="w-8 h-8 rounded-full bg-[#000000]"
          aria-label="Select Yellow Color"
        ></button>
        <button
          className="w-8 h-8 rounded-full bg-[#CDBA7B]"
          aria-label="Select Gray Color"
        ></button>
      </div>
    </div>

    {/* Quantity and Add to Cart */}
    <div className="mt-10 flex items-center flex-wrap space-x-4">
      <div className="flex items-center border border-gray-300 rounded-md">
        <button
          className="flex items-center justify-center p-2 text-black"
          aria-label="Decrease Quantity"
        >
          <HiMinus />
        </button>
        <span className="px-4">1</span>
        <button
          className="flex items-center justify-center p-2 text-black"
          aria-label="Increase Quantity"
        >
          <HiPlus />
        </button>
      </div>
      <Sheet>
            <SheetTrigger>
            <button className="px-4 py-2 bg-white hover:bg-[#000000] text-black border-2 border-black rounded-[10px] flex">
        <p className="text-black hover:text-white">Add To Cart</p>
      </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[417px] h-full bg-white">
              <SheetHeader>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-[24px] font-bold text-black">Shopping Cart</h2>
                </div>
              </SheetHeader>

              {/* Cart Items */}
              <div className="p-4">
                <div className="flex items-center mb-4 mt-4">
                  {/* Product Thumbnail */}
                  <div className="w-16 h-16 bg-[#FBEBB5] rounded-[10px] flex items-center justify-center">
                    <Image
                      src="/sofa.png"
                      alt="Product Thumbnail"
                      width={150}
                      height={150}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  {/* Product Info */}
                  <div className="ml-4 flex-1">
                    <h3 className="text-gray-800 font-medium">Asgaard Sofa</h3>
                    <p className="text-black text-sm">
                      1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                    </p>
                  </div>
                  {/* Remove Button */}
                  <button className="text-white bg-[#9F9F9F] text-sm rounded-full w-6 h-6">X</button>
                </div>
                <div className="border-t border-[#D9D9D9] mt-10"></div>
              </div>

              {/* Subtotal */}
              <div className="p-4 mt-20 md:mt-80 mr-8">
                <div className="flex justify-between">
                  <span className="text-black font-medium">Subtotal</span>
                  <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-[#D9D9D9] mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/Cart"
                    className="border border-black rounded-full py-2 text-sm text-black text-center hover:bg-black hover:text-white"
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/Checkout"
                    className="border border-black rounded-full py-2 text-sm text-black text-center hover:bg-black hover:text-white"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
    </div>
  </div>
</div>
</div>


    <div className="max-w-screen-2xl mx-auto bg-white py-12 ">
      {/* Tabs */}
      <div className="">
        <div className="flex justify-center space-x-24 p-4">
          <button className="text-[#000000] font-medium text-2xl ">Description</button>
          <b className="text-[#9F9F9F] text-2xl ">Additional Information</b>
          <button className="text-[#9F9F9F] text-2xl">Reviews [5]</button>
        </div>
      </div>

      {/* Description Section */}
      <div className="flex items-center justify-center p-6 w-[1026px] h-[174px]  max-w-screen-2xl mx-auto mt-6 sm:p-4 sm:w-full sm:h-auto md:p-5 md:w-[90%] md:h-auto lg:p-6 lg:w-[1026px] lg:h-[174px]">
  <div>
    <p className="text-[#9F9F9F] leading-[1.5]">
      Embodying the raw, wayward spirit of rock & roll, the Kilburn portable active stereo speaker takes the
      unmistakable look and sound of Marshall,unplugs the chords, and takes the show on the road.
    </p>
    <p className="mt-8 text-[#9F9F9F] leading-[1.5]">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering.Setting the
      bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with
      well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and
      pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the
      guitar-influenced leather strap enables easy and stylish travel.
    </p>
  </div>
</div>



     {/* Product Images */}
<div className="flex max-w-screen-2xl mx-auto w-[1239px] h-[348px] gap-x-8 mt-10 sm:w-full sm:h-auto md:w-[90%] md:h-auto lg:w-[1239px] lg:h-[348px]">
  <div className="bg-[#FFF9E5] rounded-[10px]">
    <Image src="/pr1.png" alt="Sofa 1" width={605} height={348} className="object-contain h-full" />
  </div>
  <div className="bg-[#FFF9E5] rounded-[10px]">
    <Image src="/pr2.png" alt="Sofa 2" width={605} height={348} className="object-contain h-full" />
  </div>
</div>

<div className='border-b-2 my-16 text-[#D9D9D9] '></div>
      {/* Related Products */}
      <section className="bg-white ">
      <div className="container mx-auto text-center max-w-screen-2xl">
        {/* Title Section */}
        <h2 className="text-3xl  font-semibold medium-[40] text-black mb-4">Related Products</h2>
        

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl">
          {/* Product 1 */}
          <div className="">
            <Image
              src="/pro1.png" // Replace with actual image path
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
              src="/pro2.png" // Replace with actual image path
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
              src="/pro3.png" // Replace with actual image path
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
              src="/pro4.png" // Replace with actual image path
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Plain console with teak mirror</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="text-black font-medium  text-left underline">
            View More
          </button>
        </div>
      </div>
    </section>
     </div>

    </>
  );
}

