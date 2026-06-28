'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Plans', href: '/plan' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left Logo + Company Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/Book-Lynk-Services-Pvt-Ltd-logo.jpg"
              alt="Booklynk"
              width={54}
              height={54}
              className="rounded-lg object-cover"
            />

            <div>

              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Book<span className="text-[var(--color-orange)]">lynk</span>
              </h2>

              <p className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400">
                Services Pvt Ltd
              </p>

            </div>

          </Link>
        </div>

        {/* Center White Pill Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-[15px] font-medium transition-all duration-300 ${isActive(item.href)
                ? 'text-[var(--color-orange)] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-[var(--color-orange)]'
                : 'text-gray-700 hover:text-[var(--color-orange)]'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Contact Button */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="bg-[var(--color-orange)] text-white px-8 py-4 rounded-full border border-transparent font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white bg-black/30 hover:bg-black/50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl lg:hidden">
          <div className="px-5 py-5 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActive(item.href)
                  ? "bg-orange-50 text-[var(--color-orange)]"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-[var(--color-orange)] text-white font-semibold hover:bg-orange-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar