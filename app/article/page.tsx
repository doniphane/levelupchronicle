"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";

// Interface pour représenter un article dans la liste
// Cette interface sert uniquement pour la page de listing
interface ArticleCardInfo {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  href: string;
}

// Liste des articles affichés sur la page /article
// Chaque entrée pointe vers une page React différente (href)
const articleCards: ArticleCardInfo[] = [
  {
    id: "article-01",
    title: "Liste de tout mes dinos apprivoisés sur le serveur ASA",
    description:
      "Découvrez la liste de tous les dinos apprivoisés sur le serveur ASA avec la Team Kuroizana.",
    author: "Team Kuroizana",
    date: "2025-11-21",
    updatedAt: "2025-11-27",
    readTime: "5 min",
    category: "Guide",
    href: "/article/ark-debuter",
  },

];

// Interface pour typer les props de ArticleCard
// Cela permet à TypeScript de vérifier que nous passons les bonnes données
interface ArticleCardProps {
  article: ArticleCardInfo;
}

// Composant pour afficher une carte d'article
// Chaque carte affiche le titre, la description, l'auteur, la date et le temps de lecture
const ArticleCard = ({ article }: ArticleCardProps) => {
  // État pour savoir si l'utilisateur survole l'article
  // useState est un hook React qui permet de stocker une valeur qui peut changer
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={article.href}>
      <div
        className="glassmorphic-dark rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contenu de la carte */}
        <div className="p-6 space-y-4">
          {/* Catégorie de l'article */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-400 text-xs font-semibold uppercase tracking-wide">
              {article.category}
            </span>
          </div>

          {/* Titre de l'article */}
          <h3
            className={`text-xl font-bold transition-colors duration-300 ${
              isHovered ? "text-red-400" : "text-white"
            }`}
          >
            {article.title}
          </h3>

          {/* Description de l'article */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {article.description}
          </p>

          {/* Informations supplémentaires (auteur, date, temps de lecture) */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {/* Auteur */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span className={article.updatedAt ? 'line-through text-gray-500' : ''}>
                {article.date}
              </span>
              {article.updatedAt && (
                <span className="text-amber-400 ml-1" title="Mis à jour">
                  → {article.updatedAt}
                </span>
              )}
            </div>

            {/* Temps de lecture */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        {/* En-tête de la page */}
        <header className="text-center space-y-6">
          {/* Badge "Articles" */}
          <p className="inline-flex px-4 py-1 rounded-full border border-red-600/30 text-red-400 text-sm uppercase tracking-[0.3em]">
            Articles
          </p>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-black neon-glow">
            Articles et Guides
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez nos articles, guides et récits sur les aventures de la Team Kuroizana et de la communauté.
          </p>

          {/* Lien de retour à l'accueil */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition"
          >
            ← Retour à l'accueil
          </Link>
        </header>

        {/* Section des articles */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* On affiche chaque article en utilisant la fonction map */}
          {/* map permet de transformer chaque élément du tableau en un composant React */}
          {articleCards.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>

        {/* Message si aucun article n'est disponible */}
        {articleCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucun article disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

