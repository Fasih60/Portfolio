"use client"
import { ArrowRight, Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 opacity-20"></div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text glow-text">Fasih</span> Ur Rehman
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                FULL STACK DEVELOPER & WORDPRESS DEVELOPER
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Motivated Full Stack Developer with experience in MERN stack and WordPress, passionate about building
              scalable and user-friendly web solutions that push the boundaries of digital innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              {/* Try with regular anchor tags first */}
              <a
                href="/projects"
                className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors cursor-pointer"
                onClick={() => console.log("Projects button clicked")}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Eye size={20} />
                  <span>View Projects</span>
                </div>
              </a>

              <a
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors cursor-pointer"
                onClick={() => console.log("Contact button clicked")}
              >
                <div className="flex items-center justify-center space-x-2">
                  <ArrowRight size={20} />
                  <span>Contact Me</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-pink-500 relative">
                <img
                  src="/profile.jpg?height=320&width=320&text=Fasih+Ur+Rehman"
                  alt="Fasih Ur Rehman"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 to-red-500/30 blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </section>
    </div>
  )
}
