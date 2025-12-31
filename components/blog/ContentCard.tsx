"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, User, Play, Eye } from "lucide-react";
import { BlogContent } from "@/lib/blogData";

interface ContentCardProps {
  content: BlogContent;
  layout?: "grid" | "list";
}

export default function ContentCard({ content, layout = "grid" }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isVideo = content.type === "video";

  // Pour les vidéos, on affiche la miniature fournie dans `content.thumbnail` si elle existe,
  // sinon on retombe sur la thumbnail YouTube (si `youtubeId` présent).
  const thumbnailUrl = content.thumbnail
    ? content.thumbnail
    : isVideo && content.youtubeId
    ? `https://img.youtube.com/vi/${content.youtubeId}/maxresdefault.jpg`
    : null;

  // URL YouTube pour les vidéos
  const youtubeUrl = isVideo && content.youtubeId
    ? `https://www.youtube.com/watch?v=${content.youtubeId}`
    : null;

  // Gestionnaire de clic pour les vidéos
  const handleClick = (e: React.MouseEvent) => {
    if (isVideo && youtubeUrl) {
      e.preventDefault();
      window.open(youtubeUrl, "_blank");
    }
  };

  if (layout === "list") {
    return (
      <Link href={content.href} onClick={handleClick}>
        <div
          className="glassmorphic-dark rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail pour les vidéos */}
          {thumbnailUrl && (
            <div className="relative w-full sm:w-64 aspect-video sm:aspect-auto shrink-0 overflow-hidden group">
              <img
                src={thumbnailUrl}
                alt={content.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div
                  className={`bg-red-600/90 rounded-full p-3 transition-all duration-300 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                >
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>
          )}

          {/* Contenu de la carte */}
          <div className="p-5 flex-1 space-y-3">
            {/* Type et Catégorie */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                  isVideo
                    ? "bg-purple-600/20 border border-purple-600/50 text-purple-400"
                    : "bg-red-600/20 border border-red-600/50 text-red-400"
                }`}
              >
                {isVideo ? "Vidéo" : "Article"}
              </span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold">
                {content.category}
              </span>
            </div>

            {/* Titre */}
            <h3
              className={`text-lg font-bold transition-colors duration-300 line-clamp-2 ${
                isHovered ? "text-red-400" : "text-white"
              }`}
            >
              {content.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {content.description}
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="flex items-center gap-1 text-gray-400">
                <User className="w-3 h-3" />
                <span>{content.author}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{content.date}</span>
              </div>
              {content.readTime && (
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{content.readTime}</span>
                </div>
              )}
              {content.views && (
                <div className="flex items-center gap-1 text-gray-400">
                  <Eye className="w-3 h-3" />
                  <span>{content.views.toLocaleString()} vues</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Layout grille (par défaut)
  return (
    <Link href={content.href} onClick={handleClick}>
      <div
        className="glassmorphic-dark rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail pour les vidéos */}
        {thumbnailUrl && (
          <div className="aspect-video relative overflow-hidden group">
            <img
              src={thumbnailUrl}
              alt={content.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`bg-red-600/90 rounded-full p-4 transition-all duration-300 ${
                  isHovered ? "scale-110 opacity-100" : "scale-100 opacity-80"
                }`}
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        )}

        {/* Contenu de la carte */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Type et Catégorie */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                isVideo
                  ? "bg-purple-600/20 border border-purple-600/50 text-purple-400"
                  : "bg-red-600/20 border border-red-600/50 text-red-400"
              }`}
            >
              {isVideo ? "Vidéo" : "Article"}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold">
              {content.category}
            </span>
          </div>

          {/* Titre */}
          <h3
            className={`text-xl font-bold transition-colors duration-300 line-clamp-2 ${
              isHovered ? "text-red-400" : "text-white"
            }`}
          >
            {content.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
            {content.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <User className="w-4 h-4" />
              <span>{content.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>
                {content.updatedAt ? (
                  <>
                    <span className="line-through text-gray-500">{content.date}</span>
                    <span className="text-amber-400 ml-1" title="Mis à jour">
                      → {content.updatedAt}
                    </span>
                  </>
                ) : (
                  content.date
                )}
              </span>
            </div>
            {content.readTime && (
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{content.readTime}</span>
              </div>
            )}
            {content.views && (
              <div className="flex items-center gap-2 text-gray-400">
                <Eye className="w-4 h-4" />
                <span>{content.views.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
