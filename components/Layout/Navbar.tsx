import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_DATA } from '../../constants';
import Logo from '../Img/Icono.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Catálogo', href: '#products' },
    { name: 'Ubicación', href: '#location' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${scrolled ? 'top-4' : 'top-6'}`}
    >
      <div
        className={`
          relative rounded-full px-6 py-3 flex justify-between items-center border transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)]
          ${scrolled
            ? 'bg-white/90 border-gray-200 shadow-2xl shadow-gray-900/5 backdrop-blur-xl'
            : 'bg-white/60 border-white/40 shadow-lg shadow-gray-900/0 backdrop-blur-md'
          }
        `}
      >

        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-hik-red/10 rounded-xl blur-lg group-hover:bg-hik-red/20 transition-all duration-500" />
                <img 
                    src={Logo} 
                    alt="HikStore Logo" 
                    className="relative w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                />
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-bold text-gray-900 tracking-tight text-xl">HikStore</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Aguascalientes</span>
            </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-gray-100/50 rounded-full p-1 border border-gray-200/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-xs font-bold hover:bg-hik-red transition-all shadow-lg shadow-gray-900/20 active:scale-95 group">
            <Phone size={14} className="group-hover:rotate-12 transition-transform" />
            <span>{CONTACT_DATA.phone}</span>
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 flex flex-col space-y-1 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-hik-red rounded-xl transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="sm:hidden px-4 py-3 text-sm font-bold text-center bg-gray-900 text-white rounded-xl flex items-center justify-center space-x-2">
          <Phone size={16} />
          <span>Llamar Ahora</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;