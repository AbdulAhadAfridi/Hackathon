// import { useEffect, useState } from 'react';
// import { Product } from '@/types/product';

// export const useFetchProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('/api/products');
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return products;
// };
