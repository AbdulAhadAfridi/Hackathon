"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  ChevronDown,
  Bell,
  X,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboardss",
    icon: LayoutDashboard,
  },
  {
    name: "Team",
    href: "/dashboardss/team",
    icon: Users,
  },
  {
    name: "Payments",
    href: "/dashboardss/payments",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/dashboardss/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
    else setSidebarOpen(true);
  }, [isMobile]);

  return (
    <><div></div></>
  );
}
