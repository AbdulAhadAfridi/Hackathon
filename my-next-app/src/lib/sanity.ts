import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "w7iuithw",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-08-31",
  useCdn: true,
})
export const PRODUCT_QUERY = `
*[_type == "product"]{
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

 }`

export const CUSTOMERS_QUERY = `
*[_type == "customer"] {
  _id,
  name,
  email,
  status,
  lastOrder
}
`

export const ORDERS_QUERY = `
*[_type == "order"] | order(_createdAt desc) {
  _id,
  customer->{
    name,
    email
  },
  products[]->{
    name,
  },
  status,
  _createdAt,
  totalAmount
}
`