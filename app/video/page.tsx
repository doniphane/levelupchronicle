"use client";

import Link from "next/link";
import { useState } from "react";

// Liste des vidéos avec leurs informations
const videos = [
  {
    id: "video-01",
    title: "ARK ASCENDED - ÉPISODE 3 : MUTATIONS EXTRÊMES JE TEST LES PREMIER MODS ABUSER",
    description: "découvrez le dernier épisode de la série ARK ASCENDED",
    youtubeId: "PVIFroaaQw4",
  },
  {
    id: "video-02",
    title: "ARK Survival Ascended - ÉPISODE 1 avec la Team Kuroizana - L'Aventure Commence",
    description: "découvrez le premier épisode de la série ARK ASCENDED",
    youtubeId: "zfRTYEL_g1E",
  },
  {
    id: "video-03",
    title: "ARK Survival Ascended - ÉPISODE 2: Construction de la Base Kuroizana",
    description: "découvrez le deuxième épisode de la série ARK ASCENDED",
    youtubeId: "YA52SMFTYmU",
  },
  {
    id: "video-04",
    title: "ATM10 To the Sky #1 - Skyblock dans les airs | Recap du premier live",
    description: "Premier live de la série ATM10 To the Sky",
    youtubeId: "FrcnmAvJh04",
  },
];

// Interface pour typer les props de VideoCard
// Cela permet à TypeScript de vérifier que nous passons les bonnes données
interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
  };
}

// Composant pour afficher une carte de vidéo
// Au lieu d'utiliser une iframe (qui cause des problèmes en production),
// on affiche une image thumbnail avec un bouton play
const VideoCard = ({ video }: VideoCardProps) => {
  // État pour savoir si l'utilisateur survole la vidéo
  // useState est un hook React qui permet de stocker une valeur qui peut changer
  const [isHovered, setIsHovered] = useState(false);

  // URL de l'image thumbnail YouTube
  // YouTube fournit automatiquement des images pour chaque vidéo
  // On utilise la qualité "maxresdefault" pour avoir la meilleure qualité
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  // URL complète de la vidéo sur YouTube
  // On ouvre cette URL dans un nouvel onglet quand l'utilisateur clique
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div className="glassmorphic-dark rounded-2xl overflow-hidden border border-white/10">
      {/* Conteneur pour l'image et le bouton play */}
      <div
        className="aspect-video relative group cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(youtubeUrl, "_blank")}
      >
        {/* Image thumbnail de la vidéo */}
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay sombre qui apparaît au survol */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bouton play au centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`bg-red-600/90 rounded-full p-4 transition-all duration-300 ${
              isHovered
                ? "scale-110 opacity-100"
                : "scale-100 opacity-80"
            }`}
          >
            {/* Icône play (triangle) */}
            <svg
              className="w-12 h-12 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Texte "Regarder sur YouTube" qui apparaît au survol */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Regarder sur YouTube
        </div>
      </div>

      {/* Informations de la vidéo */}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{video.title}</h3>
        <p className="text-gray-400 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <header className="text-center space-y-6">
          <p className="inline-flex px-4 py-1 rounded-full border border-red-600/30 text-red-400 text-sm uppercase tracking-[0.3em]">
            Vidéos
          </p>
          <h1 className="text-4xl md:text-6xl font-black neon-glow">
            Les meilleurs moments de la Team Kuroizana
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Retrouvez toutes les vidéos de la Team Kuroizana ainsi que des défis et des raids de la communauté.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition"
          >
            ← Retour à l'accueil
          </Link>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </section>
      </div>
    </main>
  );
}

