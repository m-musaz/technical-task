"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AppleIcon } from "lucide-react"
import MobileMenu from "./mobile-menu"
import GranolaLogo from "./ui/granolaLogo";

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
    <header className="sticky top-0 z-50 bg-white md:bg-transparent">
      {/* Desktop Navigation - Centered with max-width */}
      <div className="hidden md:flex justify-center px-4 py-3 max-w-fit mx-auto">
        <div className="w-full max-w-2xl bg-gray-50 rounded-full shadow-md px-5 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-green-900 flex items-center">
              <GranolaLogo/>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/pricing" className="text-gray-500 hover:text-gray-700 hover:bg-black/5 hover:rounded-xl px-3 py-1.5 font-medium text-sm">
              Pricing
            </Link>
            <Link href="/news" className="text-gray-500 hover:text-gray-700 hover:bg-black/5 hover:rounded-xl px-3 py-1.5 font-medium text-sm">
              News
            </Link>
            <Link href="/careers" className="text-gray-500 hover:text-gray-700 hover:bg-black/5 hover:rounded-xl px-3 py-1.5 font-medium text-sm">
              Careers
            </Link>
            <Link
              href="/download"
              className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 transition-colors duration-300 text-sm ${
                scrolled ? "bg-green-300 hover:bg-green-400" : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              
              <span className="font-medium"> Download</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full width with hamburger */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-900 flex items-center">
          <GranolaLogo/>
        </Link>
        <div className="flex items-center space-x-3">
          <Link
            href="/download"
            className={`flex items-center space-x-1.5 rounded-full px-4 py-1.5 transition-colors duration-300 text-sm ${
              scrolled ? "bg-green-300 hover:bg-green-400" : "bg-white border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <span className="font-medium">Get the App</span>
          </Link>
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  )
}
