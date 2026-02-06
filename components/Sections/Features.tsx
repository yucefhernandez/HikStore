import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../constants';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  feature: typeof FEATURES[0];
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => {
  // Determine specific color based on index for variety
  const accentColorClass = index === 0 ? 'text-hik-green' : index === 1 ? 'text-hik-blue' : 'text-hik-red';
  const bgHoverClass = index === 0 ? 'group-hover:bg-green-50' : index === 1 ? 'group-hover:bg-blue-50' : 'group-hover:bg-red-50';
  const textHoverClass = index === 0 ? 'group-hover:text-hik-green' : index === 1 ? 'group-hover:text-hik-blue' : 'group-hover:text-hik-red';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} // Triggers when element is 10% into view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center py-12 md:py-24 border-b border-gray-100 last:border-0"
    >
      {/* Background Hover Effect - Subtle */}
      <div className={`absolute inset-0 -mx-6 md:-mx-12 rounded-3xl transition-colors duration-500 ease-out -z-10 ${bgHoverClass} opacity-0 group-hover:opacity-30`} />

      {/* Icon Area */}
      <div className="shrink-0 relative">
        <div className="w-24 h-24 bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-transparent group-hover:shadow-xl">
          <feature.icon className={`w-10 h-10 text-gray-700 transition-colors duration-300 ${textHoverClass}`} strokeWidth={1.5} />
        </div>
        {/* Decorative shadow blob */}
        <div className={`absolute inset-0 bg-gray-200 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-0 transform scale-75 translate-y-4`} />
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <div className="flex items-baseline space-x-4 mb-2">
            <span className="text-xs font-black text-gray-300 tracking-widest uppercase">0{index + 1}</span>
            <div className={`h-[1px] w-0 bg-gray-900 group-hover:w-12 transition-all duration-500 ease-out`} />
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-[0.95] group-hover:translate-x-2 transition-transform duration-300">
          {feature.title}
        </h3>
        
        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg">
          {feature.description}
        </p>
      </div>
      
      {/* Arrow Visual Indicator on Hover (Desktop) */}
      <div className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 text-gray-300">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
      </div>

    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="bg-white relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row">
          
          {/* Sticky Header Column */}
          <div className="lg:w-5/12 mb-20 lg:mb-0 relative z-10">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-8"
              >
                 <div className="h-[1px] w-8 bg-hik-red"></div>
                 <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Nuestros Valores</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-10 tracking-tighter leading-none"
              >
                Por qué <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-hik-red to-red-900">
                  Elegirnos.
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-500 max-w-md leading-relaxed font-light mb-12 border-l border-gray-200 pl-6"
              >
                En HikStore Aguascalientes, combinamos la ingeniería de clase mundial de HikVision con un servicio local inigualable.
              </motion.p>
              
              <motion.a 
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-hik-red hover:border-hik-red transition-colors"
              >
                <span>Conoce al equipo</span>
              </motion.a>
            </div>
          </div>

          {/* Scrollable List Column */}
          <div className="lg:w-7/12 lg:pl-16">
             <div className="flex flex-col">
                {FEATURES.map((feature, i) => (
                  <FeatureItem key={feature.id} feature={feature} index={i} />
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
