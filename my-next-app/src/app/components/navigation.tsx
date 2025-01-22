import Link from "next/link"

export function Navigation() {
  return (
    <nav className="mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/page1" className="text-blue-500 hover:underline">
            Page 1
          </Link>
        </li>
        <li>
          <Link href="/page2" className="text-blue-500 hover:underline">
            Page 2
          </Link>
        </li>
        <li>
          <Link href="/page3" className="text-blue-500 hover:underline">
            Page 3
          </Link>
        </li>
        <li>
          <Link href="/page4" className="text-blue-500 hover:underline">
            Page 4
          </Link>
        </li>
        <li>
          <Link href="/page5" className="text-blue-500 hover:underline">
            Page 5
          </Link>
        </li>
        <li>
          <Link href="/page6" className="text-blue-500 hover:underline">
            Page 6
          </Link>
        </li>
      </ul>
    </nav>
  )
}

