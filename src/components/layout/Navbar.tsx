"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 md:pt-6 px-4 transition-all duration-300 ${scrolled ? 'pt-2 md:pt-3' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className={`w-full max-w-7xl flex items-center justify-between px-6 md:px-10 py-4 rounded-3xl transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-2xl border border-white/10' : 'bg-black/50 backdrop-blur-md border border-white/5'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-black text-white tracking-tighter">
              FA<span className="text-red-600">SIH</span>
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-300 text-[13px] font-semibold hover:text-red-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/923066899891"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-[13px] font-semibold uppercase tracking-widest"
          >
            <Phone size={15} className="text-red-500" />
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
