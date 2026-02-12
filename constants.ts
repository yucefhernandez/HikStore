import { ContactInfo, Product, Feature } from './types';
import { ShieldCheck, Wrench, Users } from 'lucide-react';
import producto1 from './components/Img/Producto_1.jpg';
import producto2 from './components/Img/Producto_2.jpg';
import producto3 from './components/Img/Producto_3.jpg';
import producto4 from './components/Img/Producto_4.jpg';
import producto5 from './components/Img/Producto_5.jpg';

export const CONTACT_DATA: ContactInfo = {
  brand: "HikStore Aguascalientes",
  distributor: "contBIT (Oficial HikVision)",
  address: "CC Galerías local 104, a un lado de Lumen, Aguascalientes, Mexico, 20124",
  phone: "449 387 7776",
  email: "contacto@hikstoreags.mx",
  instagram: "hikstoreags",
  tiktok: "hikstoreags",
  messenger: "HikVision Aguascalientes"
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kit 5MP + DVR",
    category: "Paquetes CCTV",
    image: producto1,
    description: "Kit completo de 5 Megapixeles. Alta definición para máxima seguridad.",
    price: "$4,190.00",
    badge: "Promoción",
    features: ["5 Megapixeles", "Incluye DVR", "Alta Definición"]
  },
  {
    id: 2,
    name: "Cubo IP 2MP",
    category: "Cámaras IP",
    image: producto2,
    description: "Cámara compacta con audio bidireccional y conexión WiFi.",
    price: "$1,200.00",
    badge: "WiFi",
    features: ["Lente 2.8mm", "Micrófono Integrado", "Audio 2 Vías", "Compresión H.265+"]
  },
  {
    id: 3,
    name: "Alarma AX Home",
    category: "Alarmas",
    image: producto3,
    description: "La seguridad de tu hogar en la palma de tu mano.",
    price: "Cotizar",
    features: ["Alertas en tiempo real", "Control por App", "Gestión Remota"]
  },
  {
    id: 4,
    name: "NVS (Hub) 4MP",
    category: "Hubs",
    image: producto4,
    description: "Seguridad sin complicaciones. Hub central de video.",
    price: "Consultar",
    features: ["Resolución 4MP", "Hub Central", "Fácil Configuración"]
  },
  {
    id: 5,
    name: "SSD Portátil",
    category: "Almacenamiento",
    image: producto5,
    description: "Unidad de estado sólido portátil HikVision.",
    price: "$380.00",
    badge: "Desde",
    features: ["256GB - $380.00", "128GB - $490.00", "Alta Velocidad"]
  },
  {
    id: 6,
    name: "Kit Videoportero",
    category: "Acceso",
    image: producto1, // Faltante Producto_6.jpg, usando producto1 temporalmente
    description: "Monitor touch screen de 7 pulgadas.",
    price: "$3,402.00",
    badge: "Promoción",
    features: ["Pantalla Táctil 7\"", "IVA Incluido", "Sin instalación"]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Distribuidor Oficial",
    description: "Garantía directa de HikVision y productos 100% originales contBIT.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Soporte Técnico",
    description: "Asesoría especializada para configuración y mantenimiento de equipos.",
    icon: Wrench
  },
  {
    id: 3,
    title: "Instalación Pro",
    description: "Equipo certificado para instalaciones residenciales y corporativas.",
    icon: Users
  }
];