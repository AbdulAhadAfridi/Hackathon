import { Product } from '@/types/product';

export const filterProducts = (products: Product[], searchTerm: string) => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
