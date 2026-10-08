export const siteConfig = {
  name: "Chirola Disco",
  alternateNames: ["Chirola Disco Baile", "Chiro Disco", "Chirola Disco Página Oficial"],
  url: "https://chiroladisco.com",
  description:
    "Chirola Disco realiza montajes audiovisuales, estructuras, pista LED, iluminación y sonido para cumpleaños de 15 y eventos sociales.",
  whatsapp: {
    number: "59892180761",
    displayNumber: "+598 92 180 761",
    message:
      "Hola Chirola Disco, estoy organizando un cumpleaños de 15 y quería consultar disponibilidad y opciones de montaje.",
  },
  instagram: "https://www.instagram.com/chiroladisco/",
  sameAs: ["https://www.instagram.com/chiroladisco/", "https://www.instagram.com/chiroladiscobaile/", "https://www.facebook.com/Chirodiscopaginaoficial"],
  email: "contacto@chiroladisco.com",
  serviceAreas: ["Cumpleaños de 15", "Fiestas privadas", "Eventos sociales"],
  logo: "/media/logo/chirola-disco-logo-cropped.webp",
};

export function whatsappUrl(message = siteConfig.whatsapp.message) {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function contactHref(message = siteConfig.whatsapp.message) {
  return whatsappUrl(message) ?? `mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta desde la web")}&body=${encodeURIComponent(message)}`;
}
