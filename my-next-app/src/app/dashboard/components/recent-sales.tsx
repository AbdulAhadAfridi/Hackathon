import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { client, ORDERS_QUERY } from "@/lib/sanity";

async function getRecentSales() {
  return client.fetch(ORDERS_QUERY);
}

export async function RecentSales() {
  const sales = await getRecentSales();

  return (
    <div className="space-y-8">
      {sales.slice(0, 5).map((sale: any) => (
        <div key={sale._id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder-user.jpg" alt={sale.customer.name} />
            <AvatarFallback>
              {sale.customer.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {sale.customer.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {sale.customer.email}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(sale.totalAmount)}
          </div>
        </div>
      ))}
    </div>
  );
}