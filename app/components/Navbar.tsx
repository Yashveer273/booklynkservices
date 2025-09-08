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
    { name: 'Pricing Plan', href: '/pricing' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Dashboard', href: '/dash' },
    
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="w-full relative flex items-center">
        
        {/* Left Logo + Company Name */}
        <div className="flex items-center space-x-2 absolute left-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/Book-Lynk-Services-Pvt-Ltd-logo.jpg"
              alt="BookLynk Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-semibold" style={{color:"orange"}}>
              Book Lynk Services Pvt Ltd
            </span>
          </Link>
        </div>

        {/* Center White Pill Navigation */}
        <div className="hidden md:flex bg-white rounded-full shadow px-8 py-5 items-center space-x-6 mx-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-[#ff4500]'
                  : 'text-black hover:text-[#ff4500]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Contact Button */}
        <div className="hidden md:flex absolute right-6">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-[#ff4500] text-white hover:bg-[#e03e00] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6">
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
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#ff4500] bg-orange-50'
                    : 'text-black hover:text-[#ff4500] hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#ff4500] text-white hover:bg-[#e03e00]"
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
