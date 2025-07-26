import { MessageCircle, Code2 } from "lucide-react"

export default function Languages() {
  const spokenLanguages = [
    {
      name: "English",
      level: "Fluent",
      percentage: 90,
      description: "Professional working proficiency",
    },
    {
      name: "Urdu",
      level: "Native",
      percentage: 100,
      description: "Native speaker",
    },
  ]

  const programmingLanguages = [
    {
      name: "JavaScript",
      level: "Advanced",
      percentage: 88,
      description: "ES6+, Modern JavaScript, Node.js",
    },
    {
      name: "C++",
      level: "Intermediate",
      percentage: 75,
      description: "Object-oriented programming, Data structures",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text glow-text">Languages</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Communication skills that help me connect globally</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Spoken Languages */}
          <div className="cyber-card">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 mr-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Spoken Languages</h2>
            </div>

            <div className="space-y-6">
              {spokenLanguages.map((language, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{language.name}</h3>
                      <p className="text-gray-400">{language.description}</p>
                    </div>
                    <span className="text-pink-500 font-bold text-lg">{language.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400">{language.percentage}% Proficiency</div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="cyber-card">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                <Code2 size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Programming Languages</h2>
            </div>

            <div className="space-y-6">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{language.name}</h3>
                      <p className="text-gray-400">{language.description}</p>
                    </div>
                    <span className="text-purple-400 font-bold text-lg">{language.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${language.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400">{language.percentage}% Proficiency</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Learning Journey */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Language Learning Journey</h3>
          <div className="max-w-4xl mx-auto cyber-card">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a developer working in a global environment, I understand the importance of effective communication. My
              native proficiency in Urdu allows me to connect with local markets, while my fluency in English enables me
              to collaborate with international teams and clients. In the programming world, I'm constantly expanding my
              knowledge of JavaScript and its ecosystem, while my foundation in C++ provides me with strong
              problem-solving skills and understanding of computer science fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
