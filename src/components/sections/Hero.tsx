"use client";

import { motion } from "framer-motion";
import { Code, Download, ArrowRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Video */}
      <video 
        src="/hero.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 flex flex-col items-start text-left">
        
        {/* Main Content */}
        <div className="w-full max-w-2xl pt-10 lg:pt-0">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase drop-shadow-md">Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-1 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Fasih Ur Rehman
          </motion.h1>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[100px] font-black text-red-600 mb-6 uppercase tracking-tighter leading-none drop-shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Developer
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            I build <span className="text-red-500 font-medium">modern websites</span>, cross-platform <span className="text-red-500 font-medium">mobile apps</span>, and <span className="text-red-500 font-medium">enterprise software</span> powered by AI.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            className="flex gap-4 mb-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {[
              { icon: GithubIcon, href: "https://github.com/Fasih60" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/fasih-rehman60/" },
              { icon: InstagramIcon, href: "https://www.instagram.com/fasih.dev/" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 backdrop-blur-sm bg-black/20"
              >
                <social.icon width={22} height={22} strokeWidth={1.5} />
              </a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <a href="#projects" className="group flex justify-center items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:from-red-500 hover:to-red-600 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              <Code size={20} />
              View Projects 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Fasih-Ur-Rehman-CV.pdf" download className="flex justify-center items-center gap-3 px-8 py-4 rounded-xl border border-gray-700 bg-black/40 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-gray-500 transition-all">
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
