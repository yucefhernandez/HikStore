import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Eye, CheckCircle2 } from 'lucide-react';
import Logo from '../Img/Icono.png';

interface LoaderProps {
  onFinished: () => void;
}

const WELCOME_MESSAGES = [
  { text: "Iniciando...", icon: Zap },
  { text: "Cargando catálogo...", icon: Eye },
  { text: "Verificando seguridad...", icon: Shield },
  { text: "Bienvenido", icon: CheckCircle2 }
];

const letterContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { y: 100, opacity: 0, rotate: 5 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, delay: 1 } 
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
};

const Loader: React.FC<LoaderProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 1000); 
          return 100;
        }
        const increment = Math.random() * 5 + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinished]);

  useEffect(() => {
    if (progress < 30) setMsgIndex(0);
    else if (progress < 60) setMsgIndex(1);
    else if (progress < 90) setMsgIndex(2);
    else setMsgIndex(3);
  }, [progress]);

  const CurrentIcon = WELCOME_MESSAGES[msgIndex].icon;
  const brandName = "HikStore";

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
      exit={{ 
        y: -window.innerHeight,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Background Decorativo Muy Sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-red-50/30 pointer-events-none" />
      
      {/* Contenedor Principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        
        {/* Brand Logo - Creative integration in loader */}
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 w-16 h-16 md:w-20 md:h-20 relative"
        >
            <div className="absolute inset-0 bg-hik-red/20 rounded-2xl blur-2xl animate-pulse" />
            <img 
                src={Logo} 
                alt="HikStore" 
                className="relative w-full h-full object-contain filter drop-shadow-2xl" 
            />
        </motion.div>

        {/* Animación Tipográfica Grande */}
        <motion.div 
          className="flex items-baseline overflow-hidden px-4 py-4"
          variants={letterContainerVariants}
          initial="hidden"
          animate="show"
        >
          {brandName.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-7xl md:text-9xl font-black italic tracking-tighter text-gray-900"
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          <motion.div
             variants={dotVariants}
             animate={["show", "pulse"]}
             className="w-4 h-4 md:w-6 md:h-6 bg-hik-red rounded-full ml-2 mb-2 md:mb-4"
          />
        </motion.div>

        {/* Mensajes de Estado y Progreso */}
        <div className="mt-12 flex flex-col items-center h-24">
            
            {/* Mensaje cambiante */}
            <div className="h-8 flex items-center justify-center mb-4 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={msgIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center space-x-2 text-gray-500"
                    >
                        <CurrentIcon size={18} className="text-hik-red" />
                        <span className="text-sm font-medium tracking-wide uppercase">
                            {WELCOME_MESSAGES[msgIndex].text}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Barra de Progreso Minimalista */}
            <div className="w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-hik-red shadow-[0_0_10px_rgba(215,25,32,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>
            
             <span className="mt-2 text-[10px] text-gray-400 font-mono">
                {Math.round(progress)}%
            </span>
        </div>
      </div>

      {/* Footer del Loader */}
      <div className="absolute bottom-10">
         <p className="text-[10px] text-gray-300 font-bold tracking-[0.3em] uppercase">
             Aguascalientes
         </p>
      </div>
    </motion.div>
  );
};

export default Loader;