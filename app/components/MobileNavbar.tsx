"use client";

import Link from 'next/link'
import { Raleway } from 'next/font/google'
import { useState } from 'react' // Import useState for menu toggle

const raleway = Raleway({ weight: ['500'] })

const urls = {
    "Home": "/",
    "Programming Projects": "/programming_projects",
    "Game Projects": "/game_projects",
    "Extra": "/extra",
    "Contact": "/contact"
}

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false) // State to track menu open/closed

    return (
        <div className={raleway.className}>
            {/* Navbar container with sticky positioning */}
            <div className="sticky top-0 z-50 bg-[#292929]">
                <div className="flex justify-between items-center px-4 py-4">
                    {/* Logo or brand name could go here */}
                    <div className="text-white text-xl">Logo</div>

                    {/* Burger menu button - only visible on mobile */}
                    <button 
                        className="text-white lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>

                    {/* Desktop menu - hidden on mobile */}
                    <div className="hidden lg:flex">
                        {Object.entries(urls).map(([name, url]) => (
                            <Link 
                                key={name} 
                                href={url} 
                                className="p-5 text-white hover:bg-white hover:text-black hover:rounded-3xl transition-all duration-300"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile menu - shown when isMenuOpen is true */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-[#292929]">
                        {Object.entries(urls).map(([name, url]) => (
                            <Link 
                                key={name} 
                                href={url} 
                                className="block px-3 py-2 text-white hover:bg-white hover:text-black hover:rounded-xl transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}