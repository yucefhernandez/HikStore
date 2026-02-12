
import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Cable, Battery, Wifi, Disc, Server, ArrowRight, Zap, ShoppingBag } from 'lucide-react';

import ssd from '../../src/assets/marquee/ssd.jpg';
import cable from '../../src/assets/marquee/cable.webp'
import microsd from '../../src/assets/marquee/microsd.jpg'
import fuentepoder from '../../src/assets/marquee/fuentepoder.webp'
import antena from '../../src/assets/marquee/antena.webp'
import gabinete from '../../src/assets/marquee/gabinete.webp'
import balun from '../../src/assets/marquee/balun.webp'




const ACCESSORIES = [
  {
    id: 1,
    name: "WD Purple 2TB",
    category: "Almacenamiento",
    price: "$1,250",
    image: ssd,
    icon: HardDrive,
    description: "Disco duro especializado para vigilancia 24/7."
  },
  {
    id: 2,
    name: "Bobina Cat5e",
    category: "Cableado",
    price: "$1,800",
    image: cable,
    icon: Cable,
    description: "305m de cable UTP 100% Cobre certificado."
  },
  {
    id: 3,
    name: "Fuente de Poder",
    category: "Energía",
    price: "$450",
    image: fuentepoder,
    icon: Battery,
    description: "Distribuidor de energía para 4 cámaras 12V."
  },
  {
    id: 4,
    name: "Antena Ubiquiti",
    category: "Redes",
    price: "$2,100",
    image: antena,
    icon: Wifi,
    description: "Enlace inalámbrico de largo alcance 5GHz."
  },
  {
    id: 5,
    name: "MicroSD 64GB",
    category: "Memoria",
    price: "$220",
    image: microsd,
    icon: Disc,
    description: "Clase 10 optimizada para grabación continua."
  },
  {
    id: 6,
    name: "Rack 4U",
    category: "Infraestructura",
    price: "$1,500",
    image: gabinete,
    icon: Server,
    description: "Gabinete de pared para DVR y accesorios."
  },
  {
    id: 7,
    name: "Balun HD",
    category: "Conectores",
    price: "$150",
    image: balun,
    icon: Zap,
    description: "Par de transceptores pasivos 5MP."
  }
];

const MarqueeCard: React.FC<{ item: typeof ACCESSORIES[0] }> = ({ item }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative flex-shrink-0 w-80 bg-white border border-gray-100 shadow-sm rounded-2xl mr-8 group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    {/* Image Area */}
    <div className="relative h-48 w-full bg-gray-50 overflow-hidden flex items-center justify-center p-4">
      {/* Placeholder/Real Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
      />

      {/* Category Badge over image */}
      <div className="absolute top-4 left-4">
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-gray-100">
          {item.category}
        </span>
      </div>
    </div>

    <div className="p-6 relative">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-hik-red transition-colors">{item.name}</h3>
      </div>

      <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">{item.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xl font-bold text-gray-900">{item.price}</span>
        <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white transform group-hover:bg-hik-red transition-all duration-300 shadow-lg">
          <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  </motion.div>
);

const ProductMarquee: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            Complementos <span className="text-transparent bg-clip-text bg-gradient-to-r from-hik-red to-red-600">Pro</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">Accesorios esenciales para instalaciones de alto nivel.</p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hik-green animate-pulse"></span>
            Disponibilidad Inmediata
          </span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradients for smooth edges - White based */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Track */}
        <div className="flex w-full group">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 60, // Much slower speed (increased from 30)
            }}
          >
            {/* Render items twice to create the loop */}
            {[...ACCESSORIES, ...ACCESSORIES, ...ACCESSORIES, ...ACCESSORIES].map((item, index) => (
              <MarqueeCard key={`${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Interaction Hint */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-[1px] bg-gray-200"></div>
            <p className="text-[10px] uppercase tracking-widest font-bold">Desliza para pausar</p>
            <div className="w-12 h-[1px] bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;
