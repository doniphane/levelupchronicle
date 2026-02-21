"use client";

import { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { ContentCategory, ContentType } from "@/lib/blogData";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterCategory: (category: ContentCategory | "all") => void;
  onFilterType: (type: ContentType | "all") => void;
  categories: ContentCategory[];
  selectedCategory: ContentCategory | "all";
  selectedType: ContentType | "all";
  hideTypeFilter?: boolean; // Masquer le filtre de type (utile pour pages spécifiques)
}

export default function SearchAndFilter({
  onSearch,
  onFilterCategory,
  onFilterType,
  categories,
  selectedCategory,
  selectedType,
  hideTypeFilter = false,
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <div className="space-y-4">
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un article, vidéo, tag..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-12 pr-12 py-4 rounded-xl glassmorphic-dark border border-white/10 focus:border-red-500/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bouton filtres mobile */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg glassmorphic-dark border border-white/10 hover:border-red-500/50 transition"
        >
          <Filter className="w-4 h-4" />
          <span>Filtres</span>
        </button>

        {/* Compteur de résultats */}
        <div className="text-sm text-gray-400 md:hidden">
          {selectedCategory !== "all" || selectedType !== "all" ? (
            <button
              onClick={() => {
                onFilterCategory("all");
                onFilterType("all");
              }}
              className="text-red-400 hover:text-red-300"
            >
              Réinitialiser les filtres
            </button>
          ) : null}
        </div>
      </div>

      {/* Filtres */}
      <div
        className={`${
          isFilterOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row gap-4`}
      >
        {/* Filtre par type */}
        {!hideTypeFilter && (
          <div className="flex-1">
            <label className="text-sm text-gray-400 mb-2 block">Type de contenu</label>
            <div className="flex gap-2">
              <button
                onClick={() => onFilterType("all")}
                className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedType === "all"
                    ? "bg-red-600/20 border-red-600/50 text-red-400"
                    : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
                }`}
              >
                Tout
              </button>
              <button
                onClick={() => onFilterType("article")}
                className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedType === "article"
                    ? "bg-red-600/20 border-red-600/50 text-red-400"
                    : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
                }`}
              >
                Articles
              </button>
              <button
                onClick={() => onFilterType("video")}
                className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedType === "video"
                    ? "bg-purple-600/20 border-purple-600/50 text-purple-400"
                    : "glassmorphic-dark border-white/10 text-gray-400 hover:border-purple-500/30"
                }`}
              >
                Vidéos
              </button>
            </div>
          </div>
        )}

        {/* Filtre par catégorie */}
        <div className="flex-1">
          <label className="text-sm text-gray-400 mb-2 block">Catégorie</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterCategory("all")}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm ${
                selectedCategory === "all"
                  ? "bg-red-600/20 border-red-600/50 text-red-400"
                  : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
              }`}
            >
              Toutes
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? "bg-red-600/20 border-red-600/50 text-red-400"
                    : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bouton reset filtres desktop */}
      {(selectedCategory !== "all" || selectedType !== "all") && (
        <div className="hidden md:block text-center">
          <button
            onClick={() => {
              onFilterCategory("all");
              onFilterType("all");
            }}
            className="text-sm text-red-400 hover:text-red-300 transition"
          >
            Réinitialiser tous les filtres
          </button>
        </div>
      )}
    </div>
  );
}
