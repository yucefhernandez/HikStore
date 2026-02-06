import React, { Suspense, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import { SecurityCamera } from '../UI/3D/SecurityCamera';
import { ChevronRight } from 'lucide-react';

// Curva de entrada cinematográfica
const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const width = window.innerWidth;
    const x = (clientX / width) * 2 - 1;
    setMouseX(x);
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center bg-gray-50 overflow-hidden pt-20 md:pt-0"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none z-0 grid-bg opacity-60" />

      {/* Background Typography */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-10 z-0 pointer-events-none overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[20vw] leading-none font-black text-gray-900 tracking-tighter whitespace-nowrap select-none"
        >
          HIKVISION
        </motion.h1>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-1 mt-6 md:mt-0">

          {/* Badge Entrada Suave */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase, delay: 0.2 }}
            className="mb-6 flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-gray-200 px-5 py-2 rounded-full shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hik-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-hik-green"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">Distribuidor Oficial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: cinematicEase }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-[0.95]"
          >
            Seguridad que <br className="block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-hik-red to-red-600">Transforma.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: cinematicEase }}
            className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-xl font-light"
          >
            Tecnología de vigilancia de próxima generación con ingeniería HikVision y soporte experto contBIT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: cinematicEase }}
            className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-bold transition-all hover:bg-hik-red shadow-2xl shadow-red-900/20 flex items-center justify-center group"
            >
              Ver Catálogo
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold transition-all hover:border-gray-300 flex items-center justify-center"
            >
              Solicitar Cotización
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: 3D Model Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: cinematicEase }}
          className="w-full md:w-1/2 h-[35vh] md:h-[80vh] relative cursor-grab active:cursor-grabbing order-2 md:order-2 flex items-center justify-center"
        >
          {/* Scene Setup */}
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 9], fov: 30 }}>
            <Suspense fallback={null}>
              <Environment preset="studio" />
              <ambientLight intensity={0.5} />
              <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />

              {/* Back Red Rim Light - Increased intensity for separation */}
              <spotLight position={[-5, 5, -5]} intensity={15} color="#D71920" />

              <pointLight position={[0, -2, 2]} intensity={1} color="#D71920" />

              <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                {/* 
                     ADJUSTMENTS:
                     - Position: [0.5, -0.6, 0] -> Moved to Center/Right to avoid clipping.
                     - Rotation: [0.1, -2.5, 0] -> Facing Left (towards Text) and slightly Front.
                     - Scale: 1.25 -> Optimal size.
                  */}
                <SecurityCamera
                  mouseX={mouseX}
                  scale={1.25}
                  rotation={[0.1, -2.5, 0]}
                  position={[0.5, -0.6, 0]}
                />
              </Float>

              <ContactShadows position={[0.5, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
            </Suspense>
          </Canvas>

          {/* Tech Overlay Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: cinematicEase }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-hik-blue/50 to-transparent"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: cinematicEase }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[50%] bg-gradient-to-b from-transparent via-hik-blue/50 to-transparent"
            />
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default Hero;