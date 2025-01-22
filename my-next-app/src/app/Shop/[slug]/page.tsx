"use client"
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaHeart, FaStar } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
import { promises } from "dns";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "@/types/product";

interface ProductPageProps  {
  params : Promise<{slug : string}>
}
async function getProduct(slug :string): Promise<Product > {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
    id,
  name,
  imagePath,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,

    }`,{slug}

  )
  
}
export default async function ProductPage({params}: ProductPageProps){

  const {slug} = await params;
  const product = await getProduct(slug)

  return(
    <>
         <div className="max-w-screen-2xl mx-auto w-[1550px] h-[100] bg-white flex space-x-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 flex">
        <a
          href="#"
          className="text-[##9F9F9F] flex items-center gap-8 ml-[85px] text-[16px]"
        >
          Home <PiGreaterThanBold className="text-black" />
        </a>
        <a
          href="#"
          className="text-[##9F9F9F] flex items-center gap-8 ml-[25px] text-[16px]"
        >
           Shop <PiGreaterThanBold className="text-black" />
           </a>
         </nav>
         <div className="flex items-center gap-8">
         <Image
          src="/log3.png"
          alt="Icon"
          width={481}
          height={391}
          className="w-1 h-9 text-[#9F9F9F]"
        />
        <span className="text-black text-[16px]">{product.name}</span>
      </div>
    </div>

    {/* Product Content */}
    <div className="max-w-screen-2xl mx-auto w-full xl:w-[1540px] xl:h-[820px] bg-white flex flex-wrap lg:flex-nowrap">
      {/* Thumbnail Images */}
      <div className="gap-4 mt-10 sm:mt-12 lg:mt-20 ml-6 sm:ml-12 lg:ml-24 space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[500px] overflow-visible flex lg:block justify-center">
        <Image
          src={product.imagePath}
          alt={product.name}
          width={83}
          height={55}
          className="w-20 h-20 mt-8 xl:mt-0 bg-[#FFF9E5] rounded-[10px]"
        />
        <Image
          src={product.imagePath}
          alt={product.name}
          width={83}
          height={55}
          className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
        />
        <Image
          src={product.imagePath}
          alt={product.name}
          width={83}
          height={55}
          className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
        />
        <Image
          src={product.imagePath}
          alt={product.name}
          width={83}
          height={55}
          className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
        />
      </div>

      {/* Main Product Image */}
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[475px] lg:h-[600px] bg-[#FFF9E5] mt-10 sm:mt-12 lg:mt-20 rounded-[10px] flex justify-center items-center">
        <div className="w-[90%] sm:w-[70%] md:w-[600px] lg:w-[600px] h-auto">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={540}
            height={400}
            className="w-[480px] lg:h-[600px]"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-auto mt-10 sm:mt-20 px-4 lg:mr-[400px] ml-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-black w-[300px]">
          {product.name}
        </h1>
        <p className="text-lg sm:text-xl text-[#9F9F9F] mt-6">{product.price}</p>

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
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced
          audio that boasts a clear midrange and extended highs for a
          sound.
        </p>

        {/* Inventory */}
        <div className="mt-6">
          <h3 className="text-[#9F9F9F] font-medium mb-2">Inventory:</h3>
          <p className="text-lg text-black">In stock: {product.stockLevel}</p>
        </div>

        {/* Size Options */}
        <div className="mt-6">
          <h3 className="text-[#9F9F9F] font-medium mb-2">Size</h3>
          <div className="flex space-x-3 mt-4">
            <button className="px-4 py-2 bg-[#FBEBB5] rounded-xl text-sm sm:text-md font-semibold">
              L
            </button>
            <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
              XL
            </button>
            <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
              XS
            </button>
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
          {/* <div className="mt-10 flex items-center flex-wrap space-x-4"> */}
            {/* Quantity Control */}
            {/* <div className="flex items-center border border-gray-300">
              <button
                className="flex items-center justify-center p-2 text-black"
                aria-label="Decrease Quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <HiMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="flex items-center justify-center p-2 text-black"
                aria-label="Increase Quantity"
                onClick={() => setQuantity(quantity + 1)}
              >
                <HiPlus />
              </button>
            </div> */}

            {/* Add To Cart Button */}
            {/* <a href="/Cart"> */}
             {/* <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-white hover:bg-[#000000] text-black border-2 border-black rounded-[10px]"
            >
              <p className="text-black hover:text-white">Add To Cart</p>
            </button>
            </a>
          </div> */}
      </div>
    </div>

</>
  )
}
// const ProductDetailPage = () => {
  

//   const { id } = useParams();

//   const products = [
//     {
//       "id": "1",
//       "name": "Chair Wibe",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1200",
//       "description": "A sleek outdoor chair with natural wooden elements and a modern look.",
//       "discountPercentage": 10,
//       "isFeaturedProduct": true,
//       "stockLevel": 25,
//       "category": "Chair"
//     },
//     {
//       "id": "2",
//       "name": "Armchair Chair Set",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "850",
//       "description": "An elegant armchair with plush cushions and a curved design for comfort.",
//       "discountPercentage": 0,
//       "isFeaturedProduct": false,
//       "stockLevel": 10,
//       "category": "Chair"
//     },
//     {
//       "id": "3",
//       "name": "Pink Lounge Chair",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1600",
//       "description": "A spacious lounge chair with a quilted back and soft cushioning.",
//       "discountPercentage": 20,
//       "isFeaturedProduct": true,
//       "stockLevel": 5,
//       "category": "Chair"
//     },
//     {
//       "id": "4",
//       "name": "Stylish Armchair",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "780",
//       "description": "A luxurious armchair with velvet fabric and golden metal legs.",
//       "discountPercentage": 0,
//       "isFeaturedProduct": false,
//       "stockLevel": 12,
//       "category": "Sofa"
//     },
//     {
//       "id": "5",
//       "name": "Hans Wegner Style Three-Legged Shell Chair",
//       "imagePath": "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
//       "price": "990",
//       "description": "Iconic three-legged chair with faux leather and ash plywood frame.",
//       "discountPercentage": 10,
//       "isFeaturedProduct": false,
//       "stockLevel": 8,
//       "category": "Chair"
//     },
//     {
//       "id": "6",
//       "name": "Rapson Thirty-Nine Sofa",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1300",
//       "description": "A mid-century modern chair with clean lines and durable materials.",
//       "discountPercentage": 15,
//       "isFeaturedProduct": true,
//       "stockLevel": 20,
//       "category": "Sofa"
//     },
//     {
//       "id": "7",
//       "name": "Nautilus Lounge Chair",
//       "imagePath": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1450",
//       "description": "A lounge chair with a shell-inspired design and premium upholstery.",
//       "discountPercentage": 12,
//       "isFeaturedProduct": true,
//       "stockLevel": 10,
//       "category": "Sofa"
//     },
//     {
//       "id": "8",
//       "name": "High Quality Modern Sofa",
//       "imagePath": "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "150",
//       "description": "A simple and lightweight chair ideal for dining or casual use.",
//       "discountPercentage": 0,
//       "isFeaturedProduct": false,
//       "stockLevel": 50,
//       "category": "Sofa"
//     },
//     {
//       "id": "9",
//       "name": "Cozy Sofa",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "520",
//       "description": "Compact armchair with a cozy design for small spaces.",
//       "discountPercentage": 8,
//       "isFeaturedProduct": false,
//       "stockLevel": 15,
//       "category": "Sofa"
//     },
//     {
//       "id": "10",
//       "name": "Alpha Table",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "900",
//       "description": "A sturdy oak chair with a sleek and minimalist design.",
//       "discountPercentage": 10,
//       "isFeaturedProduct": false,
//       "stockLevel": 18,
//       "category": "Table"
//     },
//     {
//       "id": "11",
//       "name": "Replica Table",
//       "imagePath": "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "750",
//       "description": "Classic wishbone chair with a dark walnut frame and cord seat.",
//       "discountPercentage": 10,
//       "isFeaturedProduct": false,
//       "stockLevel": 25,
//       "category": "Table"
//     },
//     {
//       "id": "12",
//       "name": "Sleek Modern Table",
//       "imagePath": "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "2000",
//       "description": "A modern chair with a carbon fiber frame and bold red accents.",
//       "discountPercentage": 0,
//       "isFeaturedProduct": true,
//       "stockLevel": 3,
//       "category": "Table"
//     },
//     {
//       "id": "13",
//       "name": "Liberty Center",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1100",
//       "description": "Versatile entertainment chair for modern interiors.",
//       "discountPercentage": 8,
//       "isFeaturedProduct": false,
//       "stockLevel": 7,
//       "category": "Table"
//     },
//     {
//       "id": "14",
//       "name": "Leisure Sofa Chair Set",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "1800",
//       "description": "A comfortable set of chairs with soft cushions for relaxation.",
//       "discountPercentage": 18,
//       "isFeaturedProduct": true,
//       "stockLevel": 6,
//       "category": "Sofa"
//     },
//     {
//       "id": "15",
//       "name": "Diondre Chair",
//       "imagePath": "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "720",
//       "description": "A tufted chair with acrylic legs for a chic, modern touch.",
//       "discountPercentage": 7,
//       "isFeaturedProduct": false,
//       "stockLevel": 10,
//       "category": "Chair"
//     },
//     {
//       "id": "16",
//       "name": "Matilda Velvet Bed",
//       "imagePath": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "600",
//       "description": "A vibrant pink velvet chair with a retro-inspired design.",
//       "discountPercentage": 15,
//       "isFeaturedProduct": true,
//       "stockLevel": 12,
//       "category": "Bed"
//     },
//     {
//       "id": "17",
//       "name": "Solid Bed",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "100",
//       "description": "Durable and lightweight plastic chair for everyday use.",
//       "discountPercentage": 25,
//       "isFeaturedProduct": false,
//       "stockLevel": 100,
//       "category": "Bed"
//     },
//     {
//       "id": "18",
//       "name": "White Bed",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "120",
//       "description": "A foldable wooden bed with a padded seat for extra comfort.",
//       "discountPercentage": 12,
//       "isFeaturedProduct": false,
//       "stockLevel": 30,
//       "category": "Bed"
//     },
//     {
//       "id": "19",
//       "name": "Red Bed",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1670869816720-de59bfc2be74?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "320",
//       "description": "An acrylic dining chair with a sleek and minimalist Nordic design.",
//       "discountPercentage": 10,
//       "isFeaturedProduct": true,
//       "stockLevel": 20,
//       "category": "Bed"
//     },
//     {
//       "id": "20",
//       "name": "Blue Bed",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "780",
//       "description": "A modern cantilever chair with a unique floating effect.",
//       "discountPercentage": 15,
//       "isFeaturedProduct": true,
//       "stockLevel": 5,
//       "category": "Bed"
//     },
//     {
//       "id": "21",
//       "name": "Luxury Flower Bed",
//       "imagePath": "https://plus.unsplash.com/premium_photo-1661886455585-03ddf4347796?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "price": "2500",
//       "description": "A luxurious shell-shaped chair with gold brass metal legs.",
//       "discountPercentage": 0,
//       "isFeaturedProduct": true,
//       "stockLevel": 2,
//       "category": "Bed"
//     }
//   ]

//   interface Product {
//     stockLevel: number;
//     imagePath: string 
//     id: number;
//     name: string;
//     price: string;
//     description: string;
//     discountPercentage: number;
//     isFeaturedProduct: boolean;
//     category: string;
  
//   }
  

//   const product = products.find((p) => p.id === id);
//   const [quantity, setQuantity] = useState(1);
//   const [Products, setProduct] = useState<Product | null>(null);



//   if (!product) {
//     console.error("Product not found for ID:", id);
//     return <div>Product not found</div>;
//   }
 
// // Add to cart function
  
// const addToCart = (product: Product, quantity: number) => {
//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

//   const existingProductIndex = existingCart.findIndex(
//     (item:Product) => item.id === product.id
//   );

//   if (existingProductIndex >= 0) {
//     existingCart[existingProductIndex].quantity += quantity;
//   } else {
//     existingCart.push({ ...product, quantity });
//   }

//   localStorage.setItem("cart", JSON.stringify(existingCart));
// };

// const handleAddToCart = () => {
//   addToCart(Products as Product, quantity);
// };
 

//   return (
//     <>
    
//     <div className="max-w-screen-2xl mx-auto w-[1550px] h-[100] bg-white flex space-x-6">
//       {/* Breadcrumb Navigation */}
//       <nav className="text-sm text-gray-500 flex">
//         <a
//           href="#"
//           className="text-[##9F9F9F] flex items-center gap-8 ml-[85px] text-[16px]"
//         >
//           Home <PiGreaterThanBold className="text-black" />
//         </a>
//         <a
//           href="#"
//           className="text-[##9F9F9F] flex items-center gap-8 ml-[25px] text-[16px]"
//         >
//           Shop <PiGreaterThanBold className="text-black" />
//         </a>
//       </nav>
//       <div className="flex items-center gap-8">
//         <Image
//           src="/log3.png"
//           alt="Icon"
//           width={481}
//           height={391}
//           className="w-1 h-9 text-[#9F9F9F]"
//         />
//         <span className="text-black text-[16px]">{product.name}</span>
//       </div>
//     </div>

//     {/* Product Content */}
//     <div className="max-w-screen-2xl mx-auto w-full xl:w-[1540px] xl:h-[820px] bg-white flex flex-wrap lg:flex-nowrap">
//       {/* Thumbnail Images */}
//       <div className="gap-4 mt-10 sm:mt-12 lg:mt-20 ml-6 sm:ml-12 lg:ml-24 space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[500px] overflow-visible flex lg:block justify-center">
//         <Image
//           src={product.imagePath}
//           alt={product.name}
//           width={83}
//           height={55}
//           className="w-20 h-20 mt-8 xl:mt-0 bg-[#FFF9E5] rounded-[10px]"
//         />
//         <Image
//           src={product.imagePath}
//           alt={product.name}
//           width={83}
//           height={55}
//           className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
//         />
//         <Image
//           src={product.imagePath}
//           alt={product.name}
//           width={83}
//           height={55}
//           className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
//         />
//         <Image
//           src={product.imagePath}
//           alt={product.name}
//           width={83}
//           height={55}
//           className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
//         />
//       </div>

//       {/* Main Product Image */}
//       <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[475px] lg:h-[600px] bg-[#FFF9E5] mt-10 sm:mt-12 lg:mt-20 rounded-[10px] flex justify-center items-center">
//         <div className="w-[90%] sm:w-[70%] md:w-[600px] lg:w-[600px] h-auto">
//           <Image
//             src={product.imagePath}
//             alt={product.name}
//             width={540}
//             height={400}
//             className="w-[480px] lg:h-[600px]"
//           />
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="w-full lg:w-auto mt-10 sm:mt-20 px-4 lg:mr-[400px] ml-16">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-black w-[300px]">
//           {product.name}
//         </h1>
//         <p className="text-lg sm:text-xl text-[#9F9F9F] mt-6">{product.price}</p>

//         {/* Rating and Review */}
//         <div className="flex items-center mt-2">
//           <div className="flex text-[#FFDA5B] space-x-2">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//           </div>
//           <p className="text-sm sm:text-base text-gray-500 ml-2 flex items-center">
//             <Image
//               src="/log3.png"
//               alt="Icon"
//               width={20}
//               height={20}
//               className="w-0.5 h-8 text-[#9F9F9F] items-center mr-2"
//             />
//             (5 Customer Reviews)
//           </p>
//         </div>

//         {/* Product Description */}
//         <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
//           Setting the bar as one of the loudest speakers in its class, the
//           Kilburn is a compact, stout-hearted hero with a well-balanced
//           audio that boasts a clear midrange and extended highs for a
//           sound.
//         </p>

//         {/* Inventory */}
//         <div className="mt-6">
//           <h3 className="text-[#9F9F9F] font-medium mb-2">Inventory:</h3>
//           <p className="text-lg text-black">In stock: {product.stockLevel}</p>
//         </div>

//         {/* Size Options */}
//         <div className="mt-6">
//           <h3 className="text-[#9F9F9F] font-medium mb-2">Size</h3>
//           <div className="flex space-x-3 mt-4">
//             <button className="px-4 py-2 bg-[#FBEBB5] rounded-xl text-sm sm:text-md font-semibold">
//               L
//             </button>
//             <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
//               XL
//             </button>
//             <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
//               XS
//             </button>
//           </div>
//         </div>

//         {/* Color Options */}
//         <div className="mt-8">
//           <h3 className="text-[#816DFA] font-medium mb-2">Color</h3>
//           <div className="flex space-x-3 mt-4">
//             <button
//               className="w-8 h-8 rounded-full bg-[#816DFA]"
//               aria-label="Select Blue Color"
//             ></button>
//             <button
//               className="w-8 h-8 rounded-full bg-[#000000]"
//               aria-label="Select Yellow Color"
//             ></button>
//             <button
//               className="w-8 h-8 rounded-full bg-[#CDBA7B]"
//               aria-label="Select Gray Color"
//             ></button>
//           </div>
//         </div>

          
       

//          {/* Quantity and Add to Cart */}
//           <div className="mt-10 flex items-center flex-wrap space-x-4">
//             {/* Quantity Control */}
//             <div className="flex items-center border border-gray-300">
//               <button
//                 className="flex items-center justify-center p-2 text-black"
//                 aria-label="Decrease Quantity"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 <HiMinus />
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 className="flex items-center justify-center p-2 text-black"
//                 aria-label="Increase Quantity"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 <HiPlus />
//               </button>
//             </div>

//             {/* Add To Cart Button */}
//             <a href="/Cart">
//             <button
//               onClick={handleAddToCart}
//               className="px-4 py-2 bg-white hover:bg-[#000000] text-black border-2 border-black rounded-[10px]"
//             >
//               <p className="text-black hover:text-white">Add To Cart</p>
//             </button>
//             </a>
//           </div>
//       </div>
//     </div> 
 
// </>
//   )
// };

// export default ProductDetailPage;