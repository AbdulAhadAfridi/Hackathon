

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { Product } from "@/types/product";
import AddToCartButton from "@/app/components/AddToCartButton";
import { HiMinus, HiPlus } from "react-icons/hi";
import WishlistButton from "@/app/components/WishlistButton";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      slug,
      colors,
      size,
      discount
    }`,
    { slug }
  );
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto w-[1550px] h-[100] bg-white flex space-x-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 flex">
          <div className="text-[##9F9F9F] flex items-center gap-8 ml-[85px] text-[16px]">
          <Link href="/Shop" className="text-black text-lg font-semibold">
              Shop
            </Link>
            <CgChevronRight className="text-black font-bold text-lg" />
          </div>
          <div  className="text-[##9F9F9F] flex items-center gap-8 ml-[25px] text-[16px]">
            Product Page<CgChevronRight className="text-black font-bold text-lg" />
          </div>
        </nav>
        <div className="flex items-center gap-8">
          <Image src="/log3.png" alt="Icon" width={481} height={391} className="w-1 h-9 text-[#9F9F9F]" />
          <span className="text-black text-[16px]">{product.name}</span>
        </div>
      </div>
      <div>
        {/* Product Content */}
        <div className="max-w-screen-2xl mx-auto w-full xl:w-[1540px] xl:h-[820px] bg-white flex flex-wrap lg:flex-nowrap">
          {/* Thumbnail Images */}
          <div className="gap-4 mt-10 sm:mt-12 lg:mt-20 ml-6 sm:ml-12 lg:ml-24 space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[500px] overflow-visible flex lg:block justify-center">
            {/* Image Thumbnails */}
            <Image src="/pro1.png" alt="Thumbnail 1" width={83} height={55} className="w-20 h-20 mt-8 xl:mt-0 bg-[#FFF9E5] rounded-[10px]" />
            <Image src="/pro2.png" alt="Thumbnail 2" width={83} height={55} className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]" />
            <Image src="/pro3.png" alt="Thumbnail 3" width={83} height={55} className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]" />
            <Image src="/pro4.png" alt="Thumbnail 4" width={83} height={55} className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]" />
          </div>

          {/* Main Product Image */}
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[475px] lg:h-[600px] bg-[#FFF9E5] mt-10 sm:mt-12 lg:mt-20 rounded-[10px] flex justify-center items-center">
            <div className="w-[90%] sm:w-[70%] md:w-[600px] lg:w-[600px]">
              <Image src={product.imagePath} alt={product.name} width={540} height={400} className="w-[480px] lg:h-[600px]" />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-auto mt-10 sm:mt-20 px-4 lg:mr-[400px] ml-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-black w-[300px]">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#9F9F9F] mt-6">${product.price}</p>
            

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
                <Image src="/log3.png" alt="Icon" width={20} height={20} className="w-0.5 h-8 text-[#9F9F9F] items-center mr-2" />
                (5 Customer Reviews)
              </p>
            </div>
          {/* Inventory */}
           <p className="text-md text-black mt-2 font-semibold">In Stock: {product.stockLevel}</p>
            {/* Product Description */}
            <p className="text-gray-800 mt-4 text-sm sm:text-base md:text-lg">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
            

             {/* Size Options */}
          <div className="mt-6">
            <h3 className="text-[#9F9F9F] font-medium mb-2">Size</h3>
            <div className="flex space-x-3 mt-4">
              {product.size.map((sizes: string) => (
                <button key={sizes} className="px-4 py-2 bg-[#FBEBB5] rounded-xl text-sm sm:text-md font-semibold">
                  {sizes}
                </button>
              ))}
            </div>
          </div>


             {/* Color Options */}
          <div className="mt-8">
            <h3 className="text-[#816DFA] font-medium mb-2">Color</h3>
            <div className="flex space-x-3 mt-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} Color`}
                ></button>
              ))}
            </div>
          </div>
            {/* Quantity and Add to Cart */}
                <div className="mt-10 flex items-center flex-wrap space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      className="flex items-center justify-center p-2 text-black"
                      aria-label="Decrease Quantity">
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

            {/* Add To Cart Button */}
            <AddToCartButton product={product} />
            <WishlistButton product={product} />

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}







