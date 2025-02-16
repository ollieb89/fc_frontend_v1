'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image src="/vercel.svg" alt="Logo" width={120} height={30} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</Link>
            <Link 
              href="/login" 
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1 px-2">
          <Link 
            href="#features"
            className="block px-4 py-2.5 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            Features
          </Link>
          <Link 
            href="#pricing"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Pricing
          </Link>
          <Link 
            href="#contact"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </Link>
          <Link 
            href="/login"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
