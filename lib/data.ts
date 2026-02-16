// ══════════════════════════════════════════════
// LYVIES — CMS Headless Simulé
// Contenus rédactionnels
// Structure prête pour intégration Sanity/Strapi
// ══════════════════════════════════════════════

/* ── Types ────────────────────────────────────── */
export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  event: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "mariages" | "corporate" | "prive" | "signature";
  caption: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

/* ── Contenus Héro ────────────────────────────── */
export const heroContent = {
  surtitre: "Traiteur d'exception",
  titre: "L'art culinaire\nréinventé",
  sousTitre:
    "Chaque événement devient une expérience unique où les saveurs d'exception rencontrent la haute gastronomie contemporaine.",
  ctaPrimaire: "Demander un devis",
  ctaSecondaire: "Découvrir l'univers",
};

/* ── ADN de la marque ─────────────────────────── */
export const adnContent = {
  surtitre: "Notre essence",
  titre: "L'héritage réinventé",
  texte: `Lyvies puise dans un savoir-faire culinaire d'exception, une richesse gustative construite au fil des années. Chaque épice, chaque aromate raconte une histoire de terroirs et de rencontres. Nous créons des expériences qui allient tradition et modernité.`,
  citation:
    "La cuisine est le langage universel de l'hospitalité. Nous en faisons une œuvre d'art.",
  auteurCitation: "Fondatrice, Lyvies",
  stats: [
    { nombre: "500+", label: "Événements sublimés" },
    { nombre: "12", label: "Années d'excellence" },
    { nombre: "98%", label: "Clients enchantés" },
  ],
};

/* ── Expériences culinaires ───────────────────── */
export const experiences: Experience[] = [
  {
    id: "mariages",
    title: "Mariages",
    subtitle: "L'union des saveurs",
    description:
      "Un menu composé pour votre jour unique. Du cocktail à la pièce montée, chaque détail est pensé pour célébrer votre histoire.",
    image: "/images/experience-mariage.jpg",
    icon: "💍",
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "L'excellence professionnelle",
    description:
      "Impressionnez vos partenaires avec une expérience culinaire qui reflète le prestige de votre marque. Galas, séminaires, lancements : chaque format mérite l'exception.",
    image: "/images/experience-corporate.jpg",
    icon: "🏛",
  },
  {
    id: "prive",
    title: "Événements privés",
    subtitle: "L'intimité sublimée",
    description:
      "Anniversaires, fêtes de famille, dîners entre proches. Transformez chaque rassemblement intime en un souvenir inoubliable.",
    image: "/images/experience-prive.jpg",
    icon: "✨",
  },
  {
    id: "signature",
    title: "Expérience Signature",
    subtitle: "L'immersion totale",
    description:
      "Notre offre la plus exclusive : un voyage gastronomique conçu sur mesure, où scénographie, musique et saveurs se rencontrent.",
    image: "/images/experience-signature.jpg",
    icon: "◆",
  },
];

/* ── Témoignages ──────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amina & Karim",
    role: "Mariés, Juin 2024",
    quote:
      "Lyvies a transformé notre mariage en un moment inoubliable. Nos invités en parlent encore. Chaque plat était soigné, chaque service impeccable.",
    event: "Mariage, 220 convives",
  },
  {
    id: "t2",
    name: "Sophie Durand",
    role: "Directrice événementiel, Kering",
    quote:
      "Pour notre gala annuel, il nous fallait l'excellence absolue. Lyvies a dépassé toutes nos attentes avec une sophistication et une attention au détail remarquables.",
    event: "Gala Corporate, 350 convives",
  },
  {
    id: "t3",
    name: "Jean-Marc Bellanger",
    role: "Collectionneur d'art",
    quote:
      "L'Expérience Signature est incomparable. C'est bien plus qu'un dîner, c'est un vrai moment de partage. On en ressort différent.",
    event: "Dîner privé, 40 convives",
  },
  {
    id: "t4",
    name: "Fatou & Olivier",
    role: "Mariés, Septembre 2024",
    quote:
      "Nous voulions une réception qui reflète parfaitement notre personnalité, tout en gardant un esprit très contemporain. Lyvies a compris notre vision à la perfection.",
    event: "Mariage, 180 convives",
  },
];

/* ── Galerie ──────────────────────────────────── */
export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-1.jpg", alt: "Table dressée sous cloche en cristal", category: "mariages", caption: "Réception sous cloche, dîner de gala", aspect: "square" },
  { id: "g2", src: "/images/gallery-2.jpg", alt: "Tarte chocolat-mangue en cours de dressage", category: "signature", caption: "Tarte mangue & feuille d'or", aspect: "square" },
  { id: "g3", src: "/images/gallery-3.jpg", alt: "Cocktails ananas-gingembre au bar", category: "corporate", caption: "Cocktails ananas, thym & gingembre", aspect: "square" },
  { id: "g4", src: "/images/gallery-4.jpg", alt: "Tartelettes coco, banane et passion", category: "prive", caption: "Tartelettes coco-passion", aspect: "square" },
  { id: "g5", src: "/images/gallery-5.jpg", alt: "Tartelettes à la crème et fleur caramélisée", category: "signature", caption: "Tartelettes crème & agrumes", aspect: "portrait" },
  { id: "g6", src: "/images/gallery-6.jpg", alt: "Dîner aux bougies entre convives", category: "mariages", caption: "Dîner intimiste aux chandelles", aspect: "portrait" },
  { id: "g7", src: "/images/gallery-7.jpg", alt: "Bissap glacé à la menthe et au gingembre", category: "prive", caption: "Bissap glacé, menthe fraîche", aspect: "square" },
  { id: "g8", src: "/images/gallery-8.jpg", alt: "Chef préparant une sauce en cuisine", category: "corporate", caption: "En cuisine, le geste précis", aspect: "square" },
];

/* ── Équipe ────────────────────────────────────── */
export const teamMembers: TeamMember[] = [
  {
    id: "chef-1",
    name: "Lyvie Ndongo",
    role: "Cheffe Fondatrice",
    bio: "Formée entre plusieurs horizons culinaires, Lyvie fusionne avec brio les techniques de la haute gastronomie et les saveurs du monde.",
    image: "/images/chef-lyvie.jpg",
  },
  {
    id: "chef-2",
    name: "Mamadou Diallo",
    role: "Chef Pâtissier",
    bio: "Artisan du sucré, Mamadou réinvente les desserts en intégrant des ingrédients d'exception dans des créations architecturales.",
    image: "/images/chef-mamadou.jpg",
  },
  {
    id: "chef-3",
    name: "Claire Beaumont",
    role: "Directrice Artistique",
    bio: "Claire conçoit chaque événement comme une scénographie. Son œil transforme les espaces en tableaux vivants.",
    image: "/images/da-claire.jpg",
  },
];

/* ── Blog / Journal ───────────────────────────── */
export const blogPosts: BlogPost[] = [
  {
    slug: "art-du-dressage-contemporain",
    title: "L'art du dressage contemporain",
    excerpt: "Comment les motifs et les textures inspirent nos présentations gastronomiques d'aujourd'hui.",
    date: "2024-11-15",
    category: "Savoir-faire",
    image: "/images/blog-dressage.jpg",
    readTime: 5,
  },
  {
    slug: "epices-sacrees",
    title: "Les épices sacrées de nos créations",
    excerpt: "Selim, maniguette, piment de Penja : un voyage olfactif au cœur de notre garde-manger.",
    date: "2024-10-28",
    category: "Inspiration",
    image: "/images/blog-epices.jpg",
    readTime: 4,
  },
  {
    slug: "mariage-multiculturel-tendances",
    title: "Mariages multiculturels : les tendances 2025",
    excerpt: "L'union des cultures à table : comment créer un menu qui célèbre deux héritages.",
    date: "2024-10-10",
    category: "Événements",
    image: "/images/blog-mariage.jpg",
    readTime: 6,
  },
];

/* ── Navigation ───────────────────────────────── */
export const navigationLinks = [
  { label: "Maison", href: "/" },
  { label: "Univers", href: "/univers" },
  { label: "Expériences", href: "/experiences" },
  { label: "Galerie", href: "/galerie" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

/* ── Metadata SEO ─────────────────────────────── */
export const siteMetadata = {
  title: "Lyvies Traiteur | Haute Gastronomie d'Exception",
  description:
    "Traiteur haut de gamme spécialisé en gastronomie contemporaine. Mariages, événements corporate et expériences culinaires sur mesure à Paris et en Île-de-France.",
  url: "https://lyvies-traiteur.fr",
  ogImage: "/images/og-lyvies.jpg",
  locale: "fr_FR",
  keywords: [
    "traiteur haut de gamme",
    "gastronomie contemporaine",
    "traiteur mariage",
    "traiteur événementiel Paris",
    "traiteur gastronomique",
    "traiteur luxe",
  ],
};
