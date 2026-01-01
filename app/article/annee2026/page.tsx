"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedContent from "@/components/blog/RelatedContent";
import Breadcrumb from "@/components/blog/Breadcrumb";
// Nous utilisons une seule grande image pour les vœux

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


// On définit les informations de cet article spécifique (Vœux)
const articleMeta: ArticleMeta = {
  title: "Bonne année 2026 — Merci pour 2025 !",
  description:
    "La Team Kuroizana vous souhaite une excellente fin d'année 2025 et une merveilleuse année 2026. Merci pour votre soutien !",
  author: "Team Kuroizana",
  date: "2025-12-31",
  readTime: "2 min",
  category: "Annonce",
};


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
            { label: "Bonne année 2026 — Vœux" }
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
        <article className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* Vœux de fin d'année */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-red-400">Bonne fin d'année 2025 — Meilleurs vœux pour 2026</h2>
            <p className="text-gray-300 leading-relaxed">
              Toute la Team Kuroizana vous remercie chaleureusement pour votre soutien en 2025. Nous vous souhaitons
              une excellente fin d'année et une année 2026 pleine de réussite, de joie et de belles parties.
            </p>

            {/* Une seule grande image */}
            <div className="w-full">
              <img
                src="/minuature4.png"
                alt="Moments de la Team - Photo"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Restez connectés — de nouveaux projets et livestreams vous attendent en 2026. Merci d'être avec nous !
            </p>
          </section>

         
        

          {/* Conclusion */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-red-400">Nos vœux</h2>
            <p className="text-gray-300 leading-relaxed">
              Encore une fois, un grand merci pour votre soutien tout au long de 2025. Toute la Team Kuroizana vous
              souhaite une merveilleuse année 2026 — pleine de santé, de succès et de fun en jeu. On se retrouve très
              vite pour de nouveaux projets et streams !
            </p>

            <div className="bg-gradient-to-r from-red-900/30 to-green-900/30 border border-red-600/30 rounded-lg p-6 mt-6">
              <p className="text-center text-gray-300 font-semibold">
                💚 Suivez nos lives et événements en 2026 — on vous attend nombreux ! 💚
              </p>
            </div>
          </section>
        </article>

        {/* Contenu connexe */}
        <RelatedContent currentContentId="article-04" limit={3} />

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

