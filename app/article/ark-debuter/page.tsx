"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

// Interface pour typer les informations de l'article
// Ici on tape juste les métadonnées affichées en haut de la page
interface ArticleMeta {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

// On définit les informations de cet article spécifique
const articleMeta: ArticleMeta = {
  title: "Liste de tout mes dinos apprivoisés sur le serveur ASA",
  description:
    "Découvrez la liste de tous les dinos apprivoisés sur le serveur ASA avec la Team Kuroizana.",
  author: "Team Kuroizana",
  date: "2025-11-21",
  readTime: "1 min",
  category: "Bestiaire",
};

// Interface pour décrire une statistique affichée dans le tableau RPG
// Chaque stat contient un nom, une valeur actuelle, une valeur max et un bonus
interface DinoStat {
  label: string;
  currentValue: number;
  maxValue: number;
  bonusValue: number;
  barGradientClass: string;
  trackColorClass: string;
  badgeColorClass: string;
}

// Tableau qui regroupe toutes les statistiques de notre Ptéra
// Les valeurs max sont fixées à 80 pour garder une base commune entre les stats
const dinoStats: DinoStat[] = [
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
    label: "Oxygène",
    currentValue: 33,
    maxValue: 80,
    bonusValue: 0,
    barGradientClass: "from-cyan-300 via-cyan-500 to-teal-600",
    trackColorClass: "bg-cyan-500/20",
    badgeColorClass: "bg-cyan-500/20 text-cyan-200 border border-cyan-500/40",
  },
  {
    label: "Poids",
    currentValue: 37,
    maxValue: 80,
    bonusValue: 0,
    barGradientClass: "from-amber-300 via-yellow-400 to-orange-500",
    trackColorClass: "bg-yellow-500/20",
    badgeColorClass: "bg-yellow-500/20 text-yellow-200 border border-yellow-500/40",
  },
];

export default function ArkDebuterArticlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {/* Bouton de retour vers la liste des articles */}
        <Link
          href="/article"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux articles
        </Link>

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
            <div className="flex items-center gap-2 text-gray-400">
              <User className="w-5 h-5" />
              <span className="font-semibold">{articleMeta.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>{articleMeta.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>{articleMeta.readTime} de lecture</span>
            </div>
          </div>
        </header>

        {/* Contenu principal de l'article */}
        <article className="glassmorphic-dark rounded-2xl border border-white/10 p-6 md:p-10 space-y-10">
          {/* Image réelle du Ptéra importée depuis le dossier public */}
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src="/Mod_Ark_Eternal_Elemental_Ice_Pteranodon_(Wild)_Image (1).jpg"
              alt="Ptéranodon Elemental Ice posé sur la plage"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Présentation narrative du dinosaure */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Présentation du Ptéra Elemental Ice
            </h2>
        
          </section>

          {/* Tableau des statistiques façon RPG */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Statistiques actuelles mon ptéranodon Elemental Ice
            </h3>
            <div className="space-y-4">
              {dinoStats.map((stat) => {
                const fillPercentage =
                  (stat.currentValue / stat.maxValue) * 100;
                return (
                  <div
                    key={stat.label}
                    className="p-4 border border-white/10 rounded-xl bg-white/5"
                  >
                    <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${stat.badgeColorClass}`}
                      >
                        {stat.label}
                      </span>
                      <p className="text-gray-300 text-sm ml-auto">
                        {stat.currentValue}/{stat.maxValue} (Bonus :{" "}
                        {stat.bonusValue})
                      </p>
                    </div>
                    <div
                      className={`h-3 rounded-full overflow-hidden ${stat.trackColorClass}`}
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${stat.barGradientClass} shadow-[0_0_12px_rgba(255,255,255,0.3)]`}
                        style={{ width: `${fillPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </section>

        
        </article>

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


