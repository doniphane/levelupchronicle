"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Play,
  Youtube,
  Twitter,
  MessageCircle,
  Cpu,
  MemoryStick,
  HardDrive,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";

const serverSpecs = [
  {
    id: "cpu",
    label: "CPU Haute Fréquence",
    description: "AMD EPYC 3.4 GHz",
    total: 24,
    used: 17,
    unit: "cœurs",
    icon: Cpu,
    gradient: "from-red-500 via-red-600 to-pink-500",
    barColor: "from-red-500 via-orange-500 to-yellow-400",
  },
  {
    id: "ram",
    label: "Mémoire Vive",
    description: "DDR5 ECC 4800 MHz",
    total: 64,
    used: 36,
    unit: "Go RAM",
    icon: MemoryStick,
    gradient: "from-purple-500 via-fuchsia-500 to-cyan-400",
    barColor: "from-purple-500 via-pink-500 to-rose-400",
    breakdown: [
      {
        label: "Minecraft",
        value: 16,
        hex: "#22c55e",
        dotClass: "bg-emerald-400",
      },
      {
        label: "ARK: Survival",
        value: 20,
        hex: "#f97316",
        dotClass: "bg-orange-400",
      },
    ],
  },
  {
    id: "storage",
    label: "Stockage NVMe",
    description: "SSD Gen4 ultra-rapide",
    total: 300,
    used: 180,
    unit: "Go SSD",
    icon: HardDrive,
    gradient: "from-cyan-500 via-blue-500 to-emerald-400",
    barColor: "from-cyan-500 via-teal-400 to-emerald-400",
  },
];

const socialLinks = [
  {
    id: "youtube",
    label: "YouTube",
    handle: "@TeamKuroizana",
    href: "https://youtube.com",
    icon: Youtube,
    accent: "text-red-400",
    border: "border-red-600/40",
  },
  {
    id: "twitter",
    label: "Twitter / X",
    handle: "@LevelUpChroni",
    href: "https://twitter.com/",
    icon: Twitter,
    accent: "text-sky-400",
    border: "border-sky-500/40",
  },
  {
    id: "discord",
    label: "Discord",
    handle: "Team Kuroizana",
    href: "#",
    icon: MessageCircle,
    accent: "text-purple-400",
    border: "border-purple-500/40",
  },
];

// Liste de toutes les vidéos disponibles
const allVideos = [
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

// Fonction pour trier les vidéos par ID en ordre décroissant
// On extrait le numéro de l'ID (par exemple "04" de "video-04") et on compare
const sortVideosByDescendingId = (videos: typeof allVideos) => {
  return [...videos].sort((a, b) => {
    // On extrait le numéro de chaque ID (par exemple "04" de "video-04")
    const numA = parseInt(a.id.replace("video-", ""), 10);
    const numB = parseInt(b.id.replace("video-", ""), 10);
    // On trie en ordre décroissant (les plus grands nombres en premier)
    return numB - numA;
  });
};

// On trie toutes les vidéos par ID décroissant, puis on prend les 3 premières
// Cela donnera : video-04, video-03, video-02 (les IDs les plus grands en premier)
const latestVideos = sortVideosByDescendingId(allVideos).slice(0, 3);

// Interface pour typer les props de Navbar
interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphic" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-bold neon-glow">
              Team Kuroizana
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-red-500 transition">
              Accueil
            </a>
            <a href="#server" className="hover:text-red-500 transition">
              Serveur
            </a>
            <a href="#about" className="hover:text-red-500 transition">
              À propos
            </a>
            <a href="/article" className="hover:text-red-500 transition">
              Articles
            </a>
            <a href="/video" className="hover:text-red-500 transition">
              Vidéos
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block hover:text-red-500 transition">
              Accueil
            </a>
            <a href="#server" className="block hover:text-red-500 transition">
              Serveur
            </a>
            <a href="#about" className="block hover:text-red-500 transition">
              À propos
            </a>
            <a href="/article" className="block hover:text-red-500 transition">
              Articles
            </a>
            <a href="/video" className="block hover:text-red-500 transition">
              Vidéos
            </a>
            <a href="#contact" className="block hover:text-red-500 transition">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/intro%20.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 neon-glow">
          Team Kuroizana
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Découvrez les moments épiques du gaming, les meilleurs clips et les
            stratégies gagnantes
          </p>
          <a
            href="#server"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          >
            Voir la configuration
          </a>
        </div>
      </div>
    </section>
  );
};

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

// Composant pour afficher une carte de vidéo dans le slider
// On réutilise la même structure que dans la page vidéo
const VideoCard = ({ video }: VideoCardProps) => {
  // État pour savoir si l'utilisateur survole la vidéo
  const [isHovered, setIsHovered] = useState(false);

  // URL de l'image thumbnail YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  // URL complète de la vidéo sur YouTube
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div className="glassmorphic-dark rounded-xl md:rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 w-full">
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

        {/* Bouton play au centre - taille adaptative */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`bg-red-600/90 rounded-full p-3 md:p-4 transition-all duration-300 ${
              isHovered
                ? "scale-110 opacity-100"
                : "scale-100 opacity-80"
            }`}
          >
            {/* Icône play (triangle) - taille adaptative */}
            <svg
              className="w-8 h-8 md:w-12 md:h-12 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Texte "Regarder sur YouTube" qui apparaît au survol - masqué sur mobile */}
        <div
          className={`absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm font-semibold transition-opacity duration-300 hidden md:block ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Regarder sur YouTube
        </div>
      </div>

      {/* Informations de la vidéo - padding adaptatif */}
      <div className="p-4 md:p-6 space-y-2">
        <h3 className="text-base md:text-xl font-semibold line-clamp-2">{video.title}</h3>
        <p className="text-gray-400 text-xs md:text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

// Section slider pour afficher les 3 dernières vidéos
const LatestVideosSection = () => {
  // État pour savoir quelle vidéo est actuellement affichée dans le slider
  // currentIndex commence à 0 (première vidéo)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à la vidéo précédente
  const goToPrevious = () => {
    // Si on est à la première vidéo (index 0), on va à la dernière
    if (currentIndex === 0) {
      setCurrentIndex(latestVideos.length - 1);
    } else {
      // Sinon, on diminue l'index de 1
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Fonction pour aller à la vidéo suivante
  const goToNext = () => {
    // Si on est à la dernière vidéo, on revient à la première
    if (currentIndex === latestVideos.length - 1) {
      setCurrentIndex(0);
    } else {
      // Sinon, on augmente l'index de 1
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fonction pour aller directement à une vidéo spécifique
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-flex px-3 md:px-4 py-1 rounded-full border border-red-600/30 text-red-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4">
            Dernières Vidéos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 neon-glow px-4">
            Nos dernières sorties
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Découvrez les 3 dernières vidéos publiées sur notre chaîne YouTube
          </p>
        </div>

        {/* Conteneur du slider */}
        <div className="relative">
          {/* Bouton précédent - masqué sur très petits écrans, plus petit sur mobile */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/10 hover:border-red-500/50"
            aria-label="Vidéo précédente"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          {/* Conteneur des vidéos avec overflow caché - marges adaptatives */}
          <div className="overflow-hidden mx-8 sm:mx-12 md:mx-16">
            {/* Conteneur qui se déplace horizontalement */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* On affiche chaque vidéo - padding réduit sur mobile */}
              {latestVideos.map((video) => (
                <div key={video.id} className="w-full px-2 sm:px-4 flex-shrink-0">
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton suivant - masqué sur très petits écrans, plus petit sur mobile */}
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/10 hover:border-red-500/50"
            aria-label="Vidéo suivante"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        {/* Indicateurs de position (points en bas) */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {latestVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-6 md:w-8 h-2 bg-red-600"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Aller à la vidéo ${index + 1}`}
            />
          ))}
        </div>

        {/* Lien vers la page complète des vidéos */}
        <div className="text-center mt-6 md:mt-8">
          <Link
            href="/video"
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition font-semibold text-sm md:text-base"
          >
            Voir toutes les vidéos
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServerConfigSection = () => {
  return (
    <section
      id="server"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-red-600/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 rounded-[32px] blur opacity-60 group-hover:opacity-90 transition"></div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40">
            <img
              src="/1.jpg"
              alt="Serveur VPS hautes performances"
              className="w-full  object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30"></div>
            <div className="absolute bottom-6 left-6 right-6 space-y-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                  Infra temps réel
                </p>
              </div>
              <p className="text-2xl font-bold">Serveur de la communauté</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                  Datacenter Paris
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                  Tier IV
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 backdrop-blur-sm text-green-400">
                  <CheckCircle2 className="w-3 h-3 inline mr-1" />
                  En ligne
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">
              Configuration Serveur
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
              Nos performances
            </h2>
            <p className="text-gray-300 text-lg">
              Un serveur taillé sur mesure pour tamer vos dinos, construire vos
              mondes bloc par bloc, et dézinguer des hordes de zombies en toute
              tranquillité.
              <br />
              Pendant que vous jouez, infra tourne comme une machine de guerre
              pour la communauté.
            </p>
          </div>

          {/* Carte de statut améliorée avec animations */}
          <div className="glassmorphic-dark border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Statut
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-white">Opérationnel</p>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <p className="text-gray-400">Latence</p>
                  </div>
                  <p className="text-white font-semibold text-lg">5 ms</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <Activity className="w-4 h-4 text-green-400" />
                    <p className="text-gray-400">Uptime</p>
                  </div>
                  <p className="text-white font-semibold text-lg">99.98%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {serverSpecs.map((spec) => {
              const Icon = spec.icon;
              const percentage = Math.round((spec.used / spec.total) * 100);
              const hasBreakdown =
                Array.isArray(spec.breakdown) && spec.breakdown.length > 0;
              let breakdownGradient = "";

              if (hasBreakdown && spec.breakdown) {
                let cumulative = 0;
                breakdownGradient = spec.breakdown
                  .map((item) => {
                    const start = (cumulative / spec.used) * 100;
                    cumulative += item.value;
                    const end = (cumulative / spec.used) * 100;
                    return `${item.hex} ${start}% ${end}%`;
                  })
                  .join(", ");
              }

              return (
                <div
                  key={spec.id}
                  className="glassmorphic-dark border border-white/5 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center shadow-lg shadow-black/40`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-400">
                        {spec.label}
                      </p>
                      <p className="text-xl font-bold text-white">
                        {spec.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>
                      {spec.used} / {spec.total} {spec.unit}
                    </span>
                    <span>{percentage}%</span>
                  </div>

                  <div className="relative group/ram">
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden relative">
                      {hasBreakdown ? (
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${percentage}%`,
                            backgroundImage: `linear-gradient(90deg, ${breakdownGradient})`,
                            boxShadow: `0 0 10px rgba(220, 38, 38, 0.3)`,
                            animation: `progress 1.5s ease-out forwards`,
                          }}
                        ></div>
                      ) : (
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${spec.barColor} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${percentage}%`,
                            boxShadow: `0 0 10px rgba(220, 38, 38, 0.3)`,
                            animation: `progress 1.5s ease-out forwards`,
                          }}
                        ></div>
                      )}
                      {/* Effet de brillance animé */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-full pointer-events-none"></div>
                    </div>

                    {hasBreakdown && spec.breakdown && (
                      <div className="absolute -top-32 left-0 md:left-1/2 md:-translate-x-1/2 w-64 glassmorphic-dark border border-white/10 rounded-xl p-4 opacity-0 pointer-events-none group-hover/ram:opacity-100 group-hover/ram:pointer-events-auto transition duration-300">
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                          Applications
                        </p>
                        <div className="space-y-2">
                          {spec.breakdown.map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${item.dotClass}`}
                                ></span>
                                <span>{item.label}</span>
                              </div>
                              <span className="text-gray-300 font-semibold">
                                {item.value} Go
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-red-600/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 neon-glow">
              À Propos
            </h2>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Ici, la Team Kuroizana vous fait découvrir tous les gameplays que
              nous partageons avec la communauté : sessions fun entre amis,
              aventures en solo, défis improvisés et moments totalement
              imprévus. Le tout dans la joie, la bonne humeur et une dose de
              folie comme on les aime !
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Nous vous proposons des vidéos à regarder, des articles à
              parcourir et des récits pour suivre nos aventures sur les serveurs
              de la communauté. Que vous soyez là pour vibrer, rire ou
              simplement découvrir notre univers, bienvenue dans la famille
              Kuroizana.
            </p>
          </div>

        <div className="glassmorphic-dark p-8 rounded-xl">
  <div className="space-y-6">

    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-600/50">
        <Play className="text-red-500" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Gameplay & Contenu Exclusif</h3>
        <p className="text-gray-400">
          Des vidéos et moments uniques issus des aventures de la Team Kuroizana.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-600/50">
        <MessageCircle className="text-purple-400" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Communauté Kuroizana</h3>
        <p className="text-gray-400">
          Partage, entraide et bonne humeur : rejoignez nos joueurs et vivez l'aventure avec nous.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-600/50">
        <Youtube className="text-cyan-400" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">Mises à Jour Régulières</h3>
        <p className="text-gray-400">
          Nouveaux clips, nouveaux articles et nouvelles aventures publiés fréquemment.
        </p>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-red-600/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
            Contact
          </h2>
          <p className="text-gray-400 text-lg">
            Connectez-vous avec nous sur les réseaux sociaux
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glassmorphic-dark border ${social.border} rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Icon className={`w-6 h-6 ${social.accent}`} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    {social.label}
                  </p>
                  <p className="text-xl font-semibold">{social.handle}</p>
                  <span className="text-gray-500 text-sm">Cliquer pour rejoindre</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-red-600/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg"></div>
            <span className="font-bold">LevelUp Chronicle</span>
          </div>

          <p className="text-gray-500 text-center text-sm">
            © 2025 LevelUp Chronicle. Tous les droits réservés.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-red-500 transition text-sm"
            >
              Conditions
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-500 transition text-sm"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeroSection />
      <LatestVideosSection />
      <ServerConfigSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

