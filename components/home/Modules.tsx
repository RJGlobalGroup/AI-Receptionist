import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MessageCircle, Calendar, Globe, Zap, Code, ArrowUpRight } from 'lucide-react';

// Manual Bento Layout Definition
// We will manually construct the grid to ensure specific spans for specific items to match the "Craflow" aesthetic.

export const Modules: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Modular Intelligence</h2>
              <p className="text-gray-400 text-lg">Plug-and-play AI agents designed for specific business outcomes.</p>
           </div>
           <button className="text-white border-b border-white/20 pb-1 hover:border-white transition-colors flex items-center gap-2">
             View all modules <ArrowUpRight size={16} />
           </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Item 1: Sales Agent (Large) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-2 group relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-brand-400">
                    <DollarSign size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Sales Agent</h3>
                <p className="text-gray-400 mb-8 max-w-sm">Nurture leads and close deals 24/7 without human intervention using advanced sentiment analysis.</p>
                
                {/* Visual Representation */}
                <div className="mt-auto relative w-full h-32 bg-dark-bg/50 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center p-4">
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                     <div className="flex gap-4 items-center w-full max-w-md">
                        <div className="w-8 h-8 rounded-full bg-brand-500 flex-shrink-0" />
                        <div className="h-2 w-32 bg-white/20 rounded-full" />
                        <div className="ml-auto h-8 px-3 rounded-md bg-green-500/20 text-green-400 text-xs flex items-center">Deal Closed</div>
                     </div>
                </div>
             </div>
          </motion.div>

          {/* Item 2: Support (Tall) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:row-span-1 group relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-blue-400">
                    <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Support Agent</h3>
                <p className="text-gray-400 text-sm">Instant answers to customer queries, resolving 80% of tickets automatically.</p>
                <div className="mt-auto pt-6">
                    <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">Reset my password</div>
                        <div className="p-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300 ml-4">Link sent! Check inbox.</div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Item 3: Booking (Small) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="group relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 text-purple-400">
                        <Calendar size={24} />
                    </div>
                    <div className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">CAL</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Scheduler</h3>
                <p className="text-gray-400 text-sm">Seamlessly schedule appointments directly into your calendar.</p>
             </div>
          </motion.div>

          {/* Item 4: Website (Large) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 group relative bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 h-full flex flex-col md:flex-row gap-8 relative z-10">
                <div className="flex-1">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 text-emerald-400">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Web Widget</h3>
                    <p className="text-gray-400 mb-6">Embed anywhere. A smart widget that guides visitors and captures leads on any webpage.</p>
                    <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex-1 bg-black rounded-xl border border-white/10 p-4 shadow-2xl translate-y-4 md:translate-y-8 md:translate-x-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center"><Zap size={14}/></div>
                        <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                         <div className="h-16 w-full bg-white/5 rounded-lg"></div>
                         <div className="h-16 w-full bg-white/5 rounded-lg"></div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};