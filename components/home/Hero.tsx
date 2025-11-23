import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">New</span>
            <span>Generative AI 2.0 is live</span>
            <ChevronRight size={12} className="text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Supercharge your
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
             workflow with AI.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed"
        >
          Deploy intelligent agents that handle sales, support, and booking 24/7. 
          Automate the busywork so you can focus on building the future.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative h-12 px-8 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Start Building Free <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform"/>
            </span>
          </button>
          
          <button className="h-12 px-8 rounded-full text-gray-300 hover:text-white font-medium hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
            View Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
};