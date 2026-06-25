"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center bg-[#050505]">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <motion.div 
          className="mb-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Discover</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About <span className="text-red-600">Me</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-7 relative p-10 md:p-14 rounded-3xl overflow-hidden group border border-white/5 bg-[#0a0a0a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-8 text-white">Building intelligent solutions for modern businesses</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                I am a passionate software developer specializing in full-stack web applications, cross-platform mobile apps, and enterprise software. My approach blends meticulous engineering with modern aesthetic sensibilities to deliver products that are as robust under the hood as they are visually striking.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                With deep expertise across the modern tech stack—including React, Next.js, React Native, Node.js, and AI integrations—I take pride in writing <span className="text-red-500 font-medium">clean, scalable code</span> that solves complex problems and drives real business value.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Delivered", value: "15+" },
              { label: "Technologies", value: "10+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="p-8 rounded-3xl flex flex-col items-start justify-center border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                <span className="text-5xl font-black text-white mb-3 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs text-red-500 font-bold tracking-[0.15em] uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
