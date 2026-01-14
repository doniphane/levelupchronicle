import React from 'react'

export default function BannerSlider() {
  const message = 'Bravo la chaine 3500 vues et 50 membre inscrit dans la communauté discord'

  return (
    <div className="banner-slider" role="region" aria-label="Annonce">
      <div className="banner-inner">
        <div className="banner-track" aria-hidden="false">
          {[0, 1, 2].map((i) => (
            <span key={i} className="banner-text neon-glow">
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
