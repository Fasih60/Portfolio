import { Code, Heart, Lightbulb, Target } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Passionate Developer",
      description: "Love crafting clean, efficient code that solves real-world problems",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices in development",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that exceed expectations",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Believe in creating experiences that users love and find intuitive",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text glow-text">Me</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Get to know the person behind the code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden neon-border">
                <img
                  src="/profile.jpg?height=320&width=320&text=Professional+Photo"
                  alt="Fasih Ur Rehman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hello, I'm <span className="text-pink-500">Fasih Ur Rehman</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey in
                software development began with a curiosity about how digital experiences are crafted, and it has
                evolved into a deep commitment to creating scalable, user-friendly solutions.
              </p>
              <p>
                With expertise in the MERN stack and WordPress development, I bridge the gap between creative design and
                functional programming. I believe that great software is not just about clean code, but about
                understanding user needs and translating them into intuitive digital experiences.
              </p>
              <p>
                My approach to development is rooted in continuous learning and adaptation. The tech landscape evolves
                rapidly, and I'm committed to staying at the forefront of industry trends and best practices. Whether
                it's exploring new frameworks, optimizing performance, or implementing cutting-edge features, I'm always
                eager to push boundaries.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring fellow developers,
                or exploring the latest in web technologies. I'm driven by the belief that technology should make life
                better, and I'm passionate about being part of that transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="cyber-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                  <item.icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
