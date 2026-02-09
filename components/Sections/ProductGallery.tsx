import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../constants';
import { ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

// --- CUSTOM HOOK FOR RESPONSIVE DETECTION ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
};

// --- SHARED COMPONENTS ---

const FeatureTag: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
    <CheckCircle2 size={12} className="text-hik-green" />
    <span className="text-[10px] font-bold uppercase text-gray-600 tracking-wide">{text}</span>
  </div>
);

// --- DESKTOP IMPLEMENTATION ---

interface DesktopCardProps {
  product: typeof PRODUCTS[0];
  index: number;
}

const DesktopCard: React.FC<DesktopCardProps> = ({ product, index }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <div 
        style={{ 
          zIndex: index, 
          backgroundColor: '#ffffff', 
        }} 
        className="relative flex w-full h-full md:h-[90%] shadow-2xl rounded-[2rem] border border-gray-200 overflow-hidden bg-white"
      >
        <div className="grid grid-cols-2 w-full h-full">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center px-24 bg-gradient-to-br from-gray-50 to-white relative">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-6xl font-black text-gray-200 select-none">0{index + 1}</span>
                        <div className="h-[2px] w-12 bg-hik-red" />
                        <span className="text-sm font-bold uppercase text-hik-red tracking-widest">{product.category}</span>
                        {product.badge && (
                            <span className="px-3 py-1 bg-hik-red text-white text-[10px] font-bold uppercase rounded-full">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[0.95] mb-4 tracking-tight">
                        {product.name}
                    </h2>

                    {product.price && (
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-gray-800">{product.price}</span>
                            <span className="text-sm text-gray-500 ml-2 font-medium">MXN</span>
                        </div>
                    )}

                    <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-8 font-light">
                        {product.description}
                    </p>

                    {product.features && (
                        <div className="flex flex-wrap gap-2 mb-10">
                            {product.features.map((feature, i) => (
                                <FeatureTag key={i} text={feature} />
                            ))}
                        </div>
                    )}

                    <button className="group w-max flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-hik-red transition-all shadow-lg hover:shadow-red-500/30">
                        <span className="font-bold">Consultar Disponibilidad</span>
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </button>
                </motion.div>
            </div>

            {/* Right: Visual Key */}
            <div className="relative h-full w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full h-full"
                >
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 mix-blend-multiply" />
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

const DesktopGallery = () => {
  return (
    <section className="relative bg-gray-50 px-8 py-20" id="products">
      <div className="max-w-[90%] mx-auto mb-20 text-center">
         <h2 className="text-4xl font-bold mb-4">Catálogo <span className="text-hik-red">2024</span></h2>
         <p className="text-gray-500">Tecnología de punta disponible ahora</p>
      </div>
      
      <div className="space-y-[50vh]">
        {PRODUCTS.map((product, i) => (
             <DesktopCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
};

// --- MOBILE IMPLEMENTATION ---

const MobileGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <section className="bg-gray-50 py-16 px-4 min-h-screen flex flex-col justify-center" id="products">
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-gray-900">Catálogo</h2>
        <p className="text-sm text-gray-500">Desliza para ver más</p>
      </div>

      <div className="relative w-full aspect-[4/6] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        
        {/* Top: Image Area */}
        <div className="h-[45%] relative bg-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img 
                    key={PRODUCTS[activeIndex].image}
                    src={PRODUCTS[activeIndex].image}
                    alt={PRODUCTS[activeIndex].name}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>
            
            {PRODUCTS[activeIndex].badge && (
                <div className="absolute top-4 right-4 bg-hik-red text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
                    {PRODUCTS[activeIndex].badge}
                </div>
            )}
        </div>

        {/* Bottom: Details Sheet */}
        <div className="flex-1 p-6 relative flex flex-col justify-between bg-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={PRODUCTS[activeIndex].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full"
                >
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{PRODUCTS[activeIndex].category}</span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                        {PRODUCTS[activeIndex].name}
                    </h3>

                    {PRODUCTS[activeIndex].price && (
                        <div className="mb-3">
                            <span className="text-xl font-bold text-hik-red">{PRODUCTS[activeIndex].price}</span>
                        </div>
                    )}
                    
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {PRODUCTS[activeIndex].description}
                    </p>

                    {PRODUCTS[activeIndex].features && (
                        <div className="flex flex-wrap gap-2 mb-4">
                             {PRODUCTS[activeIndex].features?.slice(0,3).map((f, i) => (
                                 <span key={i} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                     {f}
                                 </span>
                             ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex space-x-1">
                    {PRODUCTS.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-hik-red' : 'w-1.5 bg-gray-200'}`}
                        />
                    ))}
                </div>
                
                <div className="flex space-x-2">
                    <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:scale-90 transition-transform">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white active:scale-90 transition-transform shadow-lg shadow-gray-900/30">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ProductGallery: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div key={isDesktop ? 'desktop' : 'mobile'}>
        {isDesktop ? <DesktopGallery /> : <MobileGallery />}
    </div>
  );
};

export default ProductGallery;