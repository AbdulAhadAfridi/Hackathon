"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAuth } from "@/context/authContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/Login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-2xl"
      >
        <h2 className="mt-6 text-4xl font-bold text-center text-gray-900">
          Your Profile
        </h2>
        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <Image
              src={user.image || "/profilepic.jpg"}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500"
            />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">{user.name}</p>
            <p className="text-lg text-gray-600">{user.email}</p>
          </div>
          <div>
            <button
              onClick={logout}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-300 bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Log out
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}