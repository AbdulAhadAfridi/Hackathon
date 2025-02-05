"use client"

import { createContext, useContext, useEffect, useState } from "react"

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  slug : string
  // Add any other product properties you have
}

type WishlistContextType = {
  wishlist: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([])

  useEffect(() => {
    // Load wishlist from localStorage on mount
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev // Product already in wishlist
      }
      const newWishlist = [...prev, product]
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      return newWishlist
    })
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newWishlist = prev.filter((product) => product.id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(newWishlist))
      return newWishlist
    })
  }

  const isInWishlist = (productId: string) => {
    return wishlist.some((product) => product.id === productId)
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

