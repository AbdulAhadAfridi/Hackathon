"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "@/app/actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { PiGreaterThanBold } from "react-icons/pi";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import router from "next/router";
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        setCartItems([]); // Clear the cart
      }
    });
  };

  return (
    <>
      <section className="relative max-w-screen-2xl mx-auto">
        {/* Background Image  */}
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">
            Cart
          </h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">cart</span>
          </p>
        </div>
      </section>

      <div className="p-6  bg-gray-100 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700 mb-4">
              <span className="text-center">Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Total</span>
              <span className="text-center">Total Quantity</span>
              <span className="text-center">Remove</span>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-6 gap-4 items-center  bg-white p-4 rounded-lg shadow-md mb-4"
              >
                {/* Product */}
                <div className="flex items-center">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg w-20 h-20 object-cover"
                  />
                  <span className="ml-4">{item.name}</span>
                </div>

                {/* Price */}
                <span className="text-center">${item.price.toFixed(2)}</span>

                {/* Quantity */}
                <div className="flex items-center gap-2 justify-center">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{item.stockLevel}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Total */}
                <span className="text-center">
                  ${(item.price * item.stockLevel).toFixed(2)}
                </span>

                {/* Actions */}
                <span className="text-center">
                 {item.stockLevel}
                </span>

                {/* Remove Icon */}
                <div className="flex items-center">
                   <button
                    onClick={() => handleRemove(item._id)}
                    className="text-[#FBEBB5] text-[24px] mb-[30px] "
                  >
                     <div className="relative text-[#FBEBB5]">
                       <AiFillDelete className="absolute top-0 left-0 z-0 text-black scale-105 ml-28" />
                     </div>
                </button>
                 </div>
               </div>
            ))}

            {/* Subtotal */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">SubTotal:</h2>
                <p className="text-xl font-bold text-gray-800">
                  ${calculateTotal().toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleProceed}
                className="mt-4 w-full px-4 py-2 bg-black text-[#FBEBB5] rounded-md hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
              <div className="p-4 bg-gray-100 rounded-full shadow-sm mb-6">
                <AiOutlineShoppingCart className="text-gray-400 text-6xl" />
               </div>
               <p className="text-gray-800 text-xl font-semibold">                 
                Your cart is empty
              </p>
              <p className="text-gray-500 text-sm mt-2">
                 Start shopping now to add items to your cart!
               </p>
               <Link href="/Shop"> 
               <button
                className="mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-transform transform hover:scale-105"
              >
                 Shop Now
               </button>
               </Link>
             </div>
        )}
      </div>
    </>
  );
};

export default CartPage;

 
// "use client";

// import { Product } from "@/types/product";
// import React, { useEffect, useState } from "react";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "@/app/actions/action";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import { PiGreaterThanBold } from "react-icons/pi";
// import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
// import router from "next/router";
// import Link from "next/link";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire(
//           "Removed!",
//           "Item has been removed from your cart.",
//           "success"
//         );
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) {
//       handleQuantityChange(id, product.stockLevel + 1);
//     }
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.stockLevel > 1) {
//       handleQuantityChange(id, product.stockLevel - 1);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.stockLevel,
//       0
//     );
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           "Success!",
//           "Your order has been successfully processed!",
//           "success"
//         );
//         // Clear the cart after proceeding (optional)
//         setCartItems([]);
//       }
//     });
//   };
//   return (
//     <>
//       <section className="relative max-w-screen-2xl mx-auto">
//         {/* Background Image */}
//         <Image
//           src="/shopimg1.png" // Replace with your image path
//           alt="Background"
//           width={1440}
//           height={316}
//           className="w-full h-[340px] object-cover"
//         />

//         {/* Slightly Left-Aligned Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           {/* Icon */}
//           <div>
//             <Image
//               src="/logo.png" // Replace with your icon image path
//               alt="Icon"
//               width={64}
//               height={64}
//               className="w-16 h-16"
//             />
//           </div>

//           {/* Section Title */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">
//             Cart
//           </h2>

//           {/* Breadcrumb */}
//           <p className="text-black text-sm flex items-center gap-x-2 mb-20">
//             <span className="text-black text-lg font-semibold">Home</span>
//             <PiGreaterThanBold className="text-black font-bold text-lg" />
//             <span className="text-lg">cart</span>
//           </p>
//         </div>
//       </section>
//       <div className="p-6 bg-gray-100 max-w-screen-2xl mx-auto">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

//         <div className="space-y-6">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center">
//                   <Image
//                     src={item.imagePath}
//                     className="w-16 h-16 object-cover rounded-lg"
//                     alt="image"
//                     width={500}
//                     height={500}
//                   />

//                   <div className="ml-4">
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-500">Price: ${item.price}</p>
//                     <p className="text-gray-500">Total:</p>
//                     <div className="flex items-center mt-2">
//                       <button
//                         onClick={() => handleDecrement(item._id)}
//                         className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{item.stockLevel}</span>
//                       <button
//                         onClick={() => handleIncrement(item._id)}
//                         className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="text-[#FBEBB5] text-[28px] mb-[30px] ml-[-35]"
//                   >
//                     <div className="relative text-[#FBEBB5]">
//                       <AiFillDelete className="absolute top-0 left-0 z-0 text-black scale-105" />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center text-center py-16 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
//               <div className="p-4 bg-gray-100 rounded-full shadow-sm mb-6">
//                 <AiOutlineShoppingCart className="text-gray-400 text-6xl" />
//               </div>
//               <p className="text-gray-800 text-xl font-semibold">
//                 Your cart is empty
//               </p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Start shopping now to add items to your cart!
//               </p>
//               <Link href="/Shop"> 
//               <button
//                 className="mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-transform transform hover:scale-105"
//               >
//                 Shop Now
//               </button>
//               </Link>
//             </div>
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold">SubTotal:</h2>
//               <p className="text-xl font-bold text-gray-800">
//                 ${calculateTotal().toFixed(2)}
//               </p>
//             </div>
//             <button
//               onClick={handleProceed}
//               className="mt-4 w-full px-4 py-2 bg-black text-[#FBEBB5] text-[18px] rounded-md hover:bg-green-600"
//             >
//               Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;