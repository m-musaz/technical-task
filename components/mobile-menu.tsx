"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import GranolaLogo from "./ui/granolaLogo";

export default function MobileMenu({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="p-1">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col max-h-fit">
          {/* Menu Header */}
          <div className="px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-green-900 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <GranolaLogo/>
            </Link>
            <div className="flex items-center space-x-3">
              <Link
                href="/download"
                className="flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-sm bg-green-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">Get the App</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-col items-end space-y-3 antialiased font-[600] text-[2.5rem] -mr-2 text-gray-500 px-8 mt-4">
            <Link
              href="/pricing"
              className="hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/news"
              className="hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/careers"
              className="hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </div>

          {/* Footer Links */}
          <div className="mt-4 px-8 pb-8 pt-28">
            <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-gray-500 text-sm mb-4">
              <Link href="/help" className="hover:text-gray-700">
                Help Center
              </Link>
              <Link href="/contact" className="hover:text-gray-700">
                Contact us
              </Link>
              <Link href="/status" className="hover:text-gray-700">
                Status page
              </Link>
              <Link href="/privacy" className="hover:text-gray-700">
                Privacy & Security
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://linkedin.com"
                  className="hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="text-right text-gray-500 text-sm space-y-1">
              <p>© Granola inc 2025</p>
              <p>Made with ♥ in Shoreditch</p>
            </div>

            <div className="flex flex-col items-end space-y-1 text-gray-500 text-sm mt-4">
              <Link href="/privacy-policy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/press" className="hover:text-gray-700">
                Press kit
              </Link>
              <Link href="/license" className="hover:text-gray-700">
                License
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
