"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AppleIcon } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-full shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-green-900 flex items-center">
            granola
            <span className="ml-1 h-6 w-0.5 bg-green-400"></span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/pricing" className="text-gray-500 hover:text-gray-700 font-medium">
            Pricing
          </Link>
          <Link href="/news" className="text-gray-500 hover:text-gray-700 font-medium">
            News
          </Link>
          <Link href="/careers" className="text-gray-500 hover:text-gray-700 font-medium">
            Careers
          </Link>
        </div>
        <Link
          href="/download"
          className={`flex items-center space-x-2 rounded-full px-6 py-2.5 transition-colors duration-300 ${
            scrolled ? "bg-green-300 hover:bg-green-400" : "bg-white border border-gray-200 hover:bg-gray-50"
          }`}
        >
          <AppleIcon className="h-5 w-5" />
          <span className="font-medium">Download</span>
        </Link>
        <div className="md:hidden">
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  )
}
