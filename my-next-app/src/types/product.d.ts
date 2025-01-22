export interface Product {
    stockLevel: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    price: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    imagePath: string | StaticImport;
    id: number;
    name: string;
    description: string;
    slug: "slug";
    current : string;
  }
   