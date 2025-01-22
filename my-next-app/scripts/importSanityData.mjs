import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Replace with your API token
  apiVersion: '2021-08-31', // Use a compatible API version
});

async function insertProductData(product) {
  try {
    console.log(`Inserting product: ${product.name}`);
    await client.create({
      _type: 'product',
      id: product.id,
      name: product.name,
      imagePath: product.imagePath,
      price: parseFloat(product.price),
      description: product.description,
      discountPercentage: product.discountPercentage,
      isFeaturedProduct: product.isFeaturedProduct,
      stockLevel: product.stockLevel,
      category: product.category,
    });
    console.log(`Product inserted successfully: ${product.name}`);
  } catch (error) {
    console.error(`Failed to insert product: ${product.name}`, error);
  }
}

async function fetchAndInsertData() {
  try {
    console.log('Fetching products from API...');
    const { data: products } = await axios.get(
      'https://template-0-beta.vercel.app/api/product'
    );

    console.log(`Fetched ${products.length} products.`);
    for (const product of products) {
      await insertProductData(product);
    }
    console.log('All products inserted successfully!');
  } catch (error) {
    console.error('Error fetching or inserting data:', error);
  }
}

fetchAndInsertData();
