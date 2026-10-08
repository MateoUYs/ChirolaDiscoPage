import type { MediaAsset } from "./media";

export type EventCase = {
  slug: string;
  title: string;
  subtitle: string;
  date?: string;
  location?: string;
  venue?: string;
  heroVideo: string;
  heroPoster: string;
  gallery: MediaAsset[];
  services?: string[];
  structures?: string[];
  lighting?: string[];
  danceFloor?: string;
  description: string;
  featured: boolean;
};
