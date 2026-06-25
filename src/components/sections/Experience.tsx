"use client";

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Briefcase, Code, Rocket, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const journeys = [
    {
      title: "Freelance & Real Projects",
      company: "Independent / Freelance",
      period: "August 2025 - May 2026",
      description: "RoboSports (Aug 2025): Developed a fully custom theme WordPress website. ShamsAlkananah (May 2026): Built a complete E-commerce website using the MERN stack.",
      icon: Rocket,
    },
    {
      title: "WordPress Developer (Job)",
      company: "AppEvolve",
      period: "July 2025 - December 2025",
      description: "Worked as a full-time WordPress Developer. Handled custom theme development, plugin integrations, and optimized website performance for various clients.",
      icon: Briefcase,
    },
    {
      title: "Frontend Developer (Intern)",
      company: "CodeAlpha",
      period: "20 June 2025 - 20 July 2025",
      description: "Frontend development internship focused on building responsive user interfaces, improving UI/UX, and writing clean, scalable frontend code.",
      icon: Code,
    },
    {
      title: "Practice & Side Projects",
      company: "Continuous Learning",
      period: "Ongoing",
      description: "Built many practice projects to continuously hone my skills in modern web development, 3D graphics, and full-stack engineering.",
      icon: Star,
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item") as HTMLElement[];
      
      items.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-800/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">My Journey</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Experience</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-red-900/30 md:border-l-0 md:mx-auto">
           {/* Center Line for Desktop */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-900/10 via-red-600/50 to-red-900/10 -ml-[1px]"></div>

           {journeys.map((journey, idx) => {
             const isEven = idx % 2 === 0;
             return (
               <div key={idx} className={`timeline-item mb-16 pl-8 md:pl-0 relative md:flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full group`}>
                 
                 {/* Empty space for alternating layout */}
                 <div className="hidden md:block md:w-1/2"></div>
                 
                 {/* Timeline Node */}
                 <div className="absolute w-12 h-12 bg-[#111] rounded-full left-[-24px] md:left-1/2 md:-ml-6 border-2 border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.3)] flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
                   <journey.icon size={20} className="text-red-500 group-hover:text-white transition-colors duration-300" />
                 </div>
                 
                 {/* Content Card */}
                 <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                   <div className="bg-[#111] p-8 rounded-3xl border border-white/5 group-hover:border-red-500/30 transition-colors duration-500 shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <h3 className="text-2xl font-bold text-white mb-2">{journey.title}</h3>
                     <p className="text-red-500 font-semibold mb-2">{journey.company}</p>
                     <p className="text-gray-500 text-sm font-mono mb-5 uppercase tracking-widest">{journey.period}</p>
                     <p className="text-gray-400 leading-relaxed">
                       {journey.description}
                     </p>
                   </div>
                 </div>

               </div>
             );
           })}
        </div>
      </div>
    </section>
  );
}
