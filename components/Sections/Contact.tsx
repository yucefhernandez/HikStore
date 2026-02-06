import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Instagram, MessageSquare, ArrowUpRight } from 'lucide-react';
import { CONTACT_DATA } from '../../constants';

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: smoothEase } 
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

interface InputFieldProps {
  label: string;
  type?: string;
  isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', isTextArea = false }) => {
  // Base styles for the input/textarea
  // focus:border-hik-red and transition-colors handle the smooth border color change
  const baseInputStyles = "block py-4 px-0 w-full text-gray-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-hik-red peer transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";
  
  // Styles for the floating label
  // peer-placeholder-shown controls the resting state (down/large)
  // peer-focus controls the active state (up/small/red)
  const labelStyles = "peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hik-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ease-[cubic-bezier(0.4,0,0.2,1)]";

  return (
    <div className="relative z-0 w-full mb-8 group">
      {isTextArea ? (
        <textarea
          rows={4}
          className={`${baseInputStyles} resize-none`}
          placeholder=" "
          required
        />
      ) : (
        <input
          type={type}
          className={baseInputStyles}
          placeholder=" "
          required
        />
      )}
      <label className={labelStyles}>
        {label}
      </label>
    </div>
  );
};

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yForm = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-20 items-center">
          
          {/* Info Side */}
          <motion.div 
            style={{ y: yText }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Hablemos de tu <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-hik-red to-red-600">Próximo Proyecto</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-gray-600 mb-12 text-lg lg:text-xl max-w-lg"
            >
              Solicita una cotización gratuita o asesoría personalizada.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Phone, label: "Llámanos", value: CONTACT_DATA.phone, href: `tel:${CONTACT_DATA.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: "Email", value: CONTACT_DATA.email, href: `mailto:${CONTACT_DATA.email}` },
                { icon: Instagram, label: "Síguenos", value: `@${CONTACT_DATA.instagram}`, href: `https://instagram.com/${CONTACT_DATA.instagram}` },
                { icon: MessageSquare, label: "Messenger", value: "HikVision Ags", href: "#" }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  variants={fadeInUpVariants}
                  href={item.href}
                  className="flex items-center p-5 bg-gray-50 rounded-2xl transition-all group hover:bg-white hover:shadow-lg hover:shadow-gray-100 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-hik-red group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="ml-5 flex-1">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-medium text-gray-900 truncate">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-hik-red opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div style={{ y: yForm }} className="relative">
             {/* Decorative blob behind form */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100 relative z-10"
            >
              <form>
                <InputField label="Nombre completo" />
                <InputField label="Correo electrónico" type="email" />
                <InputField label="Mensaje o Solicitud" isTextArea />

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-gray-900 text-white font-bold py-5 rounded-xl hover:bg-hik-red transition-colors shadow-lg flex justify-center items-center space-x-2 mt-4"
                >
                  <span>Enviar Mensaje</span>
                  <ArrowUpRight size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;