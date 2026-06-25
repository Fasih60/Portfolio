"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-50 flex justify-center pt-4 md:pt-6 px-4 md:px-6 transition-all duration-300 ${scrolled ? 'pt-2 md:pt-3' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-3xl transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-2xl border border-white/10' : 'bg-black/50 backdrop-blur-md border border-white/5'}`}>
        
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

        {/* Actions & Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="https://wa.me/923066899891"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-[13px] font-semibold uppercase tracking-widest"
          >
            <Phone size={15} className="text-red-500" />
            Contact
          </a>
          
          <button 
            className="lg:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-4 right-4 mt-2 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden lg:hidden flex flex-col"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-gray-300 font-semibold hover:text-red-500 hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest text-sm"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/923066899891"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 mx-2 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
              >
                <Phone size={16} /> Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
