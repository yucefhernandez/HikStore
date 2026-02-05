import { ContactInfo, Product, Feature } from './types';
import { ShieldCheck, Wrench, Users } from 'lucide-react';

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
    // Imagen de cámara de seguridad profesional
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/496722563_122205572906089883_3869168304049777898_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGs8fBk-lkuqTyYnBVg39wN1aYYH2rZUPvVphgfatlQ--kX6CJcQbPT1qVHm_bBitZXC0MENQzc_QHOrW5sOMW-&_nc_ohc=BXr_HivSNRgQ7kNvwHwvEhk&_nc_oc=AdnH9JCsTaotmFbyxmK8kwSGSFrqzroG7PfZ12pp7xFs3qzK84adcuWKnZHInUrgLm5sclugaEdp93ZpssC7Bw_k&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=SbfJx2iRjFZhroz0qxfr2g&oh=00_AfvpOuDwS3ZRWj1f8b31d-FD16VpubJESE4tilpR9FTwBg&oe=6989B5B2",
    description: "Kit completo de 5 Megapixeles. Alta definición para máxima seguridad.",
    price: "$4,190.00",
    badge: "Promoción",
    features: ["5 Megapixeles", "Incluye DVR", "Alta Definición"]
  },
  {
    id: 2,
    name: "Cubo IP 2MP",
    category: "Cámaras IP",
    // Imagen de cámara tipo cubo/interior blanca
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/492774279_122201852072089883_1551610722932322115_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgxx5rI6W7mhH1jIVzWWFZ3WvSz915Nsfda9LP3Xk2x7orGx6rnPBdCl24bQERolwmY3PH-04x-bwrH5m5xKOm&_nc_ohc=Jjms2BgF5NsQ7kNvwGK4f6j&_nc_oc=AdnBSwEswQJc4fKNdVQhQycXPa6UPP9NzbtViJu8K2sSosyMY8bWTzXnJ9_E7-K9KeePMyGmW6Ya8HZ9fzpVGQda&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=OY8NpnziuqtfDtJn1KyC8Q&oh=00_Aft1Bi_MZrOZq_pBZ_zR5xPmLaVt4A8RcBNsSeal79hkgA&oe=6989B2A8",
    description: "Cámara compacta con audio bidireccional y conexión WiFi.",
    price: "$1,200.00",
    badge: "WiFi",
    features: ["Lente 2.8mm", "Micrófono Integrado", "Audio 2 Vías", "Compresión H.265+"]
  },
  {
    id: 3,
    name: "Alarma AX Home",
    category: "Alarmas",
    // Imagen alusiva a panel de control/smart home
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/476609685_122191130702089883_676568899493271418_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGEVYEopc9Yty7vULZviiqb2nUk-i0lCtbadST6LSUK1tUwFQdsVZp94Pib3I6Ea_GROPdLzTM7_AmSgCwzWJ88&_nc_ohc=voH3d9kuja4Q7kNvwHqxZa-&_nc_oc=Adm0VUccksizXXh8nJGPkH2R1iE5Z6fNAe0Q9BdHrmjJ7bCZ_XyeyRcw21YII-E-EA_LrbVcco_AKikvcOLr4kKm&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=dyeq_pWDEvT8yqlZoeRIxw&oh=00_Afs7GTBeyEMz5mMENG9L5DH6O3DpAbY8W19IqUSU4La6oA&oe=6989A16F",
    description: "La seguridad de tu hogar en la palma de tu mano.",
    price: "Cotizar",
    features: ["Alertas en tiempo real", "Control por App", "Gestión Remota"]
  },
  {
    id: 4,
    name: "NVS (Hub) 4MP",
    category: "Hubs",
    // Imagen de equipo de red/hub blanco
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/483863407_122195527082089883_3344765138181990826_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHWKFcnwP8OskSp79wd_TDqijgr09yWW0yKOCvT3JZbTHyJBzwX8g_3adRspkUROZwBx6USkGKJye7_CgATUapI&_nc_ohc=sLaZqXTgDjAQ7kNvwE5m92m&_nc_oc=AdnBtdERCXsmRnwUdzbpKAk-LK6G7ijN_6_fPz0LU8MPNi18inm-5F13MMc3WjiTNaG5-BRBRr2uzAD-PJy72fZ3&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=9j4-03-Sd5B2doHSJVPl_A&oh=00_AftYmiiknHmPqjEG5KIUB4bzLkzT8ESn7d5i8uMZ0UupAQ&oe=6989D2B7",
    description: "Seguridad sin complicaciones. Hub central de video.",
    price: "Consultar",
    features: ["Resolución 4MP", "Hub Central", "Fácil Configuración"]
  },
  {
    id: 5,
    name: "SSD Portátil",
    category: "Almacenamiento",
    // Imagen de disco duro externo
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/496722563_122205572906089883_3869168304049777898_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGs8fBk-lkuqTyYnBVg39wN1aYYH2rZUPvVphgfatlQ--kX6CJcQbPT1qVHm_bBitZXC0MENQzc_QHOrW5sOMW-&_nc_ohc=BXr_HivSNRgQ7kNvwHwvEhk&_nc_oc=AdnH9JCsTaotmFbyxmK8kwSGSFrqzroG7PfZ12pp7xFs3qzK84adcuWKnZHInUrgLm5sclugaEdp93ZpssC7Bw_k&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=SbfJx2iRjFZhroz0qxfr2g&oh=00_AfvpOuDwS3ZRWj1f8b31d-FD16VpubJESE4tilpR9FTwBg&oe=6989B5B2",
    description: "Unidad de estado sólido portátil HikVision.",
    price: "$380.00",
    badge: "Desde",
    features: ["256GB - $380.00", "128GB - $490.00", "Alta Velocidad"]
  },
  {
    id: 6,
    name: "Kit Videoportero",
    category: "Acceso",
    // Imagen de tecnología de acceso/pantalla
    image: "https://scontent.fmex42-1.fna.fbcdn.net/v/t39.30808-6/474025699_122188496282089883_7868424694148119625_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHuzqNmYttB_BuoKNHwAwlWHQV84e97DCUdBXzh73sMJdiQRtF8poWr1RBnGUoBMDFW1dxplQqldjSeZORiNGTB&_nc_ohc=4d9HzRpQ3T8Q7kNvwFiAD-3&_nc_oc=AdlMJhsCxpts-ngx6X6GlHOBfHHfQlOFSrHQx5fQtJtaayahVzM1fqkkrndzq2ZDYCiyRGw1QW-5Y7h90o0KraoZ&_nc_zt=23&_nc_ht=scontent.fmex42-1.fna&_nc_gid=bHik8cBGE70ewsq0cBmP9w&oh=00_AfuIemjfSfItiPRq7LOwyjLIvuLPBpguD3Tog3zSA4kFgA&oe=6989E7FD",
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