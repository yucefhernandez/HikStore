import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: smoothEase } 
  }
};

const pinDropVariants = {
  hidden: { opacity: 0, y: -200, scale: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, bounce: 0.5, duration: 1.2, delay: 0.3 } 
  }
};

const mapMarkerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.8 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Location: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMap = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative min-h-[600px] lg:h-[800px] w-full bg-slate-900 text-white overflow-hidden py-20 lg:py-0" id="location">
      
      {/* Background Map */}
      <motion.div 
        style={{ y: yMap }}
        className="absolute inset-0 h-[120%] -top-[10%] z-0 pointer-events-none" 
      >
        <iframe 
          src="https://maps.google.com/maps?q=Centro+Comercial+Galerias+Aguascalientes&t=m&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2) brightness(0.8)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full opacity-40"
          title="Ubicación HikStore Aguascalientes"
        ></iframe>

        {/* Custom Animated Pin Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-40px]">
           <motion.div
             variants={mapMarkerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="relative flex flex-col items-center justify-center group"
           >
              {/* Tooltip */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8, y: 10 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{ delay: 1.2, duration: 0.3 }}
                 className="absolute -top-12 bg-white text-slate-900 font-bold px-4 py-1.5 rounded-lg shadow-xl text-xs whitespace-nowrap mb-2"
              >
                 Galerías Local 104
                 <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 transform"></div>
              </motion.div>

              {/* Pin Icon */}
              <div className="w-14 h-14 bg-hik-red rounded-full rounded-bl-none transform -rotate-45 flex items-center justify-center shadow-2xl shadow-red-500/40 border-4 border-white z-10 relative">
                 <div className="transform rotate-45">
                    <div className="w-4 h-4 bg-white rounded-full shadow-inner" />
                 </div>
              </div>

              {/* Pulse Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-hik-red rounded-full animate-ping opacity-75 pointer-events-none" />
              
              {/* Ground Shadow */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.8, duration: 0.4 }}
                 className="w-8 h-2 bg-black/50 blur-sm rounded-full mt-4" 
              />
           </motion.div>
        </div>

      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-0" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          
          <motion.div 
            style={{ y: yContent }} 
            className="max-w-md w-full"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              {/* Glossy effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

              <div className="flex items-center space-x-5 mb-10">
                <motion.div 
                    variants={pinDropVariants}
                    className="w-14 h-14 bg-hik-red rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30 z-20 relative"
                >
                  <MapPin className="text-white w-7 h-7" />
                </motion.div>
                <motion.div variants={fadeInUpVariants}>
                  <h2 className="text-3xl font-bold tracking-tight">Showroom</h2>
                  <p className="text-white/60 text-sm tracking-wide uppercase">Aguascalientes, MX</p>
                </motion.div>
              </div>
              
              <address className="not-italic space-y-8 text-gray-200">
                <motion.div variants={fadeInUpVariants} className="group cursor-default">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold block mb-3 group-hover:text-hik-red transition-colors">Ubicación</span>
                  <span className="text-xl font-light leading-relaxed block">
                    CC Galerías, Local 104.<br/>
                    <span className="text-sm text-gray-400">A un lado de Lumen</span>
                  </span>
                </motion.div>
                
                <motion.div variants={fadeInUpVariants} className="group cursor-default">
                   <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold block mb-3 group-hover:text-hik-red transition-colors">Horario</span>
                   <span className="text-xl font-light block">Lun - Vie: 10:00 - 19:00</span>
                </motion.div>
              </address>

              <motion.a 
                variants={fadeInUpVariants}
                href="https://www.google.com/maps/search/?api=1&query=CC+Galerias+Aguascalientes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 w-full flex items-center justify-center space-x-2 bg-white text-slate-900 py-5 rounded-xl font-bold hover:bg-hik-red hover:text-white transition-colors duration-300 shadow-xl"
              >
                <Navigation size={18} />
                <span>Cómo Llegar</span>
              </motion.a>
            </motion.div>
          </motion.div>

      </div>
    </section>
  );
};

export default Location;