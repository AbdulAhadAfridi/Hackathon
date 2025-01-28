import { client } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';


interface Product{
    id : number,
    name: string,
    imagePath: string,
    price: number,
    description: string,
    isFeaturedProduct: boolean,
    discountPercentage: number,
    category: string

}
const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query; // Get the query from the URL (e.g., category name)
  const products: Product[]  = await client.fetch('https://template-0-beta.vercel.app/api/product')
 
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  // Filter the products based on the category
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase()
  );

  res.status(200).json(filteredProducts);
};

export default handler;
