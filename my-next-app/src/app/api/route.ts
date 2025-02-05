import { NextResponse } from 'next/server'

// This is a mock product list. Replace this with your actual data fetching logic.
const products =[
    {
      id: "1",
      name: "Chair Wibe",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1200",
      category: "Chair",
    },
    {
      id: "2",
      name: "Armchair Chair Set",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "850",
      category: "Chair",
    },
    {
      id: "3",
      name: "Pink Lounge Chair",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1600",
      category: "Chair",
    },
    {
      id: "4",
      name: "Stylish Armchair",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "780",
      category: "Sofa",
    },
    {
      id: "5",
      name: "Hans Wegner Style Three-Legged Shell Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
      price: "990",
      category: "Chair",
    },
    {
      id: "6",
      name: "Rapson Thirty-Nine Sofa",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1300",
      category: "Sofa",
    },
    {
      id: "7",
      name: "Nautilus Lounge Chair",
      imagePath:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1450",
      category: "Sofa",
    },
    {
      id: "8",
      name: "High Quality Modern Sofa",
      imagePath:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "150",
      category: "Sofa",
    },
    {
      id: "9",
      name: "Cozy Sofa",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "520",
      category: "Sofa",
    },
    {
      id: "10",
      name: "Alpha Table",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "900",
      category: "Table",
    },
    {
      id: "11",
      name: "Replica Table",
      imagePath:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "750",
      category: "Table",
    },
    {
      id: "12",
      name: "Sleek Modern Table",
      imagePath:
        "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "2000",
      category: "Table",
    },
    
    {
      id: "14",
      name: "Leisure Sofa Chair Set",
      imagePath:
        "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1800",
      category: "Sofa",
    },
    
    {
      id: "16",
      name: "Matilda Velvet Bed",
      imagePath:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "600",
      category: "Bed",
    },
    {
      id: "17",
      name: "Vibrant Gold Bed",
      imagePath:
        "https://images.unsplash.com/photo-1602826980491-52d558ce34c5?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "1400",
      category: "Bed",
    },
    
  ];

export async function GET() {
  return NextResponse.json(products)
}