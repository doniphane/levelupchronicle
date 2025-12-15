// Structure de données unifiée pour tout le contenu du blog
// Ce fichier centralise tous les articles et vidéos pour faciliter la gestion

export type ContentType = 'article' | 'video';
export type ContentCategory = 'Guide' | 'Tutoriel' | 'Gameplay' | 'News' | 'Récap' | 'Construction';

// Interface pour un contenu du blog (article ou vidéo)
export interface BlogContent {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  author: string;
  date: string; // Format: YYYY-MM-DD
  updatedAt?: string;
  readTime?: string; // Pour les articles
  category: ContentCategory;
  tags: string[]; // Tags pour la recherche et le filtrage
  href: string; // URL du contenu
  youtubeId?: string; // Pour les vidéos
  featured?: boolean; // Contenu mis en avant
  views?: number; // Nombre de vues (optionnel)
}

// Données des articles
export const articles: BlogContent[] = [
  {
    id: "article-01",
    type: "article",
    title: "Liste de tout mes dinos apprivoisés sur le serveur ASA",
    description: "Découvrez la liste de tous les dinos apprivoisés sur le serveur ASA avec la Team Kuroizana.",
    author: "Team Kuroizana",
    date: "2025-11-21",
    updatedAt: "2025-11-27",
    readTime: "5 min",
    category: "Guide",
    tags: ["ARK", "Dinosaures", "Apprivoisement", "Guide", "ASA"],
    href: "/article/ark-debuter",
    featured: true,
    views: 1250,
  },
  {
    id: "article-02",
    type: "article",
    title: "ATM10 To the Sky : Récap de nos débuts",
    description: "Retour sur notre premier stream sur le modpack ATM10 To the Sky, un skyblock dans les airs avec la team.",
    author: "Team Kuroizana",
    date: "2025-11-15",
    readTime: "7 min",
    category: "Récap",
    tags: ["Minecraft", "ATM10", "Skyblock", "Modpack", "Stream"],
    href: "/article/atm10-recap",
    featured: false,
  },
  {
    id: "article-03",
    type: "article",
    title: "Les meilleures techniques de construction sur Minecraft",
    description: "Apprenez les techniques avancées de construction utilisées par la Team Kuroizana pour créer des builds épiques.",
    author: "Team Kuroizana",
    date: "2025-11-10",
    readTime: "10 min",
    category: "Tutoriel",
    tags: ["Minecraft", "Construction", "Tutoriel", "Building"],
    href: "/article/minecraft-construction",
    featured: false,
  },
];

// Données des vidéos
export const videos: BlogContent[] = [
  {
    id: "video-06",
    type: "video",
    title: "Farming Simulator 25 On recolte de la canne a sucre avec la team Kuroizana.",
    description: "Episode de Farming Simulator 25 avec la team Kuroizana",
    author: "Team Kuroizana",
    date: "2025-11-28",
    category: "Gameplay",
    tags: ["Farming Simulator", "Coop", "Simulation", "2025"],
    href: "/video#video-05",
    youtubeId: "CC8cc2HTkNo",
    featured: true,
 
  },{
    id: "video-05",
    type: "video",
    title: "The division 2 Episode 1 avec la team Kuroizana",
    description: "Episode 1 de la série The division 2 avec la team Kuroizana",
    author: "Team Kuroizana",
    date: "2025-11-28",
    category: "Gameplay",
    tags: ["The Division 2", "Coop", "Action", "TPS"],
    href: "/video#video-05",
    youtubeId: "CC8cc2HTkNo",
    featured: true,
 
  },
  {
    id: "video-04",
    type: "video",
    title: "ATM10 To the Sky #1 - Skyblock dans les airs | Recap du premier live",
    description: "Premier live de la série ATM10 To the Sky",
    author: "Team Kuroizana",
    date: "2025-11-20",
    category: "Récap",
    tags: ["Minecraft", "ATM10", "Skyblock", "Modpack", "Stream"],
    href: "/video#video-04",
    youtubeId: "FrcnmAvJh04",
    featured: false,
   
  },
  {
    id: "video-03",
    type: "video",
    title: "ARK ASCENDED - ÉPISODE 3 : MUTATIONS EXTRÊMES JE TEST LES PREMIER MODS ABUSER",
    description: "découvrez le dernier épisode de la série ARK ASCENDED",
    author: "Team Kuroizana",
    date: "2025-11-18",
    category: "Gameplay",
    tags: ["ARK", "Mutations", "Mods", "ASA"],
    href: "/video#video-03",
    youtubeId: "PVIFroaaQw4",
    featured: true,
    
  },
  {
    id: "video-02",
    type: "video",
    title: "ARK Survival Ascended - ÉPISODE 2: Construction de la Base Kuroizana",
    description: "découvrez le deuxième épisode de la série ARK ASCENDED",
    author: "Team Kuroizana",
    date: "2025-11-12",
    category: "Construction",
    tags: ["ARK", "Construction", "Base", "ASA"],
    href: "/video#video-02",
    youtubeId: "YA52SMFTYmU",
    featured: false,
    
  },
  {
    id: "video-01",
    type: "video",
    title: "ARK Survival Ascended - ÉPISODE 1 avec la Team Kuroizana - L'Aventure Commence",
    description: "découvrez le premier épisode de la série ARK ASCENDED",
    author: "Team Kuroizana",
    date: "2025-11-05",
    category: "Gameplay",
    tags: ["ARK", "Aventure", "Début", "ASA"],
    href: "/video#video-01",
    youtubeId: "zfRTYEL_g1E",
    featured: false,
    
  },
];

// Tout le contenu combiné (articles + vidéos)
export const allContent: BlogContent[] = [...articles, ...videos];

// Fonctions utilitaires pour filtrer et rechercher du contenu

// Trier le contenu par date (plus récent en premier)
export function sortByDate(content: BlogContent[]): BlogContent[] {
  return [...content].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Obtenir le contenu le plus récent
export function getLatestContent(limit: number = 3): BlogContent[] {
  return sortByDate(allContent).slice(0, limit);
}

// Obtenir les derniers articles
export function getLatestArticles(limit: number = 3): BlogContent[] {
  return sortByDate(articles).slice(0, limit);
}

// Obtenir les dernières vidéos
export function getLatestVideos(limit: number = 3): BlogContent[] {
  return sortByDate(videos).slice(0, limit);
}

// Filtrer par catégorie
export function filterByCategory(category: ContentCategory, content: BlogContent[] = allContent): BlogContent[] {
  return content.filter(item => item.category === category);
}

// Filtrer par type (article ou vidéo)
export function filterByType(type: ContentType): BlogContent[] {
  return allContent.filter(item => item.type === type);
}

// Rechercher dans le contenu (titre, description, tags)
export function searchContent(query: string, content: BlogContent[] = allContent): BlogContent[] {
  const lowerQuery = query.toLowerCase();
  return content.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Obtenir le contenu mis en avant
export function getFeaturedContent(): BlogContent[] {
  return allContent.filter(item => item.featured === true);
}

// Obtenir les catégories uniques
export function getUniqueCategories(): ContentCategory[] {
  const categories = allContent.map(item => item.category);
  return Array.from(new Set(categories));
}

// Obtenir tous les tags uniques
export function getAllTags(): string[] {
  const tags = allContent.flatMap(item => item.tags);
  return Array.from(new Set(tags)).sort();
}

// Obtenir le contenu connexe (même catégorie ou tags similaires)
export function getRelatedContent(currentId: string, limit: number = 3): BlogContent[] {
  const currentContent = allContent.find(item => item.id === currentId);
  if (!currentContent) return [];

  // Score de similarité basé sur la catégorie et les tags
  const scored = allContent
    .filter(item => item.id !== currentId)
    .map(item => {
      let score = 0;

      // Même catégorie = +3 points
      if (item.category === currentContent.category) score += 3;

      // Tags en commun = +1 point par tag
      const commonTags = item.tags.filter(tag => currentContent.tags.includes(tag));
      score += commonTags.length;

      // Même type = +1 point
      if (item.type === currentContent.type) score += 1;

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ item }) => item);
}

// Obtenir le contenu par ID
export function getContentById(id: string): BlogContent | undefined {
  return allContent.find(item => item.id === id);
}
