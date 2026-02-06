import React, { useState, Suspense } from 'react';
import { CONTACT_DATA } from '../../constants';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { SecurityCamera } from '../UI/3D/SecurityCamera';
import { motion } from 'framer-motion';
import Logo from '../Img/Icono.png';

const Footer: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const width = window.innerWidth;
    // Normalize -1 to 1
    const x = (clientX / width) * 2 - 1;
    setMouseX(x);
  };

  return (
    <footer 
      className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Decorative Grid Background (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* --- 3D CAMERA "PEEKING" CORNER --- */}
      {/* Positioned absolute top-right of the footer content */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none z-0 opacity-80 mix-blend-screen">
          <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
             <Suspense fallback={null}>
                <Environment preset="city" />
                <ambientLight intensity={1} />
                <spotLight position={[5, 5, 5]} intensity={20} angle={0.3} penumbra={1} color="#D71920" />
                <spotLight position={[-5, 5, -5]} intensity={10} color="#38BDF8" />
                
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                   {/* Rotated to look like it's mounted on the top-right corner looking down-left */}
                   <group rotation={[0.3, -0.5, 0]} position={[1, 1, 0]}>
                      <SecurityCamera mouseX={mouseX} scale={1.4} />
                   </group>
                </Float>
             </Suspense>
          </Canvas>
          
          {/* "REC" Overlay Effect */}
          <div className="absolute top-10 right-10 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              <span className="text-red-600 font-mono text-xs font-bold tracking-widest animate-pulse">REC ● LIVE</span>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand - Spanning more space to avoid overlap */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center p-5 border border-white/10 shadow-2xl shrink-0 group">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(215,25,32,0.4)] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight mb-2">
                  HikStore<br />
                  <span className="text-hik-red">Aguascalientes</span>
                </h3>
                <div className="flex items-center space-x-3 text-slate-400">
                  <div className="bg-white/5 p-1 rounded-md border border-white/10">
                    <ShieldCheck size={14} className="text-hik-green" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{CONTACT_DATA.distributor}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-md">
              Llevando la seguridad corporativa y residencial al siguiente nivel con tecnología de vanguardia y soporte experto en Aguascalientes.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: `https://instagram.com/${CONTACT_DATA.instagram}` },
                { Icon: Twitter, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-hik-red hover:border-hik-red transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-hik-red pl-3">Navegación</h4>
            <ul className="space-y-4">
              {[
                { label: 'Catálogo 2026', href: '#products' },
                { label: 'Nosotros', href: '#features' },
                { label: 'Ubicación', href: '#location' },
                { label: 'Soporte Técnico', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-hik-red transition-colors" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
             <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-hik-blue pl-3">Contacto</h4>
             <ul className="space-y-6">
                <li className="flex items-start space-x-4 group cursor-default">
                   <div className="mt-1 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-hik-blue shrink-0 group-hover:bg-hik-blue group-hover:text-white transition-colors">
                      <MapPin size={16} />
                   </div>
                   <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="block font-bold text-white mb-1">HickStore</span>
                      {CONTACT_DATA.address}
                   </div>
                </li>
                <li className="flex items-center space-x-4 group">
                   <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-hik-blue shrink-0 group-hover:bg-hik-blue group-hover:text-white transition-colors">
                      <Phone size={16} />
                   </a>
                   <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                      {CONTACT_DATA.phone}
                   </a>
                </li>
                <li className="flex items-center space-x-4 group">
                   <a href={`mailto:${CONTACT_DATA.email}`} className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-hik-blue shrink-0 group-hover:bg-hik-blue group-hover:text-white transition-colors">
                      <Mail size={16} />
                   </a>
                   <a href={`mailto:${CONTACT_DATA.email}`} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                      {CONTACT_DATA.email}
                   </a>
                </li>
             </ul>
          </div>

          {/* Column 4: Newsletter / Action */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-white mb-8 border-l-4 border-white pl-3">Boletín</h4>
            <p className="text-sm text-slate-400 mb-6">
              Recibe las últimas actualizaciones de firmware y ofertas exclusivas de HikVision.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
               <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-hik-red focus:ring-1 focus:ring-hik-red transition-all placeholder:text-slate-600"
                  />
               </div>
               <button className="w-full bg-white text-slate-950 font-bold py-3 rounded-xl hover:bg-hik-red hover:text-white transition-all flex items-center justify-center space-x-2 group">
                  <span>Suscribirse</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} HikStore Aguascalientes. <span className="hidden md:inline">|</span> Distribuidor Autorizado.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
             <a href="#" className="hover:text-white transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;