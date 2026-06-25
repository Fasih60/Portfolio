"use client";

import { motion } from "framer-motion";
import { Download, Mail, MessageCircle, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const ContactEnvironment = dynamic(() => import("@/components/canvas/ContactEnvironment"), { ssr: false });

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen py-24 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <ContactEnvironment />
      </div>

      {/* Decorative Red Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Get In Touch</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Let&apos;s <span className="text-red-600">Connect</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors duration-500 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none placeholder-gray-600" placeholder="Your message here..."></textarea>
              </div>
              <button type="button" className="w-full py-4 mt-2 rounded-xl bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Socials & CV */}
          <motion.div 
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors duration-500 shadow-2xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-[40px] group-hover:bg-red-600/10 transition-colors"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Download My Resume</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">Get a detailed overview of my skills, experience, education, and past projects.</p>
              <a href="/Fasih-Ur-Rehman-CV.pdf" download className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#111] hover:bg-red-600 border border-white/10 hover:border-red-500 transition-all text-white font-bold uppercase tracking-widest group/btn hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>

            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors duration-500 shadow-2xl text-center">
               <h3 className="text-xl font-bold mb-8 text-white uppercase tracking-widest">Find me online</h3>
               <div className="flex justify-center gap-6">
                 {[
                   { icon: Globe, href: "#", label: "Website" },
                   { icon: Globe, href: "#", label: "LinkedIn" },
                   { icon: MessageCircle, href: "#", label: "Twitter" },
                   { icon: Mail, href: "#", label: "Email" }
                 ].map((social, idx) => (
                   <a 
                     key={idx} 
                     href={social.href}
                     aria-label={social.label}
                     className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:-translate-y-2 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                   >
                     <social.icon size={24} />
                   </a>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
