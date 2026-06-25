"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Ahmed Raza",
      review: "Fasih is an incredibly talented developer. His work on our custom E-commerce platform was flawless and delivered ahead of schedule.",
      rating: 5,
    },
    {
      name: "Faheem",
      role: "Founder, RoboSports",
      review: "The custom WordPress theme he built for us was exactly what we envisioned. Highly professional, very communicative, and technically skilled.",
      rating: 5,
    },
    {
      name: "Tanveer Ahmed",
      role: "Onwer of ShamsAlKananah",
      review: "Fasih delivered our e-commerce application efficiently and professionally. He understood our requirements perfectly and provided a high-quality solution. Highly recommended."
,
      rating: 5,
    }
  ];

  return (
    <section id="reviews" className="relative w-full py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <motion.div 
          className="mb-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Testimonials</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Client <span className="text-red-600">Reviews</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div 
              key={idx}
              className="group bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 hover:border-red-500/30 transition-all duration-500 shadow-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="absolute top-8 right-8 text-red-500/20 group-hover:text-red-500/40 transition-colors duration-300">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-red-500 text-red-500" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10 italic">
                &quot;{item.review}&quot;
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                <h4 className="text-white font-bold text-xl">{item.name}</h4>
                <p className="text-red-500 text-sm font-semibold uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
