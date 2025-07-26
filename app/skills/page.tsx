import { Code, Database, Globe, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Front-End",
      color: "from-pink-500 to-red-500",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      icon: Database,
      title: "Back-End",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      icon: Globe,
      title: "CMS",
      color: "from-green-500 to-blue-500",
      skills: [{ name: "WordPress", level: 85 }],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 80 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text glow-text">Skills</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-pink-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "GraphQL", "Docker", "AWS", "Firebase"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-full text-gray-300 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
