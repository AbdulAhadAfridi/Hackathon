"use client"

import Image from "next/image"
import Link from "next/link"
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import React, { useState, useEffect } from "react"
import Notification from "./notificationComponent"
import { AiOutlineBell } from "react-icons/ai"
import { FaQuestion } from "react-icons/fa"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNotificationIconClick = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="max-w-[1440px] h-[124px] flex flex-col sm:flex-row items-center sm:justify-between px-1 py-4 mx-auto bg-background transition-colors duration-100">
      {/* Top: Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">MORENT</span>
          </Link>
        </h1>

    

          <button
            onClick={handleNotificationIconClick}
            className="text-2xl w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-100"
          >
            <AiOutlineBell />
          </button>

          {/* Notification Component */}
          {showNotification && (
            <Notification
              message="No New Notifications !"
              type="info"
              onClose={() => setShowNotification(false)}
              id={""}
            />
          )}

          <Link href="/help-center">
            <p className="text-muted-foreground hover:text-primary transition-colors duration-100 flex items-center">
              <FaQuestion className="mr-2" />
              Help Center
            </p>
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="w-11 h-11 rounded-full border border-border hover:border-primary transition-colors duration-100 px-[10px] py-[10px] flex items-center justify-center"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <MdLightMode className="text-muted-foreground w-6 h-6 hover:text-primary transition-colors duration-100 cursor-pointer" />
          ) : (
            <MdDarkMode className="text-muted-foreground w-6 h-6 hover:text-primary transition-colors duration-100 cursor-pointer" />
          )}
        </button>

        </div>
  )
}

export default Navbar;