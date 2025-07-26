import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Fasih60", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fasih-rehman60/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/fasih.rehman.786/", label: "Instagram" },
  ]

  return (
    <footer className="bg-black border-t border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">PORT</span>
              <span className="text-pink-500 glow-text">FOLIO</span>
            </Link>
            <p className="text-gray-400 mt-2">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-pink-500 transition-colors">
                About Me
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-pink-500 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social & CV */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect & Download</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-pink-500 transition-colors p-2 rounded-lg hover:bg-pink-500/10 neon-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 neon-glow">
              <a href="./cv/Fasih-Ur-Rehman-CV.pdf"
                download="Fasih-Ur-Rehman-CV.pdf">
              <Download size={16} />
              <span>Download CV</span>
              </a>
            </button>
          </div>
        </div>

        <div className="border-t border-pink-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Fasih Ur Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
