"use client";
import { Suspense, useEffect, useState } from "react";
import { Overview } from "./components/overview";
import { Subscriptions } from "./components/subscriptions";
import { TeamMembers } from "./components/team-members";
import { CookieSettings } from "./components/cookie-settings";
import { CreateAccount } from "./components/create-account";
import { Payments } from "./components/payments";
import { PaymentMethod } from "./components/payment-method";
import { Analytics } from "./components/analytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

async function getDashboardData() {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }
  return res.json();
}

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Skeleton className="h-[200px] w-full bg-gray-800" />;
  }

  return (
    <div className="flex flex-col gap-4 bg-black text-white p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2 bg-gray-800 border border-[#FBEBB5]">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Skeleton className="h-[200px] w-full bg-gray-700" />}>
              <Overview data={dashboardData.totalRevenue} />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-gray-800 border border-[#FBEBB5]">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Skeleton className="h-[200px] w-full bg-gray-700" />}>
              <Subscriptions data={dashboardData.subscriptions} />
            </Suspense>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamMembers />
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Cookie Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <CookieSettings data={dashboardData.cookieConsent} />
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateAccount />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Skeleton className="h-[400px] w-full bg-gray-700" />}>
              <Payments />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-[#FBEBB5]">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentMethod />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-[#FBEBB5]">Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="h-[300px] w-full bg-gray-700" />}>
            <Analytics data={dashboardData.analytics} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
