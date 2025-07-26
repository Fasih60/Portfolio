import { Award, Calendar, ExternalLink } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "CodeAlpha",
      date: "2025",
      description: "Comprehensive training in MERN stack development with hands-on projects",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      credentialUrl: "#",
      image: "/Fasih-Ur-Rehman.svg?height=200&width=300&text=Full+Stack+Certificate",
    },
    {
      title: "JavaScript",
      issuer: "FreeCodeCamp",
      date: "2025",
      description: "Advanced JavaScript concepts including ES6+, async programming, and DOM manipulation",
      skills: ["JavaScript", "ES6+", "DOM", "Async/Await"],
      credentialUrl: "#",
      image: "/JavaScript-Cerficate.svg?height=200&width=300&text=JavaScript+Certificate",
    },
    {
      title: "WordPress",
      issuer: "DigiSkills",
      date: "2023",
      description: "Custom theme development, plugin creation, and WordPress best practices",
      skills: ["WordPress", "PHP", "MySQL", "Custom Themes"],
      credentialUrl: "#",
      image: "/WordPress Certificate.svg?height=200&width=300&text=WordPress+Certificate",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2024",
      description: "Modern CSS techniques, Flexbox, Grid, and mobile-first design principles",
      skills: ["CSS3", "Flexbox", "Grid", "Responsive Design"],
      credentialUrl: "#",
      image: "/placeholder.svg?height=200&width=300&text=CSS+Certificate",
    },
    {
      title: "Git Version Control",
      issuer: "GitHub",
      date: "2023",
      description: "Advanced Git workflows, branching strategies, and collaborative development",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      credentialUrl: "#",
      image: "/placeholder.svg?height=200&width=300&text=Git+Certificate",
    },
    {
      title: "Content Management System",
      issuer: "Alison",
      date: "2025",
      description: "e-commerce, plugins, themes and performance optimization",
      skills: ["WordPress", "Hosting", "SQL", "Performance"],
      credentialUrl: "#",
      image: "/certificate wordpress.svg?height=200&width=300&text=MongoDB+Certificate",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text glow-text">Certificates</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-pink-500 rounded-full">
                    <Award size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center space-x-2 text-pink-500 mb-2">
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs border border-pink-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential */}
                <div className="pt-2">
                  <a
                    href={cert.credentialUrl}
                    className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View Credential</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">10+</div>
            <div className="text-gray-300">Certificates Earned</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">5+</div>
            <div className="text-gray-300">Learning Platforms</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
            <div className="text-gray-300">Hours of Learning</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">2025</div>
            <div className="text-gray-300">Latest Certification</div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              In the rapidly evolving world of technology, staying current is not just an advantage—it's essential.
              These certifications represent my commitment to continuous learning and professional growth. Each
              certificate has equipped me with practical skills and theoretical knowledge that I apply directly to my
              projects. I believe in learning by doing, and these credentials validate the hands-on experience I've
              gained through real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
