"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { VideoSource } from "@/types/media";

type AdaptiveVideoProps = {
  src: string;
  sources?: VideoSource[];
  poster?: string;
  className?: string;
  label: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  priority?: boolean;
  pauseWhenHidden?: boolean;
  showFallbackText?: boolean;
  fit?: "cover" | "contain";
};

export function AdaptiveVideo({
  src,
  sources,
  poster,
  className,
  label,
  autoPlay = true,
  loop = true,
  muted = true,
  priority = false,
  pauseWhenHidden = true,
  showFallbackText = true,
  fit = "cover",
}: AdaptiveVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausingFromObserverRef = useRef(false);
  const [wrapperNode, setWrapperNode] = useState<HTMLDivElement | null>(null);
  const [activeSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [autoplayRejected, setAutoplayRejected] = useState(false);
  const mediaFitClass = fit === "contain" ? "object-contain" : "object-cover";

  const setWrapperRef = useCallback((node: HTMLDivElement | null) => {
    wrapperRef.current = node;
    setWrapperNode(node);
  }, []);

  const resolveSource = useCallback(() => {
    if (!sources?.length || typeof window === "undefined") return src;
    return sources.find((source) => !source.media || window.matchMedia(source.media).matches)?.src ?? src;
  }, [sources, src]);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    void video
      .play()
      .then(() => {
        setAutoplayRejected(false);
      })
      .catch((error: unknown) => {
        console.warn("Chirola video play() failed", { src, label, error });
        setAutoplayRejected(true);
      });
  }, [autoPlay, label, src]);

  const playFromFallback = () => {
    playVideo();
  };

  useEffect(() => {
    if (!wrapperNode) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      videoRef.current?.pause();
      return;
    }

    if (priority) window.requestAnimationFrame(playVideo);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const visible = entry.isIntersecting && entry.intersectionRatio > 0;
        if (visible) {
          window.requestAnimationFrame(playVideo);
        } else if (pauseWhenHidden) {
          const video = videoRef.current;
          pausingFromObserverRef.current = true;
          video?.pause();
        }
      },
      { threshold: 0.08, rootMargin: "240px 0px" },
    );

    observer.observe(wrapperNode);
    return () => {
      observer.disconnect();
    };
  }, [autoPlay, muted, pauseWhenHidden, playVideo, priority, wrapperNode]);

  return (
    <div ref={setWrapperRef} className={`relative h-full w-full overflow-hidden bg-neutral-950 ${className ?? ""}`} aria-label={label}>
      {hasError ? (
        <div className="relative flex h-full min-h-[260px] items-end bg-[linear-gradient(135deg,#080908,#030403_52%,#091204)] p-5 text-sm text-neutral-300">
          {poster ? <Image src={poster} alt="" fill className="object-cover" aria-hidden="true" sizes="100vw" /> : null}
          {showFallbackText ? <span className="relative z-10">No pudimos reproducir este video. Podés seguir viendo el montaje o consultarnos por WhatsApp.</span> : null}
        </div>
      ) : (
        <>
          {poster && !isReady ? <Image src={poster} alt="" fill priority={priority} className={`${mediaFitClass} pointer-events-none`} aria-hidden="true" sizes="100vw" /> : null}
          <video
            ref={videoRef}
            className={`h-full w-full ${mediaFitClass}`}
            src={resolveSource()}
            poster={poster}
            autoPlay={autoPlay}
            muted
            loop={loop}
            playsInline
            preload="metadata"
            aria-label={label}
            onError={() => {
              console.warn("Chirola video element error", { src: activeSrc ?? src, label, error: videoRef.current?.error });
              setHasError(true);
            }}
            onLoadedData={() => {
              setIsReady(true);
              playVideo();
            }}
            onCanPlay={() => {
              playVideo();
            }}
            onPlaying={() => {
              setIsReady(true);
            }}
            onPause={() => {
              if (pausingFromObserverRef.current) {
                pausingFromObserverRef.current = false;
              }
            }}
          >
            Tu navegador no puede reproducir este video.
          </video>
          {autoplayRejected ? (
            <div className="absolute bottom-4 left-4 z-20 border border-white/25 bg-black/55 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Reproducí desde controles del navegador
              <button type="button" className="ml-3 underline decoration-white/40 underline-offset-4" onClick={playFromFallback}>
                Reproducir
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
