import type { EventCase } from "@/types/event";
import { r2MediaUrl } from "@/data/media-url";

export const events: EventCase[] = [
  {
    slug: "15-martina",
    title: "15 Martina",
    subtitle: "Pista LED, pantalla y aros espejados para una noche completa",
    heroVideo: r2MediaUrl("/media/eventos/evento-01/fiesta-real-web.mp4"),
    heroPoster: "/media/montajes/aros/aros-espejados-collage-02.webp",
    gallery: [
      {
        type: "video",
        src: r2MediaUrl("/media/eventos/evento-01/fiesta-real-web.mp4"),
        poster: "/media/posters/fiesta-real.jpg",
        alt: "Fiesta real con iluminación y pista de Chirola Disco",
        orientation: "vertical",
      },
      {
        type: "image",
        src: "/media/montajes/aros/aros-espejados-collage-01.webp",
        alt: "Aros espejados y bolas de espejo en montaje real de Chirola Disco",
        orientation: "vertical",
      },
      {
        type: "image",
        src: "/media/montajes/aros/aros-espejados-collage-02.webp",
        alt: "Estructura aérea con aros espejados e iluminación de salón",
        orientation: "vertical",
      },
      {
        type: "image",
        src: "/media/posters/pista-led-real.jpg",
        alt: "Pista LED real en evento Chirola Disco",
        orientation: "vertical",
      },
    ],
    services: ["Pista LED", "Iluminación", "Sonido", "Montaje completo"],
    structures: ["Estructura central", "Aros"],
    lighting: ["Escena de entrada", "Pista", "Ambientación de salón"],
    danceFloor: "Pista LED",
    description:
      "Montaje con pista LED, pantalla, sonido y estructura aérea con aros espejados para transformar el salón desde la entrada hasta la fiesta.",
    featured: true,
  },
  {
    slug: "15-maite",
    title: "XV Maite",
    subtitle: "Pantalla, pista LED y aros espejados armados para la bienvenida",
    heroVideo: r2MediaUrl("/media/eventos/evento-02/lola-pista-pantalla-aros-web.mp4"),
    heroPoster: "/media/posters/lola-pista-pantalla-aros.webp",
    gallery: [
      {
        type: "image",
        src: "/media/posters/lola-pista-pantalla-aros.webp",
        alt: "Pantalla Maite XV con pista LED y aros espejados de Chirola Disco",
        orientation: "vertical",
      },
      {
        type: "video",
        src: r2MediaUrl("/media/montajes/iluminacion/iluminacion-real.mp4"),
        poster: "/media/posters/iluminacion-fiesta.webp",
        alt: "Video de fiesta con show de luces e invitados bailando en Chirola Disco",
        orientation: "vertical",
      },
    ],
    services: ["Pista LED", "Pantalla gigante LED", "Sonido", "Montaje completo"],
    structures: ["Aros espejados", "Pantalla LED"],
    lighting: ["Entrada", "Pista", "Ambientación de salón"],
    danceFloor: "Pista LED",
    description: "Montaje completo para XV Maite con pantalla protagonista, pista LED, sonido y estructura espejada para que la bienvenida y la previa del salón tengan presencia visual.",
    featured: true,
  },
  {
    slug: "15-isabella",
    title: "XV Isabella",
    subtitle: "Montaje audiovisual registrado en video para fiesta de 15",
    heroVideo: r2MediaUrl("/media/eventos/evento-03/isabella-main-web.mp4"),
    heroPoster: "/media/posters/isabella-main.webp",
    gallery: [
      {
        type: "video",
        src: r2MediaUrl("/media/eventos/evento-03/isabella-main-web.mp4"),
        poster: "/media/posters/isabella-main.webp",
        alt: "Video principal de XV Isabella con pantalla, pista LED y ambientación de Chirola Disco",
        orientation: "vertical",
      },
    ],
    description: "Registro audiovisual de XV Isabella con pantalla, pista LED, aros espejados, iluminación y ambientación de fiesta.",
    featured: true,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
