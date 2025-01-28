export interface Product {
    stockLevel: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    price: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    imagePath: string | StaticImport;
    _id: string; 
    name: string;
    description: string;
    slug: "slug";
    current : string;
    category: string;
    colors: string[];
    sizes: string[];
  }
   