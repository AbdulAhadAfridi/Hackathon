import { PaginationComponent } from "@/app/components/paginationComponent"
import { Navigation } from "@/app/components/navigation"

export default function Page1({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const totalPages = 20  // Assuming 5 sub-pages within Page 1

  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1} on Page 1-${currentPage}`)

  return (
    <div>
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Page 1</h1>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

