"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: ImageData[];
  className?: string;
}

export default function ImageLightbox({ images, className = "" }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <>
      {/* Grille d'images miniatures */}
      <div className={`grid md:grid-cols-2 gap-4 my-6 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden border border-red-600/30 cursor-pointer group transition-all duration-300 hover:border-red-600/60 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay avec icône de zoom */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-red-600/80 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Bouton de fermeture */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-red-600/80 hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            aria-label="Fermer"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Bouton précédent */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 p-2 rounded-full bg-red-600/80 hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Bouton suivant */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 p-2 rounded-full bg-red-600/80 hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image en grand */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Compteur d'images */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-red-600/80 text-white text-sm font-semibold">
              {selectedIndex + 1} / {images.length}
            </div>
          )}

          {/* Légende de l'image */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 max-w-2xl px-4 py-2 rounded-lg bg-black/60 text-white text-center text-sm">
            {images[selectedIndex].alt}
          </div>
        </div>
      )}
    </>
  );
}
