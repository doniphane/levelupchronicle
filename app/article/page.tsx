"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { articles, getUniqueCategories, ContentCategory, ContentType, searchContent, filterByCategory, filterByType } from "@/lib/blogData";
import ContentCard from "@/components/blog/ContentCard";
import SearchAndFilter from "@/components/blog/SearchAndFilter";
import Breadcrumb from "@/components/blog/Breadcrumb";
import { LayoutGrid, List } from "lucide-react";

export default function ArticlePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | "all">("all");
  const [selectedType, setSelectedType] = useState<ContentType | "all">("article");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const categories = getUniqueCategories();

  // Filtrage et recherche des articles
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Filtrer par type
    if (selectedType !== "all") {
      result = result.filter(item => item.type === selectedType);
    }

    // Filtrer par catégorie
    if (selectedCategory !== "all") {
      result = filterByCategory(selectedCategory, result);
    }

    // Recherche
    if (searchQuery.trim()) {
      result = searchContent(searchQuery, result);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Articles" }]} />

        {/* En-tête de la page */}
        <header className="text-center space-y-6">
          <p className="inline-flex px-4 py-1 rounded-full border border-red-600/30 text-red-400 text-sm uppercase tracking-[0.3em]">
            Articles
          </p>

          <h1 className="text-4xl md:text-6xl font-black neon-glow">
            Articles et Guides
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez nos articles, guides et récits sur les aventures de la Team Kuroizana et de la communauté.
          </p>
        </header>

        {/* Barre de recherche et filtres */}
        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilterCategory={setSelectedCategory}
          onFilterType={setSelectedType}
          categories={categories}
          selectedCategory={selectedCategory}
          selectedType={selectedType}
        />

        {/* Barre d'outils */}
        <div className="flex items-center justify-between">
          <p className="text-gray-400">
            {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""} trouvé{filteredArticles.length > 1 ? "s" : ""}
          </p>

          {/* Sélecteur de mise en page */}
          <div className="flex gap-2">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-lg border transition-all ${
                layout === "grid"
                  ? "bg-red-600/20 border-red-600/50 text-red-400"
                  : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
              }`}
              title="Vue grille"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2 rounded-lg border transition-all ${
                layout === "list"
                  ? "bg-red-600/20 border-red-600/50 text-red-400"
                  : "glassmorphic-dark border-white/10 text-gray-400 hover:border-red-500/30"
              }`}
              title="Vue liste"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section des articles */}
        {filteredArticles.length > 0 ? (
          <section
            className={
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredArticles.map((article) => (
              <ContentCard key={article.id} content={article} layout={layout} />
            ))}
          </section>
        ) : (
          <div className="text-center py-16">
            <div className="glassmorphic-dark rounded-2xl p-12 border border-white/10">
              <p className="text-gray-400 text-lg mb-4">
                Aucun article ne correspond à votre recherche.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedType("article");
                }}
                className="text-red-400 hover:text-red-300 transition"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

