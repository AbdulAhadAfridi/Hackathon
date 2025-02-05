




"use client";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Feature from "../components/feature";
import { client } from "@/sanity/lib/client";
import type { Slug } from "sanity";
import Shopicons from "../components/shopIcons";
import Pagination from "../components/pagination";  // Make sure to import your Pagination component
import { FaSlidersH } from "react-icons/fa";
import CategoryFilters from "../components/categoryFilter";
import { CgChevronRight } from "react-icons/cg";

interface Prod {
  slug: Slug;
  id: number;
  name: string;
  price: number;
  imagePath: string;
  category: string;
  date: string;
  description: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const [products, setProducts] = useState<Prod[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Prod[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]{
        id,
        name,
        imagePath,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category,
        slug,
        colors,
        sizes
      }`);
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    };
    fetchProducts();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.getElementById("products-grid")?.offsetTop,
      behavior: "smooth",
    });
  };

  const [, setItemsPerPage] = useState(16);

  // Handle Category Filter
  const handleCategoryFilter = (selectedProducts: Prod[]) => {
    setFilteredProducts(selectedProducts);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Handle sorting
  const handleSortChange = (sortOption: string) => {
    const sortedProducts = [...filteredProducts];

    if (sortOption === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Popularity") {
      sortedProducts.sort((a, b) => b.stockLevel - a.stockLevel); // Assuming stockLevel = popularity
    }

    setFilteredProducts(sortedProducts);
  };
  const [showFilter, setShowFilter] = useState(false); // State to toggle category filter visibility
  const toggleFilter = () => {
    setShowFilter(!showFilter); // Toggle the filter visibility
  };
  return (
    <Suspense>
      <section className="relative max-w-screen-2xl mx-auto mb-10">
        <Image
          src="/shopimg1.png"
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image src="/logo.png" alt="Icon" width={64} height={64} className="w-16 h-16" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Shop</h2>
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
          <Link
              href="/"
              className="text-black text-lg font-semibold"
            >
              Home
            </Link>
            <CgChevronRight className="text-black font-bold text-lg" />
            <span className="text-lg">Shop</span>
          </p>
        </div>
      </section>
     
      <Shopicons
        totalProducts={filteredProducts.length}
        visibleProductsCount={currentProducts.length}
        onShowChange={(count) => setItemsPerPage(count)}
        onSortChange={handleSortChange}
      />
       <div className="mx-auto max-w-screen-2xl">
       <div className="flex items-center gap-2 cursor-pointer" onClick={toggleFilter}>
  <FaSlidersH size={20} className="sm:text-xl ml-4" />
  <p
    className={`text-black text-sm sm:text-lg transition-transform duration-300 ease-in-out ${
      showFilter ? "translate-x-2 opacity-100" : "translate-x-0 opacity-75  "
    }`}
  >
    Filter
  </p>
</div>
      {/* Category Filters */}
      {showFilter && (
  <div className="absolute  z-20 bg-white shadow-xl rounded-md p-6 max-h-[400px] overflow-y-auto animate-fade-in">
    {/* You can adjust max height and add scrolling */}
    <CategoryFilters products={products} onFilter={handleCategoryFilter} />
  </div>
)}

    </div>

      {/* Products Grid */}
      <div id="products-grid" className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto max-w-screen-2xl bg-gray-50 p-8">
        {currentProducts.map((product) => (
          <Link href={`/Shop/${product.slug.current}`} key={product.id}>
            <div className="group relative mx-auto transform hover:scale-105 duration-500 cursor-pointer rounded-lg shadow-lg bg-white p-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={product.imagePath || "/placeholder.svg"}
                  alt={product.name}
                  width={287}
                  height={287}
                  className="w-full h-80 object-cover group-hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-lg text-gray-800 font-medium mt-4 group-hover:text-blue-600">{product.name}</h3>
              <p className="text-xl text-gray-900 font-bold mt-2 group-hover:text-green-500">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <Feature />
    </Suspense>
  );
};

export default Shop;






