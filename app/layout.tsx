import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Granola - The AI notepad for meetings",
  description: "Granola takes your raw meeting notes and makes them awesome",
  generator: 'v0.dev',
  icons: {
    icon: "https://www.granola.ai/favicon.ico"
  }
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
