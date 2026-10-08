export type VideoSource = {
  src: string;
  type: "video/mp4" | "application/x-mpegURL";
  media?: string;
};

export type MediaAsset = {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  orientation?: "horizontal" | "vertical" | "square";
  sources?: VideoSource[];
};
