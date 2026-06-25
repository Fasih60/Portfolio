"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillOrbit = dynamic(() => import("@/components/canvas/SkillOrbit"), {
  ssr: false,
});

const frontendSkills = ["JavaScript","React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Flutter", "Dart"];
const backendSkills = ["Node.js", "Express", "REST API", "Firebase", "MongoDB", "MySQL", "Python"];
const tools = ["Git", "GitHub", "Postman", "VS Code"];
const devOpsAndCloud = ["Docker", "GitHub Actions", "Vercel", "Netlify", "Render"];
const aiAndAutomation = ["OpenAI API", "Gemini API", "Vector Databases", "AI Chatbots", "Prompt Engineering"];
export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen py-24 flex flex-col justify-center bg-[#050505] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <motion.div 
          className="mb-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Expertise</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Technical <span className="text-red-600">Skills</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 3D Skill Orbit */}
          <motion.div 
            className="w-full h-[500px] md:h-[600px] bg-[#0a0a0a] rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
            <SkillOrbit />
          </motion.div>

          {/* Skill Lists */}
          <motion.div 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-3 h-[1px] bg-red-600"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-xl text-gray-300 font-medium hover:text-red-500 hover:border-red-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-3 h-[1px] bg-red-600"></span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-xl text-gray-300 font-medium hover:text-red-500 hover:border-red-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-3 h-[1px] bg-red-600"></span>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-xl text-gray-300 font-medium hover:text-red-500 hover:border-red-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-3 h-[1px] bg-red-600"></span>
                DevOps & Cloud
              </h3>
              <div className="flex flex-wrap gap-3">
                {devOpsAndCloud.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-xl text-gray-300 font-medium hover:text-red-500 hover:border-red-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-3 h-[1px] bg-red-600"></span>
                AI & Automation
              </h3>
              <div className="flex flex-wrap gap-3">
                {aiAndAutomation.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-xl text-gray-300 font-medium hover:text-red-500 hover:border-red-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
