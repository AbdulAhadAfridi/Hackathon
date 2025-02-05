"use client"
import type { Product } from "@/types/product"
import { useEffect, useState } from "react"
import { getCartItems, removeFromCart, updateCartQuantity } from "@/app/actions/action"
import Image from "next/image"
import Swal from "sweetalert2"
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CgChevronRight } from "react-icons/cg"

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

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
        removeFromCart(id)
        setCartItems(getCartItems())
        Swal.fire("Removed!", "Item has been removed from your cart.", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
    setCartItems(getCartItems())
  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1)
    }
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1)
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0)
  }

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
        Swal.fire("Success!", "Your order has been successfully processed!", "success")
        router.push("/Checkout")
        setCartItems([])
      }
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-screen-2xl mx-auto">
        <Image
          src="/shopimg1.png"
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <Image src="/logo.png" alt="Icon" width={64} height={64} className="w-full h-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black mb-4 md:mb-6">
            Cart
          </h2>

          <div className="flex items-center gap-x-2 text-black">
          <Link
              href="/Shop"
              className="text-black text-lg font-semibold"
            >
              Shop
            </Link>
            <CgChevronRight className="text-black font-bold text-lg" />
            <span className="text-base sm:text-lg">cart</span>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <div className="p-4 sm:p-6 bg-gray-100 max-w-screen-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <>
            {/* Table Header - Hidden on Mobile */}
            <div className="hidden md:grid md:grid-cols-6 gap-4 font-semibold text-gray-700 mb-4 px-4">
              <span>Product</span>
              <span className="text-center">Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Total</span>
              <span className="text-center">Total Quantity</span>
              <span className="text-center">Remove</span>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => handleRemove(item._id)} className="text-gray-400 hover:text-red-500">
                      <AiFillDelete size={24} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.stockLevel}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold">${(item.price * item.stockLevel).toFixed(2)}</p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-6 gap-4 items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imagePath || "/placeholder.svg"}
                      alt={item.name}
                      width={90}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-center">${item.price.toFixed(2)}</span>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.stockLevel}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-center font-semibold">${(item.price * item.stockLevel).toFixed(2)}</span>
                  <span className="text-center">{item.stockLevel}</span>
                  <div className="flex justify-center">
                    <button onClick={() => handleRemove(item._id)} className="text-gray-400 hover:text-red-500">
                      <AiFillDelete size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Checkout Section */}
            <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-9xl ml-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">SubTotal:</h2>
                <p className="text-lg sm:text-xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</p>
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
          <div className="flex flex-col items-center justify-center text-center py-12 sm:py-16 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            <div className="p-4 bg-gray-100 rounded-full shadow-sm mb-6">
              <AiOutlineShoppingCart className="text-gray-400 text-4xl sm:text-6xl" />
            </div>
            <p className="text-gray-800 text-lg sm:text-xl font-semibold">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Start shopping now to add items to your cart!</p>
            <Link href="/Shop">
              <button className="mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default CartPage
















// "use client";

// import { Product } from "@/types/product";
// import React, { useEffect, useState } from "react";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "@/app/actions/action";
// import Image from "next/image";
// import Swal from "sweetalert2";
// import { PiGreaterThanBold } from "react-icons/pi";
// import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
// import  { useRouter } from "next/navigation";
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
//   const router = useRouter();
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
//         router.push("/Checkout");

//         setCartItems([]); // Clear the cart
//       }
//     });
//   };

//   return (
//     <>
//       <section className="relative max-w-screen-2xl mx-auto">
//         {/* Background Image  */}
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

//       <div className="p-6  bg-gray-100 max-w-screen-2xl mx-auto">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

//         {cartItems.length > 0 ? (
//           <>
//             {/* Table Header */}
//             <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700 mb-4">
//               <span className="text-center">Product</span>
//               <span className="text-center">Price</span>
//               <span className="text-center">Quantity</span>
//               <span className="text-center">Total</span>
//               <span className="text-center">Total Quantity</span>
//               <span className="text-center">Remove</span>
//             </div>

//             {/* Cart Items */}
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="grid grid-cols-6 gap-4 items-center bg-white p-4 rounded-lg shadow-md mb-4"
//               >
//                 {/* Product */}
//                 <div className="flex items-center">
//                   <Image
//                     src={item.imagePath}
//                     alt={item.name}
//                     width={100}
//                     height={100}
//                     className="rounded-lg w-20 h-20 object-cover"
//                   />
//                   <span className="ml-4">{item.name}</span>
//                 </div>

//                 {/* Price */}
//                 <span className="text-center">${item.price.toFixed(2)}</span>

//                 {/* Quantity */}
//                 <div className="flex items-center gap-2 justify-center">
//                   <button
//                     onClick={() => handleDecrement(item._id)}
//                     className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                   >
//                     -
//                   </button>
//                   <span>{item.stockLevel}</span>
//                   <button
//                     onClick={() => handleIncrement(item._id)}
//                     className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Total */}
//                 <span className="text-center">
//                   ${(item.price * item.stockLevel).toFixed(2)}
//                 </span>

//                 {/* Actions */}
//                 <span className="text-center">{item.stockLevel}</span>

//                 {/* Remove Icon */}
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="text-[#FBEBB5] text-[24px] mb-[30px] "
//                   >
//                     <div className="relative text-[#FBEBB5]">
//                       <AiFillDelete className="absolute top-0 left-0 z-0 text-black scale-105 ml-28" />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Subtotal */}
//             <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-semibold">SubTotal:</h2>
//                 <p className="text-xl font-bold text-gray-800">
//                   ${calculateTotal().toFixed(2)}
//                 </p>
//               </div>
//               <button
//                 onClick={handleProceed}
//                 className="mt-4 w-full px-4 py-2 bg-black text-[#FBEBB5] rounded-md hover:bg-green-600"
//               >
//                 Checkout
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-center py-16 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
//             <div className="p-4 bg-gray-100 rounded-full shadow-sm mb-6">
//               <AiOutlineShoppingCart className="text-gray-400 text-6xl" />
//             </div>
//             <p className="text-gray-800 text-xl font-semibold">
//               Your cart is empty
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               Start shopping now to add items to your cart!
//             </p>
//             <Link href="/Shop">
//               <button className="mt-6 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-black transition-transform transform hover:scale-105">
//                 Shop Now
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;
