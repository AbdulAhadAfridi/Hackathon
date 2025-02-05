



"use client";

import React, { useState, useEffect } from "react";
import { Slug } from "sanity";

// Use the Prod type here
interface Prod {
  id: number;
  name: string;
  imagePath: string;
  price: number;
  category: string;
  slug: Slug;               // Added missing fields
  date: string;
  description: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

interface CategoryFiltersProps {
  products: Prod[];
  onFilter: (filteredProducts: Prod[]) => void; // Updated to Prod[]
}

const categories = ["Chair", "Sofa", "Table", "Bed"];

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ products, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      onFilter(products); // Show all products if no category is selected
    } else {
      const filteredItems = products.filter((item) =>
        selectedCategories.includes(item.category)
      );
      onFilter(filteredItems); // Pass filtered Prod[]
    }
  }, [selectedCategories, products, onFilter]);

  return (
    <div className="flex p-6 space-x-8 mx-auto max-w-screen-2xl">
      <div className="w-1/8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter Products</h2>

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

        <button
          onClick={() => setSelectedCategories([])}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default CategoryFilters;
