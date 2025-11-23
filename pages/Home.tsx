import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { Modules } from '../components/home/Modules';
import { DashboardPreview } from '../components/home/DashboardPreview';
import { Testimonials } from '../components/home/Testimonials';
import { PRICING_PLANS, INDUSTRIES } from '../constants';
import { Check, Zap, BarChart3, Users, ShieldCheck, Activity } from 'lucide-react';
import { Industry } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-dark-bg text-white">
      <Hero />
      <DashboardPreview />
      
      <Modules />

      {/* How It Works */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
             <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">Process</span>
             <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Discovery', desc: 'We analyze your business workflows to identify high-impact automation opportunities.', icon: Users },
              { title: 'Build & Train', desc: 'Our engineers build and train custom AI agents using your proprietary data.', icon: Zap },
              { title: 'Launch & Scale', desc: 'Deploy within weeks. Monitor results and scale with your growth.', icon: BarChart3 },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 rounded-3xl bg-dark-card border border-white/5 hover:border-brand-500/30 transition-all hover:bg-white/5"
              >
                  <div className="w-12 h-12 bg-dark-bg rounded-xl border border-white/10 flex items-center justify-center mb-6 text-brand-500 group-hover:scale-110 transition-transform">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Hub & Spoke Diagram */}
      <section className="py-32 relative overflow-hidden bg-black/40 border-y border-white/5">
         <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">One Platform. Every Industry.</h2>
            <p className="text-gray-400 text-lg">Native integrations with your sector's specific workflows.</p>
         </div>

         {/* Responsive Desktop Diagram Container */}
         <div className="hidden md:block relative w-full max-w-[1200px] mx-auto aspect-[1.8/1] my-10">
            
            {/* SVG Layer for Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 666">
               <defs>
                 <linearGradient id="gradientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                   <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                   <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                 </linearGradient>
               </defs>

               {/* Base Lines (Dim) */}
               <g stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none">
                 {/* Left Connections */}
                 <path d="M 320 111 C 420 111, 420 333, 520 333" />
                 <path d="M 320 333 L 520 333" />
                 <path d="M 320 555 C 420 555, 420 333, 520 333" />
                 
                 {/* Right Connections */}
                 <path d="M 880 111 C 780 111, 780 333, 680 333" />
                 <path d="M 880 333 L 680 333" />
                 <path d="M 880 555 C 780 555, 780 333, 680 333" />

                 {/* Bottom Connections */}
                 <path d="M 600 413 C 600 480, 500 480, 500 530" />
                 <path d="M 600 413 L 600 530" />
                 <path d="M 600 413 C 600 480, 700 480, 700 530" />
               </g>

               {/* Animated Lines (Flow) */}
               <g stroke="url(#gradientFlow)" strokeWidth="2" fill="none" strokeDasharray="10 10" className="animate-flow opacity-60">
                 {/* Left Connections */}
                 <path d="M 320 111 C 420 111, 420 333, 520 333" />
                 <path d="M 320 333 L 520 333" />
                 <path d="M 320 555 C 420 555, 420 333, 520 333" />
                 
                 {/* Right Connections */}
                 <path d="M 880 111 C 780 111, 780 333, 680 333" />
                 <path d="M 880 333 L 680 333" />
                 <path d="M 880 555 C 780 555, 780 333, 680 333" />

                  {/* Bottom Connections */}
                 <path d="M 600 413 C 600 480, 500 480, 500 530" />
                 <path d="M 600 413 L 600 530" />
                 <path d="M 600 413 C 600 480, 700 480, 700 530" />
               </g>

               {/* Connecting Dots */}
               <g fill="#6366f1">
                 <circle cx="520" cy="333" r="3" />
                 <circle cx="680" cy="333" r="3" />
                 <circle cx="600" cy="413" r="3" />
                 
                 <circle cx="320" cy="111" r="3" />
                 <circle cx="320" cy="333" r="3" />
                 <circle cx="320" cy="555" r="3" />

                 <circle cx="880" cy="111" r="3" />
                 <circle cx="880" cy="333" r="3" />
                 <circle cx="880" cy="555" r="3" />
               </g>
            </svg>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] z-20">
               <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   className="w-full h-full rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-[1px] shadow-[0_0_80px_-20px_rgba(99,102,241,0.6)]"
               >
                 <div className="w-full h-full bg-[#0a0a0c] rounded-[23px] flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent opacity-50" />
                    <span className="text-5xl font-display font-bold text-white relative z-10">RJ</span>
                    <span className="text-[10px] text-brand-300 tracking-widest uppercase mt-2 relative z-10 font-medium">Global AI</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                 </div>
               </motion.div>
            </div>

            {/* Left Column Nodes (Centered at 16.66% width) */}
            <div className="absolute top-[16.66%] left-[16.66%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[1]} side="left" index={0} />
            </div>
            <div className="absolute top-[50%] left-[16.66%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[6]} side="left" index={1} />
            </div>
            <div className="absolute top-[83.33%] left-[16.66%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[0]} side="left" index={2} />
            </div>

            {/* Right Column Nodes (Centered at 83.33% width) */}
            <div className="absolute top-[16.66%] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[4]} side="right" index={3} />
            </div>
            <div className="absolute top-[50%] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[3]} side="right" index={4} />
            </div>
            <div className="absolute top-[83.33%] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-[240px]">
               <IndustryCard industry={INDUSTRIES[2]} side="right" index={5} />
            </div>

            {/* Bottom Nodes */}
            <div className="absolute top-[87%] left-[41.66%] -translate-x-1/2 -translate-y-1/2">
               <FeatureNode icon={BarChart3} label="Analytics" index={6} />
            </div>
            <div className="absolute top-[87%] left-[50%] -translate-x-1/2 -translate-y-1/2">
               <FeatureNode icon={ShieldCheck} label="Security" index={7} />
            </div>
            <div className="absolute top-[87%] left-[58.33%] -translate-x-1/2 -translate-y-1/2">
               <FeatureNode icon={Activity} label="Monitoring" index={8} />
            </div>

         </div>

         {/* Mobile View (Stacked) */}
         <div className="md:hidden flex flex-col gap-4 px-6">
              <div className="grid grid-cols-2 gap-4">
                {INDUSTRIES.slice(0, 6).map((ind, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-dark-card border border-white/10 p-4 rounded-xl flex flex-col items-center text-center gap-3"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-brand-400">
                        <ind.icon size={20} />
                     </div>
                     <span className="font-medium text-sm text-gray-200">{ind.name}</span>
                  </motion.div>
                ))}
              </div>
         </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Start small and scale as you grow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col ${
                  plan.highlighted 
                    ? 'bg-dark-card border-brand-500/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)]' 
                    : 'bg-transparent border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold font-display">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-brand-500 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display"
          >
            Ready to Automate<br/>Your Business?
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
             <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
               Book a 10-Min Demo
             </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Subcomponents for the diagram
interface IndustryCardProps {
    industry: Industry;
    side: 'left' | 'right';
    index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, side, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`bg-[#0F0F11] border border-white/5 p-4 rounded-xl flex items-center gap-4 shadow-lg relative group h-20 hover:border-brand-500/30 transition-colors z-20 ${side === 'right' ? 'flex-row-reverse text-right' : ''}`}
  >
     <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 shadow-inner">
        <industry.icon size={22} />
     </div>
     <div className="flex-1 min-w-0">
        <span className="text-base font-bold block text-gray-100 truncate">{industry.name}</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Integration</span>
     </div>
  </motion.div>
)

const FeatureNode: React.FC<{ icon: React.ElementType, label: string, index: number }> = ({ icon: Icon, label, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col items-center gap-2 group"
  >
     <div className="w-12 h-12 rounded-full bg-[#0F0F11] border border-white/10 flex items-center justify-center text-gray-400 shadow-xl group-hover:text-brand-400 group-hover:border-brand-500/30 transition-all z-20 relative hover:scale-110">
        <Icon size={20} />
     </div>
     <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">{label}</span>
  </motion.div>
)