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
      // Only apply horizontal scroll on large screens
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      
      if (isDesktop && scrollRef.current && containerRef.current) {
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
    <section id="projects" ref={containerRef} className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#050505] flex flex-col lg:justify-center">
      {/* Decorative Red Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px] pointer-events-none hidden md:block"></div>

      <div className="absolute top-24 left-0 right-0 px-4 z-10 pointer-events-none lg:sticky lg:top-24">
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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight pointer-events-auto">Featured <span className="text-red-600">Projects</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full pointer-events-auto"></div>
        </motion.div>
      </div>
      
      {/* Scroll Container (Vertical on Mobile/Tablet, Horizontal on Desktop) */}
      <div 
        ref={scrollRef} 
        className="flex flex-col lg:flex-row w-full lg:w-[400vw] h-auto lg:h-full items-center px-4 lg:px-[10vw] pt-64 lg:pt-0 gap-12 lg:gap-0 pb-24 lg:pb-0"
      >
         {projectsData.map((project) => (
           <div key={project.id} className="project-card w-full lg:w-[80vw] h-auto lg:h-[60vh] flex-shrink-0 lg:px-8 flex flex-col justify-center lg:mt-20">
              <div className="bg-[#0a0a0a] w-full h-full rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 border border-white/5 group hover:border-red-500/30 transition-colors duration-500 relative overflow-hidden shadow-2xl">
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full relative rounded-2xl overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">{project.desc}</p>
                  
                  <div className="flex gap-2 md:gap-3 flex-wrap mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#111] border border-white/5 text-xs md:text-sm font-semibold text-red-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={`/projects/${project.slug}`}>
                      <button className="w-full sm:w-auto flex justify-center items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                        <ExternalLink size={20} /> View Details
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
