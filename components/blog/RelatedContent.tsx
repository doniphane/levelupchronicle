"use client";

import { getRelatedContent } from "@/lib/blogData";
import ContentCard from "./ContentCard";

interface RelatedContentProps {
  currentContentId: string;
  limit?: number;
}

export default function RelatedContent({ currentContentId, limit = 3 }: RelatedContentProps) {
  const relatedContent = getRelatedContent(currentContentId, limit);

  if (relatedContent.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-white/10">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 neon-glow">
            Contenu connexe
          </h2>
          <p className="text-gray-400">
            Découvrez d'autres contenus qui pourraient vous intéresser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedContent.map((content) => (
            <ContentCard key={content.id} content={content} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}
