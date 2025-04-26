"use client"

import { useState } from "react"
import Link from "next/link"
import { AppleIcon, X, Menu } from "lucide-react"

export default function MobileMenu({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50 p-4 rounded-lg m-4">
          <div className="flex flex-col space-y-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              News
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link
              href="/download"
              className={`flex items-center space-x-2 rounded-full px-6 py-2.5 transition-colors duration-300 w-fit ${
                scrolled ? "bg-green-300 hover:bg-green-400" : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <AppleIcon className="h-5 w-5" />
              <span className="font-medium">Download</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
