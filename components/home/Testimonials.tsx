import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 relative bg-dark-bg border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              Don't take our word for it.<br />
              <span className="text-gray-500">Hear it from our partners.</span>
            </h2>
          </div>
          
          {/* Scroll Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-[max(2rem,calc((100vw-1200px)/2))] pb-12 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`
              flex-shrink-0 w-[350px] md:w-[400px] snap-center rounded-[2rem] overflow-hidden relative group transition-transform duration-300 hover:-translate-y-2
              ${testimonial.type === 'video' ? 'bg-black aspect-[4/5]' : 'bg-[#111] border border-white/10 p-8 flex flex-col justify-between h-[500px]'}
            `}
          >
            {testimonial.type === 'video' ? (
              // Video Card
              <>
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.author} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer border border-white/30">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                       <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <p className="font-signature text-3xl text-white">{testimonial.author}</p>
                        <p className="text-gray-300 text-sm mt-1">{testimonial.role}</p>
                     </div>
                  </div>
                </div>
              </>
            ) : (
              // Text Card
              <>
                <div>
                  <div className="mb-6 flex gap-1">
                     {[1,2,3,4,5].map(star => (
                       <svg key={star} className="w-5 h-5 text-brand-500 fill-brand-500" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                  </div>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">"{testimonial.quote}"</p>
                </div>

                <div className="mt-8">
                  <div className="h-px w-full bg-white/10 mb-6"></div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <div className="font-signature text-2xl text-white transform -rotate-2 origin-left">{testimonial.author}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
        
        {/* Padding for last item */}
        <div className="w-4 flex-shrink-0"></div>
      </div>
    </section>
  );
};