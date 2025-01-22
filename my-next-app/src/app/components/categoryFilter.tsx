"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const categories = ["Chair", "Sofa", "Table", "Bed"];

interface MockItem {
  id: string;
  name: string;
  imagePath: string;
  price: string;
  category: string;
}

const mockItems: MockItem[] =[
  {
    "id": "1",
    "name": "Chair Wibe",
    "imagePath": "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1200",
    "category": "Chair"
  },
  {
    "id": "2",
    "name": "Armchair Chair Set",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "850",
    "category": "Chair"
  },
  {
    "id": "3",
    "name": "Pink Lounge Chair",
    "imagePath": "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1600",
    "category": "Chair"
  },
  {
    "id": "4",
    "name": "Stylish Armchair",
    "imagePath": "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "780",
    "category": "Sofa"
  },
  {
    "id": "5",
    "name": "Hans Wegner Style Three-Legged Shell Chair",
    "imagePath": "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
    "price": "990",
    "category": "Chair"
  },
  {
    "id": "6",
    "name": "Rapson Thirty-Nine Sofa",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1300",
    "category": "Sofa"
  },
  {
    "id": "7",
    "name": "Nautilus Lounge Chair",
    "imagePath": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1450",
    "category": "Sofa"
  },
  {
    "id": "8",
    "name": "High Quality Modern Sofa",
    "imagePath": "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "150",
    "category": "Sofa"
  },
  {
    "id": "9",
    "name": "Cozy Sofa",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "520",
    "category": "Sofa"
  },
  {
    "id": "10",
    "name": "Alpha Table",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "900",
    "category": "Table"
  },
  {
    "id": "11",
    "name": "Replica Table",
    "imagePath": "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "750",
    "category": "Table"
  },
  {
    "id": "12",
    "name": "Sleek Modern Table",
    "imagePath": "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "2000",
    "category": "Table"
  },
  {
    "id": "13",
    "name": "Liberty Center",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1100",
    "category": "Table"
  },
  {
    "id": "14",
    "name": "Leisure Sofa Chair Set",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1800",
    "category": "Sofa"
  },
  {
    "id": "15",
    "name": "Diondre Chair",
    "imagePath": "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "720",
    "category": "Chair"
  },
  {
    "id": "16",
    "name": "Matilda Velvet Bed",
    "imagePath": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "600",
    "category": "Bed"
  },
  {
    "id": "17",
    "name": "Solid Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "100",
    "category": "Bed"
  },
  {
    "id": "18",
    "name": "White Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "120",
    "category": "Bed"
  },
  {
    "id": "19",
    "name": "Red Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1670869816720-de59bfc2be74?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "320",
    "category": "Bed"
  },
  {
    "id": "20",
    "name": "Blue Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "780",
    "category": "Bed"
  },
  {
    "id": "21",
    "name": "Luxury Flower Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661886455585-03ddf4347796?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "2500",    
    "category": "Bed"
  }
];

const CategoryFilters = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<MockItem[]>(mockItems);

  // Handle category toggle
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter items based on selected categories
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredItems(mockItems); // Show all items if no category is selected
    } else {
      setFilteredItems(
        mockItems.filter((item) =>
          selectedCategories.includes(item.category)
        )
      );
    }
  }, [selectedCategories]);

  return (
    <div className="flex p-6 space-x-8 mx-auto max-w-screen-2xl">
      {/* Filter Sidebar */}
      <div className="w-1/4  bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter Products</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${
                  selectedCategories.includes(category)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => setSelectedCategories([])}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Clear Filters
        </button>
      </div>

      {/* Products List */}
      <div className="w-3/4 ">
        <div className="grid grid-cols-3 gap-6  ">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg overflow-hidden group transform hover:scale-[1.05] duration-500 hover:cursor-pointer ">
              <Image
                src={item.imagePath}
                alt={item.name}
                className="w-full h-80 object-cover "
                width={287}
                height={287}
                />
           {/* Product Name */}
<h3 className="text-lg text-gray-800 font-medium mt-4 group-hover:text-blue-600 text-center">
  {item.name}
</h3>
{/* Product Price */}
<p className="text-xl text-gray-900 font-bold mt-2 group-hover:text-green-500 text-center">
  ${item.price}
</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
