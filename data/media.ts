import type { VideoSource } from "@/types/media";

export const heroVideoSources: VideoSource[] = [
  {
    src: "/media/hero/video-intro-720p.mp4",
    type: "video/mp4",
    media: "(max-width: 767px)",
  },
  {
    src: "/media/hero/video-intro-1080p.mp4",
    type: "video/mp4",
    media: "(min-width: 768px)",
  },
];

export const mediaManifest = {
  productionAssets: [
    "/public/media/hero/video-intro-1080p.mp4",
    "/public/media/hero/video-intro-720p.mp4",
    "/public/media/showreel/showreel-real.mp4",
    "/public/media/montajes/*/*-real.mp4",
    "/public/media/eventos/*/*",
  ],
  recommendedFutureFormats: ["HLS .m3u8", "MP4 1080p", "MP4 720p", "AVIF/WebP posters"],
};
