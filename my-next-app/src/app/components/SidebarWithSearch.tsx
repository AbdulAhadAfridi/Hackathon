"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { GoSearch } from "react-icons/go"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  imagePath: string
  price: string
  category: string
  description: string
}

export default function SidebarWithSearch() {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Product[] | null>(null)
  const [allProducts, setAllProducts] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Fetch all products on initial load
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      setAllProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  const handleSearch = async () => {
    if (!searchTerm) {
      setSearchResults(null)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/products/search?query=${encodeURIComponent(searchTerm)}`)
      const data = await response.json()
      setSearchResults(data)
    } catch (error) {
      console.error("Error searching products:", error)
      setSearchResults(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        handleSearch()
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, handleSearch]) // Added handleSearch to dependencies

  return (
<div className="relative flex items-center ">    
    <div className="max-w-screen-2xl  pt-6  ">
        {/* Search Bar */}
        <div className="relative flex items-center gap-2 justify-end mb-6">
          <button
            onClick={() => setSearchBarOpen(!isSearchBarOpen)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center transition-all duration-300"
          >
            <GoSearch size={24} className="text-gray-700" />
          </button>

          <div
            className={`transition-all duration-300 flex items-center ${
              isSearchBarOpen ? "w-60 opacity-100" : "w-0 opacity-0"
            } overflow-hidden`}
          >
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
             
          </div>

          {/* Search Results Dropdown */}
          {searchResults && isSearchBarOpen && (
            <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              {isLoading ? (
                <div className="text-center py-4">Loading...</div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={product.imagePath || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                        <p className="font-medium mt-1">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-center py-4">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts?.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={product.imagePath || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


// "use client";
// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { GoSearch } from 'react-icons/go';
// import Image from 'next/image';

// const SearchBar = () => {
//   const [isSearchBarOpen, setSearchBarOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data, setData] = useState<{ name: string, imagePath: string, price: string }[] | null>(null);

//   const handleSearch = async () => {
//     if (!searchTerm) return;

//     try {
//       const response = await fetch(`/api/categories?query=${searchTerm}`);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="relative flex items-center gap-2">
//       <button
//         onClick={() => setSearchBarOpen(!isSearchBarOpen)}
//         className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center transition-all duration-300"
//       >
//         <GoSearch size={24} className="text-gray-700" />
//       </button>

//       <div
//         className={`transition-all duration-300 flex items-center ${isSearchBarOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}
//       >
//         <Input
//           type="text"
//           placeholder="Search through categories"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 px-4 py-2 bg-white text-black rounded-full hover:bg-black hover:text-white border border-gray-300 transition-all duration-300"
//         >
//           Search
//         </button>
//       </div>

//       {data && (
//         <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg p-4">
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <div key={index} className="p-2 border-b last:border-b-0">
//                 <div>{item.name}</div>
//                 <Image src={item.imagePath} alt={item.name} className="w-20 h-20 object-cover" />
//                 <p>${item.price}</p>
//               </div>
//             ))
//           ) : (
//             <div className="text-gray-500">No results found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
