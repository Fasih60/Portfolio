"use client";

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (scrollRef.current && containerRef.current) {
        const sections = gsap.utils.toArray(".project-card");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + scrollRef.current!.offsetWidth
          }
        });
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-center">
      {/* Decorative Red Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px] pointer-events-none hidden md:block"></div>

      <div className="absolute top-24 left-0 right-0 px-4 z-10 pointer-events-none sticky">
        <motion.div 
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4 pointer-events-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Portfolio</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-7 tracking-tight pointer-events-auto">Featured <span className="text-red-600">Projects</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full pointer-events-auto"></div>
        </motion.div>
      </div>
      
      {/* Scroll Container */}
      <div 
        ref={scrollRef} 
        className="flex flex-row w-[400vw] h-full items-center px-[5vw] lg:px-[10vw]"
      >
         {projectsData.map((project) => (
           <div key={project.id} className="project-card w-[85vw] md:w-[80vw] h-[78vh] md:h-[60vh] flex-shrink-0 px-2 lg:px-8 flex flex-col justify-center mt-28 md:mt-20">
              <div className="bg-[#0a0a0a] w-full h-full rounded-3xl p-5 md:p-8 flex flex-col lg:flex-row gap-5 lg:gap-8 border border-white/5 group hover:border-red-500/30 transition-colors duration-500 relative overflow-hidden shadow-2xl">
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-48 md:h-80 lg:h-full relative rounded-2xl overflow-hidden border border-white/5 shrink-0">
                  <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center flex-1 overflow-y-auto custom-scrollbar pr-2">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 group-hover:text-red-500 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-8 max-w-xl leading-relaxed">{project.desc}</p>
                  
                  <div className="flex gap-2 md:gap-3 flex-wrap mb-4 md:mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-[#111] border border-white/5 text-[10px] md:text-sm font-semibold text-red-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto shrink-0 pt-2">
                    <Link href={`/projects/${project.slug}`}>
                      <button className="w-full sm:w-auto flex justify-center items-center gap-2 md:gap-3 bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                        <ExternalLink size={18} className="md:w-5 md:h-5" /> View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
}
