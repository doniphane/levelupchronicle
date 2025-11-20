"use client";

import Link from "next/link";

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
 
];

const VideoCard = ({ video }) => {
  return (
    <div className="glassmorphic-dark rounded-2xl overflow-hidden border border-white/10">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
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
