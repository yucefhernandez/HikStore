import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Retraso dramático entre cada tarjeta
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.8,
    rotateX: -15 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { 
      type: "spring" as const,
      bounce: 0.4,
      duration: 1.2
    } 
  }
};

const iconVariants = {
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 }
  }
};

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 relative z-10 overflow-hidden" id="features">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header de la Sección */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Excelencia & Calidad</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
          >
            ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-hik-red to-red-600">HikStore</span>?
          </motion.h2>
          
          <motion.div
             initial={{ width: 0 }}
             whileInView={{ width: "100px" }}
             viewport={{ once: true }}
             className="h-1.5 bg-gray-900 mx-auto rounded-full"
          />
        </div>

        {/* Grid de Tarjetas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, i) => {
            // Colores dinámicos basados en el índice para variedad visual elegante
            const borderColor = i === 0 ? 'group-hover:border-hik-green' : i === 1 ? 'group-hover:border-hik-blue' : 'group-hover:border-hik-red';
            const shadowColor = i === 0 ? 'group-hover:shadow-green-500/10' : i === 1 ? 'group-hover:shadow-blue-500/10' : 'group-hover:shadow-red-500/10';
            const iconColor = i === 0 ? 'text-hik-green' : i === 1 ? 'text-hik-blue' : 'text-hik-red';
            const bgIcon = i === 0 ? 'bg-green-50' : i === 1 ? 'bg-blue-50' : 'bg-red-50';

            return (
              <motion.div 
                key={feature.id}
                variants={cardVariants}
                className={`group relative bg-white p-10 rounded-[2rem] border-2 border-transparent transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${borderColor} ${shadowColor}`}
              >
                 {/* Borde sutil por defecto */}
                 <div className="absolute inset-0 rounded-[2rem] border border-gray-100 pointer-events-none transition-colors duration-500 group-hover:border-transparent" />

                 {/* Número de fondo (Marca de agua) */}
                 <div className="absolute -right-4 -top-6 text-[10rem] font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-700 select-none z-0 rotate-12 group-hover:rotate-0">
                    0{i + 1}
                 </div>

                 <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <motion.div 
                      variants={iconVariants}
                      className={`w-20 h-20 rounded-2xl ${bgIcon} ${iconColor} flex items-center justify-center mb-8 shadow-inner transition-colors duration-300`}
                    >
                      <feature.icon className="w-10 h-10" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-lg font-light">
                      {feature.description}
                    </p>

                    {/* Línea decorativa inferior que crece */}
                    <div className={`mt-auto pt-8 w-12 h-1 rounded-full bg-gray-200 transition-all duration-500 group-hover:w-full ${i === 0 ? 'group-hover:bg-hik-green' : i === 1 ? 'group-hover:bg-hik-blue' : 'group-hover:bg-hik-red'}`} />
                 </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;