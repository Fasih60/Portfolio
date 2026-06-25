"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ContactEnvironment = dynamic(() => import("@/components/canvas/ContactEnvironment"), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    inquiryType: "Start a Project",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      setFormData({ name: "", email: "", whatsapp: "", inquiryType: "Start a Project", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600" 
                  placeholder="name@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">WhatsApp Number <span className="text-gray-600 lowercase">(optional)</span></label>
                <input 
                  type="tel" 
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-600" 
                  placeholder="+1 (234) 567-8900" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Inquiry Type</label>
                <select 
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="Start a Project">Start a Project</option>
                  <option value="Ask for Prices">Ask for Prices</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none placeholder-gray-600" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              {status === "error" && (
                <p className="text-red-500 text-sm font-semibold">Failed to send message. Please check your connection or try again later.</p>
              )}
              {status === "success" && (
                <p className="text-red-500 text-sm font-semibold flex items-center gap-2"><CheckCircle2 size={16}/> Message sent successfully! I will get back to you soon.</p>
              )}

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 mt-2 rounded-xl bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : "Send Message"}
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
                   { icon: FacebookIcon, href: "https://www.facebook.com/fasih.rehman.7393", label: "Facebook" },
                   { icon: InstagramIcon, href: "https://www.instagram.com/fasih.dev/", label: "Instagram" },
                   { icon: Mail, href: "mailto:mirza.fasih99@gmail.com", label: "Email" },
                   { icon: Phone, href: "https://wa.me/923066899891", label: "WhatsApp" }
                 ].map((social, idx) => (
                   <a 
                     key={idx} 
                     href={social.href}
                     target={social.href.startsWith("http") ? "_blank" : undefined}
                     rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
