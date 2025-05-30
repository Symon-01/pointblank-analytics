// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PointBlank Analytics',
  description: 'Uncovering Reality Through Numbers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        {/* Header */}
        <header className="w-full border-b-4 border-cyan-600">
          <div className="bg-white flex items-center justify-between p-4 relative">
            {/* Hamburger */}
            <div className="flex flex-col gap-1 cursor-pointer">
              <span className="w-6 h-0.5 bg-red-600"></span>
              <span className="w-6 h-0.5 bg-red-600"></span>
              <span className="w-6 h-0.5 bg-red-600"></span>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img
                src="/logo.png" // Ensure this path points to your logo image in the public folder
                alt="PointBlank Logo"
                className="h-20 object-contain"
              />
            </div>

            {/* Search Bar */}
            <div className="flex items-center border-2 border-red-600 px-4 py-1 rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-blue-800 font-bold placeholder-blue-500"
              />
              <span className="ml-2 text-red-600 text-lg">🔍</span>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="bg-cyan-600 text-white font-bold text-sm">
            <ul className="flex justify-center space-x-6 py-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Economic Policy</a></li>
              <li><a href="#" className="hover:underline">Tea Insights</a></li>
              <li><a href="#" className="hover:underline">Data Visualization</a></li>
              <li><a href="#" className="hover:underline">Podcasts</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
