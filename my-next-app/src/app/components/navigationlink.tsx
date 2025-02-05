import Link from 'next/link'
import React from 'react'
import { CgChevronRight } from 'react-icons/cg'

const Navigationlink = () => {
  return (
    <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/shopnow"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>
  )
}

export default Navigationlink
