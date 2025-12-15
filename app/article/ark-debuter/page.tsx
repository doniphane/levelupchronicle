"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedContent from "@/components/blog/RelatedContent";
import Breadcrumb from "@/components/blog/Breadcrumb";

// Interface pour typer les informations de l'article
interface ArticleMeta {
  title: string;
  description: string;
  author: string;
  date: string;
  updatedAt?: string;
  readTime: string;
  category: string;
}

// Interface pour les statistiques d'un dinosaure
interface DinoStat {
  label: string;
  currentValue: number;
  maxValue: number;
  bonusValue: number;
  barGradientClass: string;
  trackColorClass: string;
  badgeColorClass: string;
}

// Interface pour un dinosaure
interface Dino {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  stats: DinoStat[];
}

// On définit les informations de cet article spécifique
const articleMeta: ArticleMeta = {
  title: "Liste de tout mes dinos apprivoisés sur le serveur ASA",
  description:
    "Découvrez la liste de tous les dinos apprivoisés sur le serveur ASA avec la Team Kuroizana.",
  author: "Team Kuroizana",
  date: "2025-11-21",
  updatedAt: "2025-11-27",
  readTime: "5 min",
  category: "Bestiaire",
};

// Tableau des dinosaures avec leurs statistiques
const dinos: Dino[] = [
  {
    id: "pteranodon",
    name: "Ptéranodon Elemental Ice",
    image: "/Mod_Ark_Eternal_Elemental_Ice_Pteranodon_(Wild)_Image (1).jpg",
    alt: "Ptéranodon Elemental Ice posé sur la plage",
    description: "Un magnifique Ptéranodon de glace apprivoisé lors d'une expédition dans les montagnes enneigées.",
    stats: [
      {
        label: "Vie",
        currentValue: 31,
        maxValue: 80,
        bonusValue: 0,
        barGradientClass: "from-red-500 via-rose-500 to-red-700",
        trackColorClass: "bg-red-500/20",
        badgeColorClass: "bg-red-500/20 text-red-200 border border-red-500/40",
      },
      {
        label: "Énergie",
        currentValue: 46,
        maxValue: 80,
        bonusValue: 0,
        barGradientClass: "from-sky-400 via-blue-500 to-indigo-600",
        trackColorClass: "bg-sky-500/20",
        badgeColorClass: "bg-sky-500/20 text-sky-200 border border-sky-500/40",
      },
      {
        label: "Mêlée",
        currentValue: 34,
        maxValue: 80,
        bonusValue: 0,
        barGradientClass: "from-emerald-400 via-lime-400 to-green-600",
        trackColorClass: "bg-emerald-500/20",
        badgeColorClass: "bg-emerald-500/20 text-emerald-200 border border-emerald-500/40",
      },
      {
        label: "Vitesse",
        currentValue: 65,
        maxValue: 100,
        bonusValue: 10,
        barGradientClass: "from-purple-400 via-fuchsia-500 to-pink-600",
        trackColorClass: "bg-purple-500/20",
        badgeColorClass: "bg-purple-500/20 text-purple-200 border border-purple-500/40",
      },
    ],
  },
  {
    id: "triceratops",
    name: "Tricératops",
    image: "/trice image.png",
    alt: "Tricératops dans les plaines",
    description: "Un puissant Tricératops apprivoisé pour sa force et son endurance lors des récoltes de ressources.",
    stats: [
      {
        label: "Vie",
        currentValue: 75,
        maxValue: 100,
        bonusValue: 15,
        barGradientClass: "from-green-500 via-emerald-500 to-teal-600",
        trackColorClass: "bg-green-500/20",
        badgeColorClass: "bg-green-500/20 text-green-200 border border-green-500/40",
      },
      {
        label: "Endurance",
        currentValue: 60,
        maxValue: 100,
        bonusValue: 5,
        barGradientClass: "from-amber-300 via-yellow-400 to-orange-500",
        trackColorClass: "bg-yellow-500/20",
        badgeColorClass: "bg-yellow-500/20 text-yellow-200 border border-yellow-500/40",
      },
      {
        label: "Poids",
        currentValue: 85,
        maxValue: 100,
        bonusValue: 20,
        barGradientClass: "from-blue-400 via-indigo-500 to-violet-600",
        trackColorClass: "bg-blue-500/20",
        badgeColorClass: "bg-blue-500/20 text-blue-200 border border-blue-500/40",
      },
      {
        label: "Dégâts",
        currentValue: 70,
        maxValue: 100,
        bonusValue: 10,
        barGradientClass: "from-red-500 via-rose-500 to-pink-600",
        trackColorClass: "bg-red-500/20",
        badgeColorClass: "bg-red-500/20 text-red-200 border border-red-500/40",
      },
    ],
  },
];

export default function ArkDebuterArticlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Barre de progression de lecture */}
      <ReadingProgress />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Articles", href: "/article" },
            { label: "Liste de dinos apprivoisés" }
          ]}
        />

        {/* En-tête de l'article */}
        <header className="space-y-6">
          {/* Catégorie */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-400 text-xs font-semibold uppercase tracking-wide">
              {articleMeta.category}
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-black neon-glow">
            {articleMeta.title}
          </h1>

          {/* Description courte */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {articleMeta.description}
          </p>

          {/* Informations auteur / date / temps de lecture */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{articleMeta.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Publié le {articleMeta.date}</span>
              </div>
              {articleMeta.updatedAt && articleMeta.updatedAt !== articleMeta.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400">Mis à jour le {articleMeta.updatedAt}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{articleMeta.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu principal de l'article */}
        <div className="space-y-12">
          {/* Boucle sur chaque dinosaure */}
          {dinos.map((dino) => (
            <article key={dino.id} className="glassmorphic-dark rounded-2xl border border-white/10 p-6 md:p-10 space-y-8">
              {/* Image du dinosaure */}
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={dino.image}
                  alt={dino.alt}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Nom et description du dinosaure */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {dino.name}
                </h2>
                <p className="text-gray-300">
                  {dino.description}
                </p>
              </div>

              {/* Statistiques du dinosaure */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Statistiques
                </h3>
                <div className="space-y-4">
                  {dino.stats.map((stat) => {
                    const fillPercentage = (stat.currentValue / stat.maxValue) * 100;
                    return (
                      <div
                        key={`${dino.id}-${stat.label}`}
                        className="p-4 border border-white/10 rounded-xl bg-white/5"
                      >
                        <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${stat.badgeColorClass}`}
                          >
                            {stat.label}
                          </span>
                          <p className="text-gray-300 text-sm ml-auto">
                            {stat.currentValue}/{stat.maxValue} (Bonus : {stat.bonusValue})
                          </p>
                        </div>
                        <div className={`h-3 rounded-full overflow-hidden ${stat.trackColorClass}`}>
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${stat.barGradientClass} shadow-[0_0_12px_rgba(255,255,255,0.3)]`}
                            style={{ width: `${fillPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contenu connexe */}
        <RelatedContent currentContentId="article-01" limit={3} />

        {/* Bouton bas de page pour revenir à la liste */}
        <div className="flex justify-center pt-4">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Voir tous les articles
          </Link>
        </div>
      </div>
    </main>
  );
}

