import type { MediaAsset } from "@/types/media";
import { r2MediaUrl } from "@/data/media-url";

export type Montaje = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  media: MediaAsset;
};

export const montajes: Montaje[] = [
  {
    slug: "cuadrilatero-espejado",
    title: "Cuadrilátero espejado",
    kicker: "Reflejo, altura, presencia",
    description: "Una estructura que transforma el centro del salón y multiplica la luz de la pista.",
    media: {
      type: "video",
      src: r2MediaUrl("/media/montajes/cuadrilatero/cuadrilatero-espejado-real.mp4"),
      poster: "/media/posters/cuadrilatero-espejado-contact-2350.webp",
      alt: "Cuadrilátero espejado en montaje real de Chirola Disco",
      orientation: "vertical",
    },
  },
  {
    slug: "aros",
    title: "Aros y estructuras aéreas",
    kicker: "Volumen arriba de la fiesta",
    description: "Piezas suspendidas para darle profundidad al salón sin cargar la pista.",
    media: {
      type: "image",
      src: "/media/montajes/aros/aros-espejados-collage-02.webp",
      alt: "Aros y bolas espejadas suspendidas en un montaje real de Chirola Disco",
      orientation: "vertical",
    },
  },
  {
    slug: "pista-led",
    title: "Pista LED",
    kicker: "El piso también ilumina",
    description: "Una base visual potente para entrada, baile, fotos y el momento fuerte de la noche.",
    media: {
      type: "video",
      src: r2MediaUrl("/media/montajes/pista-led/pista-led-1818.mp4"),
      poster: "/media/posters/pista-led-1818.webp",
      alt: "Pista LED encendida en un montaje real de Chirola Disco",
      orientation: "vertical",
    },
  },
  {
    slug: "pantalla-led",
    title: "Pantalla gigante LED",
    kicker: "Visuales para el momento fuerte",
    description: "Una pantalla de alto impacto para entradas, videos, nombres, visuales y momentos protagonistas.",
    media: {
      type: "video",
      src: r2MediaUrl("/media/eventos/evento-02/chirola-pantalla-real-web.mp4"),
      poster: "/media/posters/chirola-pantalla-real.jpg",
      alt: "Pantalla gigante LED en montaje real de Chirola Disco",
      orientation: "vertical",
    },
  },
];

export function getMontajeBySlug(slug: string) {
  return montajes.find((montaje) => montaje.slug === slug);
}
