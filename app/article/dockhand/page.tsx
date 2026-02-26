"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Server, Shield, Zap, Code, Check } from "lucide-react";
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
  title: "J'ai découvert Dockhand : L'interface Docker moderne pour mon serveur local",
  description:
    "Découvrez Dockhand, une interface de gestion Docker moderne, sécurisée et open-source que j'ai récemment installée sur mon serveur local. Un game-changer pour gérer mes conteneurs !",
  author: "Team Kuroizana",
  date: "2026-02-21",
  readTime: "8 min",
  category: "Guide",
};

export default function DockhandArticlePage() {
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
            { label: "Dockhand : Interface Docker Moderne" }
          ]}
        />

        {/* En-tête de l'article */}
        <header className="space-y-6">
          <div className="inline-flex px-4 py-1 rounded-full border border-cyan-600/30 bg-cyan-950/30 text-cyan-400 text-sm uppercase tracking-[0.3em]">
            {articleMeta.category}
          </div>

          <h1 className="text-4xl md:text-6xl font-black neon-glow-cyan">
            {articleMeta.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            {articleMeta.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{articleMeta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{new Date(articleMeta.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{articleMeta.readTime} de lecture</span>
            </div>
          </div>
        </header>

        {/* Image principale de l'article */}
        <ImageLightbox
          images={[
            {
              src: "/dockhand.webp",
              alt: "Interface Dockhand - Dashboard de gestion Docker"
            }
          ]}
        />

        {/* Contenu de l'article */}
        <article className="prose prose-invert prose-lg max-w-none space-y-8">

          {/* Introduction */}
          <section className="glassmorphic-dark p-8 rounded-2xl border border-cyan-600/20">
            <p className="text-lg leading-relaxed text-gray-200">
              Si comme moi vous gérez un serveur local avec Docker et que vous en avez marre de taper des commandes en ligne de commande pour gérer vos conteneurs, j'ai trouvé LA solution : <strong className="text-cyan-400">Dockhand</strong> !
            </p>
            <p className="text-lg leading-relaxed text-gray-200 mt-4">
              C'est une interface de gestion Docker ultra-moderne que j'ai récemment découverte et installée sur mon serveur. Et franchement, c'est un vrai game-changer. Laissez-moi vous expliquer pourquoi.
            </p>
          </section>

          {/* Qu'est-ce que Dockhand ? */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black neon-glow-cyan flex items-center gap-3">
              <Server className="w-8 h-8 text-cyan-400" />
              Qu'est-ce que Dockhand ?
            </h2>

            <div className="glassmorphic-dark p-6 rounded-xl border border-white/10">
              <p className="text-gray-200 leading-relaxed">
                <strong className="text-cyan-400">Dockhand</strong> est une plateforme de gestion Docker moderne, conçue aussi bien pour les passionnés de homelab que pour les entreprises. Ce qui m'a tout de suite séduit, c'est sa philosophie :
              </p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200"><strong>Zero telemetry</strong> : Aucune donnée envoyée à des serveurs externes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200"><strong>Self-hosted uniquement</strong> : Tout reste sur votre infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200"><strong>Open-source</strong> : Code transparent sous licence BSL 1.1 (qui deviendra Apache 2.0 en 2029)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Fonctionnalités principales */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black neon-glow flex items-center gap-3">
              <Zap className="w-8 h-8 text-red-400" />
              Les fonctionnalités qui m'ont conquis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gestion des conteneurs */}
              <div className="glassmorphic-dark p-6 rounded-xl border border-purple-600/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">🐳 Gestion des conteneurs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Démarrer, arrêter, redémarrer en un clic</li>
                  <li>• Terminal web interactif (plus besoin de SSH !)</li>
                  <li>• Navigateur de fichiers intégré</li>
                  <li>• Monitoring en temps réel des ressources</li>
                </ul>
              </div>

              {/* Docker Compose */}
              <div className="glassmorphic-dark p-6 rounded-xl border border-cyan-600/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">📝 Docker Compose visuel</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Éditeur visuel (fini le YAML manuel !)</li>
                  <li>• Déploiement depuis Git avec auto-sync</li>
                  <li>• Webhooks pour les déploiements automatiques</li>
                  <li>• Déploiements programmés</li>
                </ul>
              </div>

              {/* Multi-hôtes */}
              <div className="glassmorphic-dark p-6 rounded-xl border border-red-600/20">
                <h3 className="text-xl font-bold text-red-400 mb-3">🌐 Support multi-hôtes</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Connexion socket Docker local</li>
                  <li>• Connexion TCP distante avec TLS</li>
                  <li>• Agent Hawser pour traverser les NAT/firewalls</li>
                  <li>• Basculement entre environnements</li>
                </ul>
              </div>

              {/* Sécurité */}
              <div className="glassmorphic-dark p-6 rounded-xl border border-yellow-600/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">🔒 Sécurité renforcée</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Authentification OIDC/SSO (même en version gratuite !)</li>
                  <li>• Support LDAP/Active Directory</li>
                  <li>• Authentification multi-facteurs</li>
                  <li>• Scan de vulnérabilités (Grype/Trivy)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mon expérience d'installation */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black neon-glow-pink flex items-center gap-3">
              <Code className="w-8 h-8 text-pink-400" />
              Mon installation en quelques minutes
            </h2>

            <div className="glassmorphic-dark p-6 rounded-xl border border-white/10">
              <p className="text-gray-200 mb-4">
                L'installation de Dockhand est ultra-simple. Ça tourne dans Docker (ironique, non ?) et ne nécessite pratiquement aucune dépendance. Voici comment j'ai procédé :
              </p>

              <div className="bg-black/50 p-4 rounded-lg border border-cyan-600/20">
                <code className="text-cyan-400 text-sm">
                  docker run -d --name dockhand \<br />
                  &nbsp;&nbsp;-v /var/run/docker.sock:/var/run/docker.sock \<br />
                  &nbsp;&nbsp;-v dockhand-data:/data \<br />
                  &nbsp;&nbsp;-p 8080:8080 \<br />
                  &nbsp;&nbsp;dockhand/dockhand:latest
                </code>
              </div>

              <p className="text-gray-200 mt-4">
                Et c'est tout ! En quelques secondes, j'avais une interface web moderne accessible sur <code className="text-cyan-400 bg-black/50 px-2 py-1 rounded">localhost:8080</code>
              </p>
            </div>
          </section>

          {/* Ce qui change vraiment */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black neon-glow flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-400" />
              Ce qui change vraiment pour moi
            </h2>

            <div className="glassmorphic-dark p-6 rounded-xl border border-green-600/20">
              <p className="text-gray-200 mb-4">
                Avant Dockhand, gérer mes conteneurs Docker était fastidieux. Je devais me connecter en SSH, taper des commandes, vérifier les logs dans le terminal... Bref, c'était fonctionnel mais pas vraiment confortable.
              </p>

              <p className="text-gray-200 mb-4">
                Maintenant avec Dockhand :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Je vois en un coup d'œil l'état de tous mes conteneurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Je peux consulter les logs en temps réel avec une vraie interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Je gère mes stacks Docker Compose visuellement (fini le copier-coller de YAML !)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Je surveille les ressources (CPU, RAM, réseau) avec des graphiques clairs</span>
                </li>
              </ul>

              <p className="text-gray-200 mt-4 font-semibold text-lg">
                Bref, c'est comme passer d'une voiture manuelle à une automatique : ça fait le même boulot, mais c'est tellement plus agréable au quotidien ! 🚀
              </p>
            </div>
          </section>

          {/* Tarification */}
          <section className="space-y-4">
            <h2 className="text-3xl font-black neon-glow-cyan">
              💰 Gratuit ou payant ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glassmorphic-dark p-6 rounded-xl border border-cyan-600/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Free</h3>
                <p className="text-3xl font-black text-white mb-4">0€</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Gestion complète des conteneurs</li>
                  <li>✓ Intégration Git</li>
                  <li>✓ OIDC/SSO</li>
                  <li>✓ Support communautaire</li>
                </ul>
              </div>

              <div className="glassmorphic-dark p-6 rounded-xl border border-purple-600/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">SMB</h3>
                <p className="text-3xl font-black text-white mb-4">499€<span className="text-sm text-gray-400">/hôte/an</span></p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Tout le Free</li>
                  <li>✓ Licence commerciale</li>
                  <li>✓ Support premium</li>
                </ul>
              </div>

              <div className="glassmorphic-dark p-6 rounded-xl border border-red-600/30">
                <h3 className="text-xl font-bold text-red-400 mb-2">Enterprise</h3>
                <p className="text-3xl font-black text-white mb-4">1499€<span className="text-sm text-gray-400">/hôte/an</span></p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Tout le SMB</li>
                  <li>✓ LDAP/Active Directory</li>
                  <li>✓ RBAC avancé</li>
                  <li>✓ Audit logging</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 italic">
              Pour mon usage personnel sur mon serveur local, la version gratuite est largement suffisante et offre déjà toutes les fonctionnalités essentielles !
            </p>
          </section>

          {/* Conclusion */}
          <section className="glassmorphic-dark p-8 rounded-2xl border border-cyan-600/20">
            <h2 className="text-3xl font-black neon-glow mb-4">
              🎯 Mon verdict
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              <strong className="text-cyan-400">Dockhand</strong> est devenu un outil indispensable dans mon arsenal de gestion de serveur. Si vous utilisez Docker au quotidien, que ce soit pour un homelab ou pour des projets plus sérieux, je vous recommande vraiment d'essayer.
            </p>

            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              L'interface est intuitive, les fonctionnalités sont puissantes, et le fait que ce soit self-hosted avec zéro télémétrie me rassure complètement niveau confidentialité.
            </p>

            <div className="bg-cyan-950/30 border border-cyan-600/30 rounded-lg p-6 mt-6">
              <p className="text-cyan-400 font-bold text-center text-xl">
                🔗 Plus d'infos sur <a href="https://dockhand.pro/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300 transition">dockhand.pro</a>
              </p>
            </div>
          </section>

        </article>

        {/* Contenus connexes */}
        <RelatedContent currentContentId="article-dockhand" />

        {/* Bouton retour */}
        <div className="pt-8">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux articles
          </Link>
        </div>
      </div>
    </main>
  );
}
