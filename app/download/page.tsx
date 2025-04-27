import { AppleIcon } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Download Granola</h1>

      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Mac Version</h2>
          <Link
            href="/download-mac"
            className="flex items-center justify-center space-x-3 bg-green-400 hover:bg-green-500 text-black rounded-full px-6 py-3 text-lg font-medium transition-colors w-full"
          >
            <AppleIcon className="h-5 w-5" />
            <span> Download for Mac</span>
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">iOS Version</h2>
          <p className="text-gray-600 mb-4">iOS version is currently in early access.</p>
          <Link
            href="/ios-access"
            className="flex items-center justify-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-50 w-full"
          >
            <span className="text-gray-800">📱 Get iOS early access</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
