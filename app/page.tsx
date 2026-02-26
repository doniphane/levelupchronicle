"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Youtube,
  MessageCircle,
  Cpu,
  MemoryStick,
  HardDrive,
  ChevronRight,
  Activity,
} from "lucide-react";
// Icône simple pour Bluesky
function BlueskyIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="32" height="32" rx="6" fill="#00AFFF" />
      <path
        d="M9 19c2-1 3-2 4-2 1 0 1 .5 1 1s0 1 1 1c1 0 2-1 4-2 0 0-4 6-9 6-1 0-1-2-1-4 0-1 1-1 0-0z"
        fill="white"
        opacity="0.95"
      />
    </svg>
  );
}
import { getLatestContent, getLatestArticles } from "@/lib/blogData";
import ContentCard from "@/components/blog/ContentCard";
import Navbar from "@/components/Navbar";

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
    handle: "@Noelson974",
    href: "https://www.youtube.com/@noelson9749",
    icon: Youtube,
    accent: "text-red-400",
    border: "border-red-600/40",
  },
  {
    id: "bluesky",
    label: "Bluesky",
    handle: "@Noelson974",
    href: "https://bsky.app/profile/noelson974.bsky.social",
    icon: BlueskyIcon,
    accent: "text-sky-500",
    border: "border-sky-500/40",
  },
  
];


const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/2025-12-15 18-23-06.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="space-y-8 max-w-5xl">
          {/* Badge animé */}
          <div className="animate-scale-in opacity-0 animation-delay-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-sm text-red-400 text-sm font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4 animate-pulse" />
              En Direct - Gaming & Fun
            </span>
          </div>

          {/* Titre principal avec effet glitch */}
          <div className="animate-slide-left opacity-0 animation-delay-2">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 neon-glow text-white animate-glitch">
              Team Kuroizana
            </h1>
          </div>

          {/* Sous-titre */}
          <div className="animate-slide-right opacity-0 animation-delay-3">
            <p className="text-xl md:text-3xl mb-6 text-gray-200 max-w-3xl mx-auto font-semibold leading-relaxed">
              Découvrez les moments <span className="text-red-400 neon-glow">épiques</span> du gaming,<br className="hidden md:block" />
              les meilleurs clips de la Team Kuroizana
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="animate-scale-in opacity-0 animation-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/video"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 animate-pulse-glow"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Voir les vidéos
            </a>
            <a
              href="/article"
              className="inline-flex items-center gap-2 px-8 py-4 glassmorphic-dark rounded-xl font-bold text-lg transition-all duration-300 hover:border-red-500/50 hover:bg-red-950/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Lire les articles
            </a>
          </div>

          {/* Mots-clés ambiance */}
          <div className="animate-fade-in opacity-0 animation-delay-4 flex flex-wrap justify-center gap-4 mt-12">
            <div className="glassmorphic-dark px-8 py-4 rounded-full animate-float border border-red-500/20">
              <div className="text-lg md:text-xl font-black text-red-400 neon-glow uppercase tracking-wide">Bonne Humeur</div>
            </div>
            <div className="glassmorphic-dark px-8 py-4 rounded-full animate-float border border-purple-500/20" style={{animationDelay: "0.5s"}}>
              <div className="text-lg md:text-xl font-black text-purple-400 neon-glow-pink uppercase tracking-wide">Fun</div>
            </div>
            <div className="glassmorphic-dark px-8 py-4 rounded-full animate-float border border-cyan-500/20" style={{animationDelay: "1s"}}>
              <div className="text-lg md:text-xl font-black text-cyan-400 neon-glow-cyan uppercase tracking-wide">Communauté</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animation-delay-4">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </section>
  );
};


// Section pour afficher les derniers contenus (articles + vidéos mélangés)
const LatestContentSection = () => {
  const latestContent = getLatestContent(6);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-flex px-3 md:px-4 py-1 rounded-full border border-red-600/30 text-red-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4">
            Derniers Contenus
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 neon-glow px-4">
            Nouveautés du Blog
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Découvrez nos derniers articles et vidéos sur les aventures gaming de la Team Kuroizana
          </p>
        </div>

        {/* Grille de contenus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestContent.map((content) => (
            <ContentCard key={content.id} content={content} layout="grid" />
          ))}
        </div>

        {/* Liens vers les pages complètes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glassmorphic-dark border border-red-600/30 text-red-400 hover:border-red-500/50 hover:text-red-300 transition font-semibold"
          >
            Tous les articles
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/video"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glassmorphic-dark border border-purple-600/30 text-purple-400 hover:border-purple-500/50 hover:text-purple-300 transition font-semibold"
          >
            Toutes les vidéos
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ServerConfigSection removed */

// Section pour afficher les derniers articles uniquement
const LatestArticlesSection = () => {
  const latestArticles = getLatestArticles(3);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-600/20">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-flex px-3 md:px-4 py-1 rounded-full border border-purple-600/30 text-purple-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4">
            Derniers Articles
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 neon-glow-pink px-4">
            À Lire Absolument
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Plongez dans nos récits, guides et actualités rédigés par la Team Kuroizana
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ContentCard key={article.id} content={article} layout="grid" />
          ))}
        </div>

        {/* Lien vers tous les articles */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            href="/article"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Découvrir tous les articles
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/gamepad-logo.svg"
                alt="Team Kuroizana Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-bold neon-glow">Team Kuroizana</span>
          </div>

          <p className="text-gray-500 text-center text-sm">
            © 2026 Team Kuroizana. Tous les droits réservés.
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
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <Navbar />
      <HeroSection />
      <LatestContentSection />
      <LatestArticlesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

