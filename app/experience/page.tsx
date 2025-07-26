import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Remote Web Developer",
      company: "AppEvolve",
      period: "Present",
      location: "Remote",
      type: "Full-time",
      status: "current",
      responsibilities: [
        "Working on full stack and WordPress-based projects remotely",
        "Building scalable, maintainable applications with focus on performance and design",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Implementing modern development practices and code optimization techniques",
      ],
    },
    {
      title: "Intern Front-End Developer",
      company: "CodeAlpha",
      period: "1 Month",
      location: "Remote",
      type: "Internship",
      status: "completed",
      responsibilities: [
        "Built 3+ responsive web projects using HTML, CSS, and JavaScript",
        "Gained practical experience with real-world development workflows",
        "Collaborated with senior developers on code reviews and best practices",
        "Learned version control systems and agile development methodologies",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Work <span className="gradient-text glow-text">Experience</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">My professional journey in software development</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-red-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-10 top-6 w-4 h-4 rounded-full border-2 ${
                    exp.status === "current"
                      ? "bg-pink-500 border-pink-500 shadow-lg shadow-pink-500/50"
                      : "bg-gray-700 border-gray-500"
                  }`}
                >
                  {exp.status === "current" && (
                    <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className="cyber-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-pink-500 font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Briefcase size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-semibold text-white">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">2+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">10+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">2</div>
            <div className="text-gray-300">Companies Worked With</div>
          </div>
        </div>
      </div>
    </div>
  )
}
