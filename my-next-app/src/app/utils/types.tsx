import { StaticImageData } from "next/image";

// Product data types
export type IProduct = {
  id: number; // Unique identifier for the product
  title: string; // Product name
  image?: string[] | StaticImageData; // Product images (array of URLs or StaticImageData for Next.js compatibility)
  slug: string; // URL-friendly unique identifier for the product
  price: number; // Product price
  category: string; // Product category name
  description: string; // Detailed description of the product
  size: string[]; // Available sizes for the product
  color: string[]; // Available colors for the product
  qty: number; // Available quantity of the product
  discount?: number; // Discount percentage (optional)
};

// Cart data types
export type Cart = {
  id: number; // Unique identifier for the product in the cart
  title: string; // Product name
  image?: string[] | StaticImageData; // Product images (array of URLs or StaticImageData for Next.js compatibility)
  slug: string; // URL-friendly unique identifier for the product
  price: number; // Product price
  size: string[]; // Available sizes for the product
  color: string[]; // Available colors for the product
  qty: number; // Quantity added to the cart
  discount?: number; // Discount percentage (optional)
  uuid: string | number | undefined; // Unique identifier for the cart item
};
