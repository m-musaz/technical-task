import Link from "next/link"
import { AppleIcon } from "lucide-react"
import Header from "@/components/header"
import DemoSection from "@/components/demo-section"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Main background gradient - starts from bottom middle and fades to white at edges */}
      <div style={{
    background: 'radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), ' +
                'radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), ' +
                'radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)'
  }} className="absolute inset-0 -z-10"></div>

      <Header />

      {/* Hero Section */}
      <section className="container mx-auto -mb-8 px-4 py-12 md:py-24 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* iOS Early Access Button */}
          <div className="flex justify-center mb-12">
            <Link
              href="/ios-access"
              className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-50"
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

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">The </span>
            <span className="text-green-900">AI notepad</span>
            <span className="text-gray-300"> for people in</span>
            <br />
            <span className="text-green-900">back-to-back meetings</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Granola takes your raw meeting notes and makes
            <br className="hidden md:block" /> them awesome
          </p>

          {/* Download Button */}
          <div className="flex justify-center mb-16">
            <Link
              href="/download-mac"
              className="flex items-center space-x-3 bg-[#81de67] hover:bg-green-500 text-black rounded-full px-8 py-4 text-lg font-medium transition-colors"
            >
              <span className="block md:hidden">Send me a download ink</span>
              <span className="hidden md:block">  Download Granola for Mac</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />
    </main>
  )
}
