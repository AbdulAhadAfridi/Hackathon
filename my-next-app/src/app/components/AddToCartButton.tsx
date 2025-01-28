"use client"; // Ensure this is marked as a client component

import { Product } from "@/types/product";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";
interface AddToCartButtonProps {
  product: Product;
}
// "Product added to cart successfully!"
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
        position : 'center',
        icon: 'success',
        title: `${product.name} added to cart successfully!`,
        showConfirmButton: false,
        timer: 1800

    });
    addToCart(product);
    
  };

  return (
    <button onClick={handleAddToCart} className="px-4 py-2 bg-white hover:bg-[#000000] text-black border-2 border-black rounded-[10px]">
      <p className="text-black hover:text-white">Add To Cart</p>
    </button>
  );
}
