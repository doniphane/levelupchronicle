"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedContent from "@/components/blog/RelatedContent";
import Breadcrumb from "@/components/blog/Breadcrumb";
import ImageLightbox from "@/components/blog/ImageLightbox";
import Navbar from "@/components/Navbar";

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


// On définit les informations de cet article spécifique
const articleMeta: ArticleMeta = {
  title: "Farming Simulator 25 : La Team Construit l'enclos de vache et Achat du nouveaux terrain pour les haricots verts",
  description:
    "Découvrez comment la Team Kuroizana construit un enclos pour les vaches et achète un nouveau terrain pour cultiver des haricots verts dans Farming Simulator 25.",
  author: "Team Kuroizana",
  date: "2025-12-15",
  readTime: "5 min",
  category: "Recap",
};


export default function ArkDebuterArticlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Navigation */}
      <Navbar />

      {/* Barre de progression de lecture */}
      <ReadingProgress />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Articles", href: "/article" },
            { label: "Farming Simulator 25 : Construction et Expansion" }
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
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-red-400">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Dans ce nouvel épisode de Farming Simulator 25, la Team Kuroizana s'attaque à deux projets majeurs :
              la construction d'un enclos moderne pour accueillir nos vaches laitières et l'acquisition d'un nouveau
              terrain destiné à la culture intensive de haricots verts. Découvrez comment nous avons planifié et
              réalisé ces améliorations cruciales pour notre exploitation agricole.
            </p>
          </section>

          {/* Construction de l'enclos */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-red-400">Construction de l'Enclos à Vaches</h2>
            <p className="text-gray-300 leading-relaxed">
              Notre premier objectif était de construire un enclos spacieux et fonctionnel pour nos vaches.
              La planification était essentielle pour optimiser l'espace et faciliter les opérations quotidiennes.
            </p>

            {/* Images de l'enclos */}
            <ImageLightbox
              images={[
                {
                  src: "/20251215170134_1.webp",
                  alt: "Construction de l'enclos - Vue 1"
                },
                {
                  src: "/20251215170206_1.webp",
                  alt: "Construction de l'enclos - Vue 2"
                }
              ]}
            />

            

            <p className="text-gray-300 leading-relaxed">
              L'enclos a été conçu pour accueillir jusqu'à 50 vaches.
            </p>
          </section>

          {/* Acquisition du terrain */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-red-400">Achat du Terrain pour les Haricots Verts</h2>
            <p className="text-gray-300 leading-relaxed">
              Après avoir analysé les opportunités d'expansion, nous avons décidé d'investir dans un nouveau terrain
              dédié exclusivement à la culture de haricots verts. Cette culture à haute valeur ajoutée représente
              une excellente opportunité de diversification.
            </p>

            
          </section>

         
        

          {/* Conclusion */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-red-400">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Ces deux projets marquent une étape importante dans le développement de notre exploitation.
              L'enclos à vaches va améliorer nos capacités de production laitière, tandis que le nouveau terrain
              de haricots verts diversifiera nos sources de revenus. Restez connectés pour suivre l'évolution
              de ces projets dans les prochains épisodes !
            </p>

            <div className="bg-gradient-to-r from-red-900/30 to-green-900/30 border border-red-600/30 rounded-lg p-6 mt-6">
              <p className="text-center text-gray-300 font-semibold">
                💚 Rejoignez-nous sur nos lives pour suivre l'aventure en direct ! 💚
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

