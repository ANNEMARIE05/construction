export interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  specifications: string[];
  availability: boolean;
  rating: number;
  features: string[];
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const equipmentData: Equipment[] = [
  {
    id: 1,
    name: "Excavatrice CAT 320",
    category: "Excavation",
    image: "/src/assets/CM20170418-52085-33213.jpg",
    price: 292500,
    description: "Excavatrice hydraulique de 20 tonnes, idéale pour les travaux de terrassement et de démolition.",
    specifications: ["Poids: 20 tonnes", "Puissance: 110 kW", "Capacité godet: 1.2 m³", "Profondeur: 6.5m"],
    availability: true,
    rating: 4.8,
    features: ["GPS intégré", "Cabine climatisée", "Éclairage LED", "Maintenance récente"]
  },
  {
    id: 2,
    name: "Bulldozer CAT D6T",
    category: "Terrassement",
    image: "/src/assets/CM20190530-938e8-4cd18.jpg",
    price: 247000,
    description: "Bulldozer de 18 tonnes avec lame angulaire, parfait pour le nivellement et le déblaiement.",
    specifications: ["Poids: 18 tonnes", "Puissance: 150 kW", "Largeur lame: 3.2m", "Poussée: 180 kN"],
    availability: true,
    rating: 4.9,
    features: ["Lame angulaire", "Ripper arrière", "GPS", "Cabine insonorisée"]
  },
  {
    id: 3,
    name: "Grue Mobile Liebherr LTM 1050",
    category: "Levage",
    image: "/src/assets/liebherr-ltm-1050-3-1-picture-gallery01_w800.jpg",
    price: 422500,
    description: "Grue mobile de 50 tonnes avec flèche télescopique, idéale pour les chantiers urbains.",
    specifications: ["Charge max: 50 tonnes", "Portée max: 40m", "Hauteur max: 50m", "Moteur: 6 cylindres"],
    availability: false,
    rating: 4.7,
    features: ["Flèche télescopique", "Contrepoids mobile", "GPS", "Caméras de sécurité"]
  },
  {
    id: 4,
    name: "Bétonnière 6m³",
    category: "Béton",
    image: "/src/assets/grue-industrielle-ciel-bleu.webp",
    price: 117000,
    description: "Bétonnière automotrice avec malaxeur de 6 mètres cubes, parfaite pour les gros volumes.",
    specifications: ["Capacité: 6 m³", "Vitesse malaxage: 15 tr/min", "Autonomie: 8h", "Poids: 12 tonnes"],
    availability: true,
    rating: 4.6,
    features: ["Malaxeur haute performance", "Système de dosage", "GPS", "Maintenance préventive"]
  },
  {
    id: 5,
    name: "Compacteur Vibrant Bomag",
    category: "Compactage",
    image: "/src/assets/Location-rouleau-vibrant-BOMAG-BW65H.jpg",
    price: 78000,
    description: "Compacteur vibrant de 1.5 tonnes pour le compactage des sols et enrobés.",
    specifications: ["Poids: 1.5 tonnes", "Force centrifuge: 25 kN", "Fréquence: 50 Hz", "Largeur: 1.2m"],
    availability: true,
    rating: 4.5,
    features: ["Vibration continue", "Direction hydrostatique", "Éclairage LED", "Confort opérateur"]
  },
  {
    id: 6,
    name: "Pelle Hydraulique JCB 220X",
    category: "Excavation",
    image: "/src/assets/pelle-sur-chenilles-jcb-220x-lc.jpg",
    price: 273000,
    description: "Pelle hydraulique de 22 tonnes avec godet de 1.4 m³, polyvalente et efficace.",
    specifications: ["Poids: 22 tonnes", "Puissance: 120 kW", "Capacité godet: 1.4 m³", "Profondeur: 7m"],
    availability: true,
    rating: 4.8,
    features: ["Godet rapide", "Cabine panoramique", "Économie de carburant", "Maintenance facile"]
  }
];

export const articlesData: Article[] = [
  {
    id: 1,
    title: "Les tendances du BTP en 2024",
    excerpt: "Découvrez les innovations qui transforment le secteur du bâtiment et des travaux publics.",
    content: "Le secteur du BTP évolue rapidement avec l'intégration de nouvelles technologies...",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
    author: "Jean Dupont",
    date: "2024-01-15",
    category: "Innovation",
    tags: ["BTP", "Innovation", "Technologie"]
  },
  {
    id: 2,
    title: "Guide de location d'engins de chantier",
    excerpt: "Tout ce qu'il faut savoir pour bien choisir et louer vos engins de construction.",
    content: "La location d'engins de chantier nécessite une approche méthodique...",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
    author: "Marie Martin",
    date: "2024-01-10",
    category: "Guide",
    tags: ["Location", "Engins", "Conseils"]
  },
  {
    id: 3,
    title: "Sécurité sur les chantiers",
    excerpt: "Les bonnes pratiques pour assurer la sécurité de vos équipes sur les chantiers.",
    content: "La sécurité sur les chantiers est une priorité absolue...",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
    author: "Pierre Durand",
    date: "2024-01-05",
    category: "Sécurité",
    tags: ["Sécurité", "Chantier", "Formation"]
  }
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Location d'Engins",
    description: "Large gamme d'engins de construction disponibles à la location avec maintenance incluse.",
    icon: "🚜",
    features: ["Engins récents", "Maintenance incluse", "Livraison sur site", "Formation opérateurs"]
  },
  {
    id: 2,
    title: "Vente de Matériel",
    description: "Matériel de construction neuf et d'occasion, garantie et service après-vente.",
    icon: "🔧",
    features: ["Matériel neuf", "Occasion vérifiée", "Garantie", "SAV complet"]
  },
  {
    id: 3,
    title: "Maintenance & Réparation",
    description: "Service de maintenance préventive et curative pour tous types d'engins.",
    icon: "⚙️",
    features: ["Maintenance préventive", "Réparation rapide", "Pièces détachées", "Intervention 24h/7j"]
  },
  {
    id: 4,
    title: "Formation Opérateurs",
    description: "Formation certifiée pour les opérateurs d'engins de chantier.",
    icon: "🎓",
    features: ["Formation CACES", "Recyclage", "Formation sur site", "Certification"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Marc Lefebvre",
    company: "BTP Construction",
    content: "Service exceptionnel ! Les engins sont toujours en parfait état et la livraison est ponctuelle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sophie Moreau",
    company: "Chantiers Modernes",
    content: "ArchiBat nous accompagne depuis 5 ans. Fiabilité et professionnalisme au rendez-vous.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Thomas Bernard",
    company: "Terrassement Pro",
    content: "Excellent rapport qualité-prix. Le service client est réactif et les conseils précieux.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];
