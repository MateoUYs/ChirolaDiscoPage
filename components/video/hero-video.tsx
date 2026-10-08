"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const poster = "/media/hero/hero-entrada-poster-video.webp";
const desktopVideo = "https://media.chiroladisco.com/media/hero/hero-entrada-desktop-1080p.mp4";
const mobileVideo = "https://media.chiroladisco.com/media/hero/hero-entrada-mobile-720p.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    void video.play().then(() => setShowPlayButton(false)).catch(() => setShowPlayButton(true));
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <Image src={poster} alt="Montaje principal de Chirola Disco" fill priority className="object-cover" sizes="100vw" />
      <video
        ref={videoRef}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Video principal de Chirola Disco"
        onCanPlay={playVideo}
        onPlaying={() => setShowPlayButton(false)}
        onError={() => setShowPlayButton(true)}
      >
        <source src={mobileVideo} type="video/mp4" media="(max-width: 767px)" />
        <source src={desktopVideo} type="video/mp4" />
      </video>
      {showPlayButton ? (
        <button
          type="button"
          className="absolute bottom-5 left-5 z-20 border border-[var(--accent)] bg-black/70 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)] backdrop-blur-sm transition hover:bg-[var(--accent)] hover:text-black"
          onClick={playVideo}
        >
          Reproducir video
        </button>
      ) : null}
    </div>
  );
}
