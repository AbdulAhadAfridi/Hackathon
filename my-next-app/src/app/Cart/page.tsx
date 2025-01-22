"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMinus, HiPlus } from "react-icons/hi";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Chair Wibe",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop",
      price: 1200,
      quantity: 1,
    },
    {
      id: "2",
      name: "Armchair Chair Set",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop",
      price: 850,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id: string, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 flex items-center gap-x-4">
                      <Image
                        src={item.imagePath}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4 flex items-center gap-x-2">
                      <button
                        className="p-2 bg-gray-200 rounded-md"
                        onClick={() => handleQuantityChange(item.id, false)}
                      >
                        <HiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="p-2 bg-gray-200 rounded-md"
                        onClick={() => handleQuantityChange(item.id, true)}
                      >
                        <HiPlus />
                      </button>
                    </td>
                    <td className="p-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subtotal Section */}
          <div className="flex justify-between items-center mt-6">
            <Link
              href="/Shop"
              className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-md hover:bg-gray-300"
            >
              Continue Shopping
            </Link>
            <div>
              <p className="text-lg font-bold">
                Subtotal: ${calculateSubtotal().toFixed(2)}
              </p>
            </div>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty.{" "}
          <Link href="/Shop" className="text-blue-500 underline">
            Shop now
          </Link>
        </p>
      )}
    </div>
  );
};

export default CartPage;
