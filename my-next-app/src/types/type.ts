import type { StaticImageData } from "next/image"

export interface IProduct {
  id: string
  title: string
  image: string[] | StaticImageData | string
  slug: string
  price: number
  category: string
  description: string
  size: string[]
  color: string[]
  qty: number
  discount?: number
}

export interface Cart extends IProduct {
  uuid: string | number
}

export interface ProductState {
  items: IProduct[]
  loading: boolean
  error: string | null
}

