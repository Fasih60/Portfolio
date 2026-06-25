"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, Cpu, ShoppingCart, ChevronLeft, ChevronRight, X, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Websites",
      description: "High-performance, modern, and responsive web applications tailored to elevate your brand.",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Custom UI/UX Design",
        "Responsive & Mobile-First Development",
        "SEO Optimization & Performance Tuning",
        "E-Commerce & Payment Integrations",
        "CMS Integration (WordPress, Sanity, etc.)"
      ]
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Seamless mobile experiences built for both iOS and Android using modern frameworks.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "React Native & Flutter Development",
        "Native iOS & Android Deployment",
        "Push Notifications & Real-time Sync",
        "Offline Mode & Local Storage",
        "App Store & Google Play Publishing"
      ]
    },
    {
      title: "AI Integration",
      description: "Smart artificial intelligence solutions embedded into your platforms to automate and scale.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "OpenAI & Gemini API Integrations",
        "Custom AI Chatbots & Assistants",
        "Automated Content Generation",
        "Vector Databases & RAG Implementation",
        "Data Analysis & Predictive Modeling"
      ]
    },
    {
      title: "Enterprise Software & POS",
      description: "Custom ERPs, Point of Sale systems, and internal software designed to streamline operations.",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Custom ERP & CRM Development",
        "Point of Sale (POS) Systems",
        "Inventory & Supply Chain Management",
        "Employee & Role Management Portals",
        "Detailed Analytics & Reporting Dashboards"
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset }: PanInfo) => {
    const swipe = offset.x;
    if (swipe < -50) {
      handleNext();
    } else if (swipe > 50) {
      handlePrev();
    }
  };

  const getCardStyle = (index: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const diff = (index - activeIndex + services.length) % services.length;
    
    let position = diff;
    if (diff > services.length / 2) {
      position = diff - services.length;
    }

    if (position === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        zIndex: 30,
        opacity: 1,
      };
    } else if (position === 1) {
      return {
        x: isMobile ? 90 : 350,
        y: 20,
        scale: 0.85,
        rotate: 8,
        zIndex: 20,
        opacity: 0.4,
      };
    } else if (position === -1) {
      return {
        x: isMobile ? -90 : -350,
        y: 20,
        scale: 0.85,
        rotate: -8,
        zIndex: 20,
        opacity: 0.4,
      };
    } else {
      return {
        x: 0,
        y: 40,
        scale: 0.7,
        rotate: 0,
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <section id="services" className="relative w-full min-h-screen py-24 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10 flex flex-col items-center">
        <motion.div 
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Expertise</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">My <span className="text-red-600">Services</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl h-[550px] md:h-[650px] flex items-center justify-center mt-10 perspective-1000">
          {services.map((service, idx) => {
            const styles = getCardStyle(idx);
            
            return (
              <motion.div 
                key={idx}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{
                  x: styles.x,
                  y: styles.y,
                  scale: styles.scale,
                  rotate: styles.rotate,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="absolute w-[80%] md:w-[400px] h-[500px] md:h-[600px] flex flex-col cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl"
                style={{
                  transformOrigin: "center center",
                }}
              >
                {/* Window Header */}
                <div className="w-full bg-[#111] px-5 py-3 border-b border-white/5 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-white/20 text-xs font-mono uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Window Body */}
                <div className="relative flex-1 flex flex-col pointer-events-none">
                  {/* Image Banner */}
                  <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md flex items-center justify-center text-red-500 border border-red-500/30">
                      <service.icon size={24} />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="px-8 md:px-10 pb-10 pt-4 flex-1 flex flex-col relative z-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed flex-1">
                      {service.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="mt-8 flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm pointer-events-auto hover:text-white transition-colors"
                    >
                      <span className="w-4 h-[1px] bg-red-600"></span> Explore Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-6 mt-12 z-20">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-3">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? "w-8 h-2.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" 
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 border border-red-500/20">
                    <selectedService.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                </div>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {selectedService.description}
                </p>
                
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-red-600"></span>
                  What&apos;s Included
                </h4>
                
                <ul className="space-y-4">
                  {selectedService.details.map((detail, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                      <span className="text-lg">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
                  >
                    Start a Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
