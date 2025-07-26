import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with MERN stack featuring user authentication, payment integration.",
      image: "/ecommerce.png?height=300&width=400&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
      liveUrl: "https://vimeo.com/1104695627?share=copy#t=0",
      featured: true,
    },
    {
      title: "WordPress Business Site",
      description:
        "Custom WordPress theme development for a local business with responsive design and SEO optimization.",
      image: "/placeholder.svg?height=300&width=400&text=WordPress+Business+Site",
      technologies: ["Soon"],
      featured: true,
    },
    {
      title: "Lumiere Resturant - Food Website",
      description: "A sleek and modern React-based landing page for Lumera Restaurant, showcasing its ambiance, menu highlights, and online reservation.",
      image: "/food pic.png?height=300&width=400&text=Task+Management+App",
      technologies: ["React", "Firebase", "FramerMotion", "Material-UI", "JavaScript"],
      liveUrl: "https://fasih60.github.io/Lumi-re/",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles and smooth animations.",
      image: "/portfolio.png?height=300&width=400&text=Portfolio+Website",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "GSAP"],
      liveUrl: "https://sample-portfoleo.netlify.app/",
      featured: false,
    },
    {
      title: "GadgetX showcase",
      description: "A modern, responsive React landing page for showcasing the features and design of a fictional smart gadget called GadgetX.",
      image: "/Gadget.png?height=300&width=400&text=Weather+Dashboard",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      liveUrl: "https://gatgetx.netlify.app/",
      featured: false,
    },
    {
      title: "Business Landing Page",
      description: "A sleek and modern business landing page built with React, showcasing services, testimonials, and a contact form.",
      image: "/business.png?height=300&width=400&text=Blog+CMS",
      technologies: ["React", "CSS", "JS", "bootstrap", "clone"],
      liveUrl: "https://vimeo.com/1104689147?share=copy#t=0",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text glow-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A showcase of my work and the technologies I love working with
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors"
                        aria-label="View Live Project"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-pink-500 hover:text-pink-400 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="cyber-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-400 mb-6">I'm always open to discussing new opportunities and exciting projects.</p>
            <Link href="/contact" className="cyber-button">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
