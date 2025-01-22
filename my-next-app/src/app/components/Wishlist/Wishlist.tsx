// // /components/WishlistItem.tsx

// import { Product } from "@/interface/product";
// import { FaTrashAlt } from "react-icons/fa";
// import { useWishlist } from "@/context/WishlistContext";

// interface WishlistItemProps {
//   item: Product;
// }

// const WishlistItem = ({ item }: WishlistItemProps) => {
//   const { removeFromWishlist } = useWishlist();

//   return (
//     <div className="flex items-center justify-between border-b py-4">
//       <div className="flex items-center">
//         <img src={item.imagePath} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//         <div className="ml-4">
//           <h3 className="text-lg font-semibold">{item.name}</h3>
//           <p className="text-sm text-gray-500">{item.price}</p>
//         </div>
//       </div>
//       <button
//         onClick={() => removeFromWishlist(item.id)}
//         className="text-red-500 hover:text-red-700"
//       >
//         <FaTrashAlt className="w-5 h-5" />
//       </button>
//     </div>
//   );
// };

// export default WishlistItem;
